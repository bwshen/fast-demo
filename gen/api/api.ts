/* tslint:disable */
/* eslint-disable */
/**
 * OMDb API
 * This API requires authorization, you can get a free key here: [http://omdbapi.com/apikey.aspx](http://omdbapi.com/apikey.aspx)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: bfritz@fadingsignal.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';


/**
 * IDParameterApi - axios parameter creator
 * @export
 */
export const IDParameterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns a single result based on the ID provided
         * @param {string} i A valid IMDb ID (e.g. tt0000001)
         * @param {'short' | 'full'} [plot] Return short or full plot
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getId: async (i: string, plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'i' is not null or undefined
            assertParamExists('getId', 'i', i)
            const localVarPath = `/?i`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyQueryParam required
            await setApiKeyToObject(localVarQueryParameter, "apikey", configuration)

            if (i !== undefined) {
                localVarQueryParameter['i'] = i;
            }

            if (plot !== undefined) {
                localVarQueryParameter['plot'] = plot;
            }

            if (r !== undefined) {
                localVarQueryParameter['r'] = r;
            }

            if (callback !== undefined) {
                localVarQueryParameter['callback'] = callback;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IDParameterApi - functional programming interface
 * @export
 */
export const IDParameterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IDParameterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns a single result based on the ID provided
         * @param {string} i A valid IMDb ID (e.g. tt0000001)
         * @param {'short' | 'full'} [plot] Return short or full plot
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getId(i: string, plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getId(i, plot, r, callback, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IDParameterApi - factory interface
 * @export
 */
export const IDParameterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IDParameterApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns a single result based on the ID provided
         * @param {string} i A valid IMDb ID (e.g. tt0000001)
         * @param {'short' | 'full'} [plot] Return short or full plot
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getId(i: string, plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getId(i, plot, r, callback, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IDParameterApi - object-oriented interface
 * @export
 * @class IDParameterApi
 * @extends {BaseAPI}
 */
export class IDParameterApi extends BaseAPI {
    /**
     * 
     * @summary Returns a single result based on the ID provided
     * @param {string} i A valid IMDb ID (e.g. tt0000001)
     * @param {'short' | 'full'} [plot] Return short or full plot
     * @param {'json' | 'xml'} [r] The response type to return
     * @param {string} [callback] JSONP callback name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IDParameterApi
     */
    public getId(i: string, plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options?: any) {
        return IDParameterApiFp(this.configuration).getId(i, plot, r, callback, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SearchParameterApi - axios parameter creator
 * @export
 */
export const SearchParameterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns an array of results for a given title
         * @param {string} s Title of movie or series
         * @param {number} [y] Year of release
         * @param {'movie' | 'series'} [type] Return movie or series
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {number} [page] Page number to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titleSearch: async (s: string, y?: number, type?: 'movie' | 'series', r?: 'json' | 'xml', page?: number, callback?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 's' is not null or undefined
            assertParamExists('titleSearch', 's', s)
            const localVarPath = `/?s`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyQueryParam required
            await setApiKeyToObject(localVarQueryParameter, "apikey", configuration)

            if (s !== undefined) {
                localVarQueryParameter['s'] = s;
            }

            if (y !== undefined) {
                localVarQueryParameter['y'] = y;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (r !== undefined) {
                localVarQueryParameter['r'] = r;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (callback !== undefined) {
                localVarQueryParameter['callback'] = callback;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SearchParameterApi - functional programming interface
 * @export
 */
export const SearchParameterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchParameterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns an array of results for a given title
         * @param {string} s Title of movie or series
         * @param {number} [y] Year of release
         * @param {'movie' | 'series'} [type] Return movie or series
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {number} [page] Page number to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async titleSearch(s: string, y?: number, type?: 'movie' | 'series', r?: 'json' | 'xml', page?: number, callback?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.titleSearch(s, y, type, r, page, callback, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SearchParameterApi - factory interface
 * @export
 */
export const SearchParameterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchParameterApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns an array of results for a given title
         * @param {string} s Title of movie or series
         * @param {number} [y] Year of release
         * @param {'movie' | 'series'} [type] Return movie or series
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {number} [page] Page number to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titleSearch(s: string, y?: number, type?: 'movie' | 'series', r?: 'json' | 'xml', page?: number, callback?: string, options?: any): AxiosPromise<void> {
            return localVarFp.titleSearch(s, y, type, r, page, callback, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SearchParameterApi - object-oriented interface
 * @export
 * @class SearchParameterApi
 * @extends {BaseAPI}
 */
export class SearchParameterApi extends BaseAPI {
    /**
     * 
     * @summary Returns an array of results for a given title
     * @param {string} s Title of movie or series
     * @param {number} [y] Year of release
     * @param {'movie' | 'series'} [type] Return movie or series
     * @param {'json' | 'xml'} [r] The response type to return
     * @param {number} [page] Page number to return
     * @param {string} [callback] JSONP callback name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchParameterApi
     */
    public titleSearch(s: string, y?: number, type?: 'movie' | 'series', r?: 'json' | 'xml', page?: number, callback?: string, options?: any) {
        return SearchParameterApiFp(this.configuration).titleSearch(s, y, type, r, page, callback, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TitleParameterApi - axios parameter creator
 * @export
 */
export const TitleParameterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns the most popular match for a given title
         * @param {string} t Title of movie or series
         * @param {number} [y] Year of release
         * @param {'movie' | 'series'} [type] Return movie or series
         * @param {'short' | 'full'} [plot] Return short or full plot
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTitle: async (t: string, y?: number, type?: 'movie' | 'series', plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 't' is not null or undefined
            assertParamExists('getTitle', 't', t)
            const localVarPath = `/?t`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyQueryParam required
            await setApiKeyToObject(localVarQueryParameter, "apikey", configuration)

            if (t !== undefined) {
                localVarQueryParameter['t'] = t;
            }

            if (y !== undefined) {
                localVarQueryParameter['y'] = y;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (plot !== undefined) {
                localVarQueryParameter['plot'] = plot;
            }

            if (r !== undefined) {
                localVarQueryParameter['r'] = r;
            }

            if (callback !== undefined) {
                localVarQueryParameter['callback'] = callback;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TitleParameterApi - functional programming interface
 * @export
 */
export const TitleParameterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TitleParameterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns the most popular match for a given title
         * @param {string} t Title of movie or series
         * @param {number} [y] Year of release
         * @param {'movie' | 'series'} [type] Return movie or series
         * @param {'short' | 'full'} [plot] Return short or full plot
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTitle(t: string, y?: number, type?: 'movie' | 'series', plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTitle(t, y, type, plot, r, callback, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TitleParameterApi - factory interface
 * @export
 */
export const TitleParameterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TitleParameterApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns the most popular match for a given title
         * @param {string} t Title of movie or series
         * @param {number} [y] Year of release
         * @param {'movie' | 'series'} [type] Return movie or series
         * @param {'short' | 'full'} [plot] Return short or full plot
         * @param {'json' | 'xml'} [r] The response type to return
         * @param {string} [callback] JSONP callback name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTitle(t: string, y?: number, type?: 'movie' | 'series', plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getTitle(t, y, type, plot, r, callback, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TitleParameterApi - object-oriented interface
 * @export
 * @class TitleParameterApi
 * @extends {BaseAPI}
 */
export class TitleParameterApi extends BaseAPI {
    /**
     * 
     * @summary Returns the most popular match for a given title
     * @param {string} t Title of movie or series
     * @param {number} [y] Year of release
     * @param {'movie' | 'series'} [type] Return movie or series
     * @param {'short' | 'full'} [plot] Return short or full plot
     * @param {'json' | 'xml'} [r] The response type to return
     * @param {string} [callback] JSONP callback name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitleParameterApi
     */
    public getTitle(t: string, y?: number, type?: 'movie' | 'series', plot?: 'short' | 'full', r?: 'json' | 'xml', callback?: string, options?: any) {
        return TitleParameterApiFp(this.configuration).getTitle(t, y, type, plot, r, callback, options).then((request) => request(this.axios, this.basePath));
    }
}


