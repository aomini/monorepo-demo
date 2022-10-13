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
