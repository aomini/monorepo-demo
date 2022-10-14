## Package Documentation

```
/**
 * @packageDocumentation
 *
 * <img src="https://webpack.js.org/site-logo.1fcab817090e78435061.svg" height="200" width="300" align="right" />
 *
 * <h3>Utilities</h3>
 * `@mono/utils` is a package containing utilities or helper functions for the application.
 * This package is managed by <b>FD-UTILITIES</b> Team.
 *
 * @remarks
 * Assigned team <i>FD-UTILITIES</i>
 *
 * @packageDocumentation
 */
```

## Public/Private/Beta/Alpha Methods

> Replace the @public tag accordingly.

```
/**
 * Adds the sum of two numbers where
 * each parameters are of a specified type
 *
 * @param a - First number
 * @param b - Second number
 * @returns {number}
 * @public
 */
```

## Example

````
/**
 * Print `new function demo` to the console
 *
 * @returns void
 * @beta
 *
 * @example
 * Here's an example of how to use this
 * ```ts
 * print();
 * ```
 */
````

## Adding link reference

```
/**
 * A function that uses another function which returns typeof {@link @mono/utils#sum}
 * @param x
 */
```

## Referencing Interfaces or another function

```
export enum WarningStyle {
  DialogBox,
  StatusMessage,
  LogOnly,
}

export interface IWarningOptions {
  /**
   * Determines how the warning will be displayed.
   *
   * @remarks
   * See {@link WarningStyle| the WarningStyle enum} for more details.
   *
   * @defaultValue `WarningStyle.DialogBox`
   */
  warningStyle: WarningStyle;

  /**
   * Whether the warning can interrupt a user's current activity.
   * @defaultValue
   * The default is `true` unless
   *  `WarningStyle.StatusMessage` was requested.
   */
  cancellable?: boolean;

  /**
   * The warning message
   */
  message: string;
}
```
