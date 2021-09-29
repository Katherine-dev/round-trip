import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { SearchRequest } from './requests/SearchRequest';
import { SearchResponse } from './responses/SearchResponse';

class ApiProvider {
  protected readonly networkClient: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.networkClient = Axios.create(config);
  }

  public search(origin: string | number, dest: string | number, options?: Partial<SearchRequest>) {
    const requiredParams: Partial<{
      oName: string,
      dName: string,
      oPos: number,
      dPos: number
    }> = {};

    if (typeof origin === 'number' && typeof dest === 'number') {
      requiredParams.oPos = origin;
      requiredParams.dPos = dest;
    } else if (typeof origin === 'string' && typeof dest === 'string') {
      requiredParams.oName = origin;
      requiredParams.dName = dest;
    }

    return this.networkClient.get<SearchResponse>('/search', {
      params: {
        key: process.env.VUE_APP_API_KEY,
        ...requiredParams,
        ...options,
      },
    });
  }
}

const config: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
};

const instance = new ApiProvider(config);

export default instance;
