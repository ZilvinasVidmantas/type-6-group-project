import axios, { AxiosInstance } from 'axios';
// import { User } from '../types';

const UsersService = new (class UsersService {
  private requester: AxiosInstance;

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public fetch = async (): Promise<User[]> => {
    const { data } = await this.requester.get<User[]>('/users');

    return data;
  };

  public delete = async (id: string): Promise<void> => {
    await this.requester.delete(`/users/${id}`);
  };
})();

export default UsersService;
