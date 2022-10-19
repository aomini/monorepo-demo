/**
 * Warning Styles
 */
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

/**
 * Adds the sum of two numbers where
 * each parameters are of a specified type
 *
 * @param a - First number
 * @param b - Second number
 * @returns {number}
 * @deprecated
 * @public
 */
export const sum = (a: number, b: number) => a + b * 2;

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
export const print = () => console.log("new function demo");

/**
 * Internal Function
 * @param a - A number to multiply
 * @returns {number}
 * @internal
 */
export const internalFunction = (a: number) => a * 2;

/**
 * A function that uses another function which returns typeof {@link @mono/utils#sum}
 * @param x
 */
export const linkFunction = (x: number) => {
  return internalFunction(x);
};
