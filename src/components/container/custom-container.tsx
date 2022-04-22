import React from 'react';
import { Container } from '@mui/material';

const CustomContainer: React.FC = ({ children }) => (
  <Container
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 3,
      maxWidth: 1200,
      px: 2,
      mx: 'auto',
    }}
  >
    {children}
  </Container>
);
export default CustomContainer;
