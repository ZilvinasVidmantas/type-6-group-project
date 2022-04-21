import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CustomContainer from '../../../components/container/custom-container';
import LandingSectionTypographyVilnius from '../components/landing-section-typography-Vilnius';

const HomePageLandingSection: React.FC = () => (
  <CustomContainer>
    <Box component="section" sx={{ height: '100vh', textAlign: 'center' }}>
      <LandingSectionTypographyVilnius />
      <Typography
        fontWeight="400"
        component="h1"
        variant="h3"
        sx={{
          fontWeight: 400,
          mb: 12,
        }}
      >
        Explore together!!
      </Typography>

      <Button
        variant="contained"
        size="large"
        endIcon={<ArrowDownwardIcon />}
      >
        Start
      </Button>
    </Box>
  </CustomContainer>
);

export default HomePageLandingSection;
