/**
 * Checks if `value` is a property name and not a property path.
 *
 */
declare const isKey: <T extends string>(value: T, object: object) => boolean;

export { isKey as default };
