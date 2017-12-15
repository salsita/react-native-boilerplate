declare module "prop-types" {
  export type Validator<T> = ((object: T, key: string, componentName: string, ...rest: any[]) => Error | null) & { _type: T }

  export interface Requireable<T> extends Validator<T | undefined> {
    isRequired: Validator<T>;
  }

  export type ValidationMap<T> = { [K in keyof T]?: Validator<T[K]> };

  export const any: Requireable<any>;
  export const array: Requireable<any>;
  export const bool: Requireable<boolean>;
  export const func: Requireable<() => any>;
  export const number: Requireable<number>;
  export const object: Requireable<{[s: string]: any}>;
  export const string: Requireable<string>;
  export const node: Requireable<any>;
  export const element: Requireable<any>;
  export const symbol: Requireable<Symbol>;
  export function instanceOf(expectedClass: {}): Requireable<any>;
  export function oneOf(types: any[]): Requireable<any>;
  export function oneOfType(types: Array<Validator<any>>): Requireable<any>;
  export function arrayOf<T>(type: Validator<T>): Requireable<T[]>;
  export function objectOf<T>(type: Validator<T>): Requireable<{ [s: string]: T }>;
  export function shape<T>(type: ValidationMap<T>): Requireable<T>;

  export type InterfaceOf<T extends { [K in keyof T]: Validator<any> }> = { [K in keyof T]: T[K]["_type"] }
}
