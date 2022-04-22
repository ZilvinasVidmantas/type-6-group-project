import React from 'react';
import {
  AppBar,
  Container,
  Box,
  Button,
} from '@mui/material';

import NavbarLink from './navbar-link';
import Logo from '../logo';

const Navbar: React.FC = () => (
  <AppBar position="sticky" sx={{ bgcolor: 'grey.900', overflow: 'hidden' }}>
    <Container sx={{ px: { xs: 0, sm: 0 } }}>
      <Box sx={(theme) => theme.mixins.navbar}>
        <Button href="/">
          <Logo size={40} />
        </Button>
        <Box sx={{ alignSelf: 'stretch' }}>
          <NavbarLink to="/food">FOOD</NavbarLink>
          <NavbarLink to="/entertainment">ENTERTAINMENT</NavbarLink>
          <NavbarLink to="/culture">CULTURE</NavbarLink>
        </Box>
      </Box>
    </Container>
  </AppBar>
);

export default Navbar;
