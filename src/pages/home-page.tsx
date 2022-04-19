import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from '@mui/material';
import { User } from '../types';
import UsersService from '../services/users-service';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async (): Promise<void> => {
    const fetchedUsers = await UsersService.fetch();
    setUsers(fetchedUsers);
  };

  const deleteUser = async (id: string) => {
    await UsersService.delete(id);
    fetchUsers();
  };

  useEffect(() => {
    // Vykdysis tik pirmo užkrovimo metu
    fetchUsers();
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Box component="pre">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(({
                id,
                name,
                phone,
                email,
              }) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => deleteUser(id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default HomePage;
