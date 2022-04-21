import React from 'react';
import { Box } from '@mui/material';
import VilniusMap from '../images/vilniusMap.jpg';

const LandingSectionImageContainer: React.FC = ({ children }) => (
  <Box sx={{
    backgroundImage: `url(${VilniusMap})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }}
  >
    {children}
  </Box>
);

export default LandingSectionImageContainer;
