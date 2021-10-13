import axios from 'axios';
import {TitleParameterApi, SearchParameterApi, IDParameterApi, Configuration} from './gen/api/index.ts';

export class API {
  private _titleAPI: TitleParameterApi;
  private _searchAPI: SearchParameterApi;
  private _IDAPI: IDParameterApi;


  constructor(apiKey: string) {
    const config = new Configuration({apiKey, basePath: "//omdbapi.com"});
    this._titleAPI = new TitleParameterApi(config);
    this._searchAPI = new SearchParameterApi(config);
    this._IDAPI = new IDParameterApi(config);
  }

  search(term: string, page = 0): AxiosPromise {
    //API does not use 0 offset
    return this._searchAPI.titleSearch(term, undefined, undefined, undefined, page+1);
  }

  getId(imdbID: string, plot: 'short' | 'full' = 'full'): AxiosPromise {
    return this._IDAPI.getId(imdbID, plot);
  }
}

export default API;
