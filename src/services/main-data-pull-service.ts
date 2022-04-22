import axios, { AxiosInstance } from 'axios';
import DatabaseData from '../types/main-data-pull-service-type';

const DataPullService = new (class DataPullService {
  // eslint-disable-next-line class-methods-use-this

  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public fetch = async (): Promise<DatabaseData[]> => {
    const { data } = await this.api.get<DatabaseData[]>('/data');

    return data;
  };

  // senamadiškai
  // public fetch = async (): Promise<DatabaseData[]> => {
  //   const response = await fetch('http://localhost:5000/data');
  //   const places = await response.json() as DatabaseData[];

  //   return data;
  // };
})();

export default DataPullService;
