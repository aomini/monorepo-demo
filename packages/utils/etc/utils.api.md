## API Report File for "@mono/utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// Warning: (ae-internal-missing-underscore) The name "internalFunction" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export const internalFunction: (a: number) => number;

// @public (undocumented)
export interface IWarningOptions {
    cancellable?: boolean;
    message: string;
    warningStyle: WarningStyle;
}

// @public
export const linkFunction: (x: number) => number;

// @beta
const print_2: () => void;
export { print_2 as print }

// @public @deprecated
export const sum: (a: number, b: number) => number;

// @public (undocumented)
export enum WarningStyle {
    // (undocumented)
    DialogBox = 0,
    // (undocumented)
    LogOnly = 2,
    // (undocumented)
    StatusMessage = 1
}

```
