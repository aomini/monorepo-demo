Add workspace in package.json of root workspace. Adding the glob makes all of the packages matching the glob available in the workspace.

```json
"workspaces": [
  "packages/*"
]
```

Also, init npm in all of the packages. The packages should follow the organization prefix example `@hazesoft/utils`.

In the dependency of consumer package add the dependency package.

```json
"dependencies": {
  "@mono/utils": "^1.0.0"
},
```

From the root, do yarn and check node_modules to see if there are packages inside of the organization prefix.

In order to build the typescript files add tsconfig.json in the root of the project with all workspace settings which will be applied to all of the files. But we gonna create a separate tsconfig file for all of the packages to do overrides.

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "composite": true,
    "target": "ES2018",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "declaration": true
  },
  "exclude": ["**/node_modules/**"]
}
```

Now, create a tsconfig.json inside of the /packages which will be extended by all of the packages. Let's call the file tsconfig.settings.json.

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "types": [],
    "sourceMap": true,
    "target": "ES2018",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

Then, create individual tsconfig.json file inside of all the /packages/\*. And extend the outer tsconfig.settings.json file.

```json
{
  "extends": "../tsconfig.settings.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

We are extending from tsconfig.settings.json. The outDir, rootDir & include can be different according to the packages so we put it inside of the packages tsconfig.json instead of tsconfig.settings.json which is common.

Now, we are ready to compile our files with typescript. Add a build script in package.json like

```json
 "scripts": {
  "build": "tsc -b .",
},
```

And cd to the package and hit yarn build. You should see a build / dist / a directory depending upon the outDir of our tsconfig.json file. You can also run the yarn scripts from the root workspace dir by doing `yarn workspace @prefix/package-name command`.

Also, now we are going to use the typscript workspaces. For that we need to have composite: true in all of the packages tsconfig.json and add a tsconfig.json in root of /packages and set reference to all of the composite packages.

```json
{
  // Doesnt generates the js next to the packages ts
  "files": [],
  "references": [{ "path": "utils" }, { "path": "storefront" }]
}
```

Now, let's add some linting for all of our packages. The advantage of this is we only add linting at one place it's going to reflect across all our packages. Also, having .eslintrc or eslint config file inside of only packages won't work. So, we must need to have one eslintrc in the root dir.
Example:

> On the root directory create .eslintrc

```json
{
  "env": {
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "project": ["./tsconfig.json"]
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "prefer-const": "error",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off"
  }
}
```

> Inside the packages extend the base .eslintrc and set parserOptions to tsconfig.json files.

```json
{
  "extends": "../../.eslintrc",
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

Lets also update the package.json file with two scripts clean and lint.
For clean add `rimraf` as a dependency in global as we need this in every packages.

Also, add a .eslintignore file in root to ignore test files.

```
packages/*/tests/*.ts
```

## Lerna package management system

Also, add lerna as a global depency as we can utilize lots of commands without having to do npx lerna or yarn lerna.

In root, add lerna as a dependency. `yarn add -DW lerna`.
Add lerna config file to root of the project.

```json
{
  "packages": ["packages/*"],
  "npmClient": "yarn",
  "version": "independent",
  "useWorkspaces": true,
  "nohoist": ["parcel-bundler"]
}
```

Quickly view the lerna commands by `lerna --help`.

If you add a package to dependencies list and hit `yarn` from root dir. It will go to the root node_modules. But with lerna we can see the dependencies in it's own node modules.
Hit `lerna link` and see if you can see the node_modules.

Now, with lerna we are able to run various commands. For Example: if we want to build all of the packages then we can simply do `lerna run build` here build is a npm script.

Since, we have lot of scripts in our mono repo and so lerna run <command>. Also, individual packages have individual scripts so we want to have a centralized mechanism.

### Scripty

We can use scripty to manage our scripts.
It's a workspace dependency so we add `yarn add -DW scripty`.
(on the blog)

> When building multiples app in a single repo. Use ignore flag or scope to build.
> [https://www.npmjs.com/package/@lerna/filter-options](lerna filter option)

## Publishing tags and Changelogs

Lerna automatically publishes all of the packages.
You can do `lerna version` and it tags all of the packages. If you have a version set on lerna.json config file then all of the packages updates accordingly.
But with conventional commits you can generate changelogs when releasing a tag of packages.

```bash
lerna version --conventional-commits
```

Try out versional allow branch control

## Add a package dependency to another package

> `lerna add @prefix/pkg --scope '@prefix/{pkg1, pkg2}'`
> Quotes might be need as sh may read it as a special syntax.
> Do lerna link to see local version of package.
> lerna run dev --scope @shlack/ui --stream

> Watch files
> yarn tsc -b packages --watch --preserverWatchOutput

## Documentation Generator

> `yarn add -WD @microsoft/api-extractor` > `yarn api-extractor init`

Now, rename the file to `api-extractor-base.json` and put it inside of /packages.

```json
/**
 * Config file for API Extractor.  For more info, please visit: https://api-extractor.com
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",

  /**
   * Optionally specifies another JSON config file that this file extends from.  This provides a way for
   * standard settings to be shared across multiple projects.
   *
   * If the path starts with "./" or "../", the path is resolved relative to the folder of the file that contains
   * the "extends" field.  Otherwise, the first path segment is interpreted as an NPM package name, and will be
   * resolved using NodeJS require().
   *
   * SUPPORTED TOKENS: none
   * DEFAULT VALUE: ""
   */
  // "extends": "./shared/api-extractor-base.json"
  // "extends": "my-package/include/api-extractor-base.json"

  /**
   * Determines the "<projectFolder>" token that can be used with other config file settings.  The project folder
   * typically contains the tsconfig.json and package.json config files, but the path is user-defined.
   *
   * The path is resolved relative to the folder of the config file that contains the setting.
   *
   * The default value for "projectFolder" is the token "<lookup>", which means the folder is determined by traversing
   * parent folders, starting from the folder containing api-extractor.json, and stopping at the first folder
   * that contains a tsconfig.json file.  If a tsconfig.json file cannot be found in this way, then an error
   * will be reported.
   *
   * SUPPORTED TOKENS: <lookup>
   * DEFAULT VALUE: "<lookup>"
   */
  // "projectFolder": "..",

  /**
   * (REQUIRED) Specifies the .d.ts file to be used as the starting point for analysis.  API Extractor
   * analyzes the symbols exported by this module.
   *
   * The file extension must be ".d.ts" and not ".ts".
   *
   * The path is resolved relative to the folder of the config file that contains the setting; to change this,
   * prepend a folder token such as "<projectFolder>".
   *
   * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
   */
  "mainEntryPointFilePath": "<projectFolder>/lib/index.d.ts",

  /**
   * A list of NPM package names whose exports should be treated as part of this package.
   *
   * For example, suppose that Webpack is used to generate a distributed bundle for the project "library1",
   * and another NPM package "library2" is embedded in this bundle.  Some types from library2 may become part
   * of the exported API for library1, but by default API Extractor would generate a .d.ts rollup that explicitly
   * imports library2.  To avoid this, we can specify:
   *
   *   "bundledPackages": [ "library2" ],
   *
   * This would direct API Extractor to embed those types directly in the .d.ts rollup, as if they had been
   * local files for library1.
   */
  "bundledPackages": [],

  /**
   * Determines how the TypeScript compiler engine will be invoked by API Extractor.
   */
  "compiler": {
    /**
     * Specifies the path to the tsconfig.json file to be used by API Extractor when analyzing the project.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * Note: This setting will be ignored if "overrideTsconfig" is used.
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<projectFolder>/tsconfig.json"
     */
    // "tsconfigFilePath": "<projectFolder>/tsconfig.json",
    /**
     * Provides a compiler configuration that will be used instead of reading the tsconfig.json file from disk.
     * The object must conform to the TypeScript tsconfig schema:
     *
     * http://json.schemastore.org/tsconfig
     *
     * If omitted, then the tsconfig.json file will be read from the "projectFolder".
     *
     * DEFAULT VALUE: no overrideTsconfig section
     */
    // "overrideTsconfig": {
    //   . . .
    // }
    /**
     * This option causes the compiler to be invoked with the --skipLibCheck option. This option is not recommended
     * and may cause API Extractor to produce incomplete or incorrect declarations, but it may be required when
     * dependencies contain declarations that are incompatible with the TypeScript engine that API Extractor uses
     * for its analysis.  Where possible, the underlying issue should be fixed rather than relying on skipLibCheck.
     *
     * DEFAULT VALUE: false
     */
    // "skipLibCheck": true,
  },

  /**
   * Configures how the API report file (*.api.md) will be generated.
   */
  "apiReport": {
    /**
     * (REQUIRED) Whether to generate an API report.
     */
    "enabled": true

    /**
     * The filename for the API report files.  It will be combined with "reportFolder" or "reportTempFolder" to produce
     * a full file path.
     *
     * The file extension should be ".api.md", and the string should not contain a path separator such as "\" or "/".
     *
     * SUPPORTED TOKENS: <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<unscopedPackageName>.api.md"
     */
    // "reportFileName": "<unscopedPackageName>.api.md",

    /**
     * Specifies the folder where the API report file is written.  The file name portion is determined by
     * the "reportFileName" setting.
     *
     * The API report file is normally tracked by Git.  Changes to it can be used to trigger a branch policy,
     * e.g. for an API review.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<projectFolder>/etc/"
     */
    // "reportFolder": "<projectFolder>/etc/",

    /**
     * Specifies the folder where the temporary report file is written.  The file name portion is determined by
     * the "reportFileName" setting.
     *
     * After the temporary file is written to disk, it is compared with the file in the "reportFolder".
     * If they are different, a production build will fail.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<projectFolder>/temp/"
     */
    // "reportTempFolder": "<projectFolder>/temp/"
  },

  /**
   * Configures how the doc model file (*.api.json) will be generated.
   */
  "docModel": {
    /**
     * (REQUIRED) Whether to generate a doc model file.
     */
    "enabled": true,

    /**
     * The output path for the doc model file.  The file extension should be ".api.json".
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<projectFolder>/temp/<unscopedPackageName>.api.json"
     */
    "apiJsonFilePath": "<projectFolder>/../../temp/<unscopedPackageName>.api.json"
  },

  /**
   * Configures how the .d.ts rollup file will be generated.
   */
  "dtsRollup": {
    /**
     * (REQUIRED) Whether to generate the .d.ts rollup file.
     */
    "enabled": true,

    /**
     * Specifies the output path for a .d.ts rollup file to be generated without any trimming.
     * This file will include all declarations that are exported by the main entry point.
     *
     * If the path is an empty string, then this file will not be written.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<projectFolder>/dist/<unscopedPackageName>.d.ts"
     */
    "untrimmedFilePath": "<projectFolder>/dist/<unscopedPackageName>-private.d.ts",

    /**
     * Specifies the output path for a .d.ts rollup file to be generated with trimming for a "beta" release.
     * This file will include only declarations that are marked as "@public" or "@beta".
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: ""
     */
    "betaTrimmedFilePath": "<projectFolder>/dist/<unscopedPackageName>-beta.d.ts",

    /**
     * Specifies the output path for a .d.ts rollup file to be generated with trimming for a "public" release.
     * This file will include only declarations that are marked as "@public".
     *
     * If the path is an empty string, then this file will not be written.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: ""
     */
    "publicTrimmedFilePath": "<projectFolder>/dist/<unscopedPackageName>.d.ts"

    /**
     * When a declaration is trimmed, by default it will be replaced by a code comment such as
     * "Excluded from this release type: exampleMember".  Set "omitTrimmingComments" to true to remove the
     * declaration completely.
     *
     * DEFAULT VALUE: false
     */
    // "omitTrimmingComments": true
  },

  /**
   * Configures how the tsdoc-metadata.json file will be generated.
   */
  "tsdocMetadata": {
    /**
     * Whether to generate the tsdoc-metadata.json file.
     *
     * DEFAULT VALUE: true
     */
    // "enabled": true,
    /**
     * Specifies where the TSDoc metadata file should be written.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as "<projectFolder>".
     *
     * The default value is "<lookup>", which causes the path to be automatically inferred from the "tsdocMetadata",
     * "typings" or "main" fields of the project's package.json.  If none of these fields are set, the lookup
     * falls back to "tsdoc-metadata.json" in the package folder.
     *
     * SUPPORTED TOKENS: <projectFolder>, <packageName>, <unscopedPackageName>
     * DEFAULT VALUE: "<lookup>"
     */
    // "tsdocMetadataFilePath": "<projectFolder>/dist/tsdoc-metadata.json"
  },

  /**
   * Specifies what type of newlines API Extractor should use when writing output files.  By default, the output files
   * will be written with Windows-style newlines.  To use POSIX-style newlines, specify "lf" instead.
   * To use the OS's default newline kind, specify "os".
   *
   * DEFAULT VALUE: "crlf"
   */
  // "newlineKind": "crlf",

  /**
   * Configures how API Extractor reports error and warning messages produced during analysis.
   *
   * There are three sources of messages:  compiler messages, API Extractor messages, and TSDoc messages.
   */
  "messages": {
    /**
     * Configures handling of diagnostic messages reported by the TypeScript compiler engine while analyzing
     * the input .d.ts files.
     *
     * TypeScript message identifiers start with "TS" followed by an integer.  For example: "TS2551"
     *
     * DEFAULT VALUE:  A single "default" entry with logLevel=warning.
     */
    "compilerMessageReporting": {
      /**
       * Configures the default routing for messages that don't match an explicit rule in this table.
       */
      "default": {
        /**
         * Specifies whether the message should be written to the the tool's output log.  Note that
         * the "addToApiReportFile" property may supersede this option.
         *
         * Possible values: "error", "warning", "none"
         *
         * Errors cause the build to fail and return a nonzero exit code.  Warnings cause a production build fail
         * and return a nonzero exit code.  For a non-production build (e.g. when "api-extractor run" includes
         * the "--local" option), the warning is displayed but the build will not fail.
         *
         * DEFAULT VALUE: "warning"
         */
        "logLevel": "warning"

        /**
         * When addToApiReportFile is true:  If API Extractor is configured to write an API report file (.api.md),
         * then the message will be written inside that file; otherwise, the message is instead logged according to
         * the "logLevel" option.
         *
         * DEFAULT VALUE: false
         */
        // "addToApiReportFile": false
      }

      // "TS2551": {
      //   "logLevel": "warning",
      //   "addToApiReportFile": true
      // },
      //
      // . . .
    },

    /**
     * Configures handling of messages reported by API Extractor during its analysis.
     *
     * API Extractor message identifiers start with "ae-".  For example: "ae-extra-release-tag"
     *
     * DEFAULT VALUE: See api-extractor-defaults.json for the complete table of extractorMessageReporting mappings
     */
    "extractorMessageReporting": {
      "default": {
        "logLevel": "warning"
        // "addToApiReportFile": false
      }

      // "ae-extra-release-tag": {
      //   "logLevel": "warning",
      //   "addToApiReportFile": true
      // },
      //
      // . . .
    },

    /**
     * Configures handling of messages reported by the TSDoc parser when analyzing code comments.
     *
     * TSDoc message identifiers start with "tsdoc-".  For example: "tsdoc-link-tag-unescaped-text"
     *
     * DEFAULT VALUE:  A single "default" entry with logLevel=warning.
     */
    "tsdocMessageReporting": {
      "default": {
        "logLevel": "warning"
        // "addToApiReportFile": false
      }

      // "tsdoc-link-tag-unescaped-text": {
      //   "logLevel": "warning",
      //   "addToApiReportFile": true
      // },
      //
      // . . .
    }
  }
}
```

Now, create a `api-extractor.json` file and extend the base api extractor config. Make sure to build the projects with lerna run build before you run api extractor.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
  "mainEntryPointFilePath": "<projectFolder>/dist/index.d.ts",
  "extends": "../api-extractor-base.json"
}
```

Now, we need a build command in scripts/packages.

```bash
#!/usr/bin/env bash
echo "┏━━━ 🧩 API REPORT: $(pwd) ━━━━━━━━━━━━━━━━━━━━━"
yarn api-extractor run --local

```

Also, before we run the extractor we need to have `etc` folder in every packages. We can create that with lerna `lerna exec 'mkdir etc'`.

## Api Documentation

> `yarn add -WD @microsoft/api-documenter`

# Lerna individually

lerna add eslint packages/eslint-config --dev

# Create new package

$ lerna create @mono/eslint-config
