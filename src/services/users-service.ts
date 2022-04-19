import { User } from '../types';

const UsersService = new (class UsersService {
  // eslint-disable-next-line class-methods-use-this
  public fetch = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json() as User[];

    return users;
  };

  // eslint-disable-next-line class-methods-use-this
  public delete = async (id: string): Promise<void> => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    });
  };
})();

export default UsersService;
