import axios, { AxiosInstance } from 'axios';
import Place from '../types';

const PlacesService = new (class PlacesService {
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

  public fetch = async (): Promise<Place[]> => {
    const { data } = await this.api.get<Place[]>('/places');

    return data;
  };

  // senamadiškai
  // public fetch = async (): Promise<Place[]> => {
  //   const response = await fetch('http://localhost:5000/places');
  //   const places = await response.json() as Place[];

  //   return places;
  // };
})();

export default PlacesService;
