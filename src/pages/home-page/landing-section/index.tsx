import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomContainer from '../../../components/container/custom-container';

const HomePageLandingSection: React.FC = () => (
  <CustomContainer>
    <Box component="section" sx={{ height: '100vh', textAlign: 'center' }}>
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
      <Typography
        fontWeight="400"
        component="h1"
        variant="h3"
        sx={{
          fontWeight: 400,
        }}
      >
        Explore together!!
      </Typography>
    </Box>
  </CustomContainer>
);

export default HomePageLandingSection;
