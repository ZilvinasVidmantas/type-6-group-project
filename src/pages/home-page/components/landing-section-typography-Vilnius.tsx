import React from 'react';
import { Typography } from '@mui/material';

const LandingSectionTypographyVilnius: React.FC = () => (
  <Typography
    fontWeight="400"
    component="h1"
    variant="h1"
    sx={{
      display: 'inline-block',
      borderBottom: 2,
      borderColor: 'common.black',
      color: 'primary.main',
      fontSize: '110px',
      fontWeight: 700,
      pt: 13,
      pb: 1,
      px: 12,
      mb: 2,
      textShadow: '0px 0px 8px #141313',
    }}
  >
    VILNIUS
  </Typography>
);

export default LandingSectionTypographyVilnius;
