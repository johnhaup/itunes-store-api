/**
 * Safely access named capturing groups from a regular expression.
 *
 * @param string - The string against which to match the regular expression.
 * @param regex - The regular expression to match.
 */
export declare function matchGroups<T extends Record<string, any>>(string: string, regex: RegExp): Partial<T>;
