import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import { User } from '../types';
import UsersService from '../services/users-service';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Vykdysis tik pirmo užkrovimo metu
  useEffect(() => {
    (async () => {
      // Parsiunčiami duomenys
      const fetchedUsers = await UsersService.fetchUsers();
      //  Po parsiuntimo atnaujinas users state kintamasis
      setUsers(fetchedUsers);
    })();
  }, []);

  console.log('Komponentas kraunasi');
  console.log({ users });

  return (
    <Container sx={{ my: 5 }}>
      <Box component="pre">
        {JSON.stringify(users, null, 2)}
      </Box>
    </Container>
  );
};

export default HomePage;
