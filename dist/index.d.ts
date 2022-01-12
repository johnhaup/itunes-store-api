import { Entities, Lookup, LookupResponse, Media, Options, SearchOptions, SearchResponse } from "./types";
/**
 * Search within Apple's various store catalogs.
 *
 * @param search - A string to search for.
 * @param [options] - An optional set of settings.
 * @param [options.attribute] - Which attribute to search for, relative to the specified media type.
 * @param [options.country] - A two-letter country code where the queried store catalog will be from.
 * @param [options.entity] - The type of results returned, relative to the specified media type.
 * @param [options.explicit] - Whether to include explicit content.
 * @param [options.limit] - Limit the number of results.
 * @param [options.media] - The media type to search for.
 * @param [options.sort] - Whether to sort results by popularity or recentness.
 * @returns A promise fulfilling into the fetched results.
 *
 * @example
 *
 * ```js
 * const { results } = await search("Her", {
 *   media: "movie"
 * })
 *
 * // results: [Result, Result, Result...]
 * ```
 */
export declare function search<M extends Media, E extends Entities[M]>(search: string, options?: Partial<SearchOptions<M, E>>): Promise<SearchResponse<M, E>>;
/**
 * Look for a specific result within Apple's various store catalogs.
 *
 * @param type - The type of value to look for.
 * @param value - The value to look for.
 * @param [options] - An optional set of settings.
 * @param [options.country] - A two-letter country code where the queried store catalog will be from.
 * @returns A promise fulfilling into the fetched results.
 *
 * @example
 *
 * ```js
 * const { results } = await lookup(
 *   "id",
 *   "https://music.apple.com/us/album/kim-jessie/1007596648?i=1007596731"
 * )
 *
 * // results: [Result]
 * ```
 */
export declare function lookup(type: Lookup, value: number, options?: Partial<Options>): Promise<LookupResponse>;
export declare function lookup(type: "url", value: string, options?: Partial<Options>): Promise<LookupResponse>;
export * from "./types";
