import { User } from '../types';

const pause = (ms: number): Promise<void> => new Promise((res) => { setTimeout(() => res(), ms); });

const UsersService = new (class UsersService {
  // eslint-disable-next-line class-methods-use-this
  public fetchUsers = async (): Promise<User[]> => {
    await pause(5000);
    return [{
      id: 'BCD037CB-D642-6557-9795-BAAEB25AE2D9',
      name: 'Hanae Olson',
      phone: '(247) 325-6454',
      email: 'mauris@yahoo.com',
    },
    {
      id: '1CABB1E7-8C7E-7702-AE5A-01A6DB7F6239',
      name: 'Yen Hess',
      phone: '1-512-675-8383',
      email: 'at@hotmail.org',
    },
    {
      id: '2C0F8695-85D8-9A14-411C-EA579AD4D5D4',
      name: 'Xantha Rios',
      phone: '(358) 848-5765',
      email: 'amet.metus@icloud.net',
    },
    {
      id: 'DA89A964-7ECF-3AFA-C297-6285AD7C2D98',
      name: 'Joy Crosby',
      phone: '1-620-635-9268',
      email: 'sit.amet.massa@google.com',
    },
    {
      id: 'DB81BA3E-EA41-8551-7232-D2966AA9BC6D',
      name: 'Amal Edwards',
      phone: '1-752-892-3749',
      email: 'ut.nulla@aol.ca',
    }];
  };
})();

export default UsersService;
