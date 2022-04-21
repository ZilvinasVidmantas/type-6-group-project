import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomContainer from '../../../components/container/custom-container';
import InfoSheets from '../components/info-section-info-sheet';

const HomePageInfoSection: React.FC = () => (
  <Container sx={{ height: '800px' }}>
    <CustomContainer>
      <Box sx={{
        flexGrow: 1,
      }}
      >
        <Grid container spacing={2}>
          <Grid item md={4}>
            <InfoSheets>
              <Typography>
                Wheater
              </Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae neque! Autem culpa amet, iusto cumque similique provident dolor eveniet? Sed veritatis veniam, velit deserunt vero iure aliquam distinctio iste!
            </InfoSheets>
          </Grid>
          <Grid item md={4}>
            <InfoSheets>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum mollitia ullam provident explicabo quas debitis enim non reiciendis quis, quia quasi temporibus impedit totam repellendus. Vel quia doloribus iste.
            </InfoSheets>
          </Grid>
          <Grid item md={4}>
            <InfoSheets>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum mollitia ullam provident explicabo quas debitis enim non reiciendis quis, quia quasi temporibus impedit totam repellendus. Vel quia doloribus iste.
            </InfoSheets>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <InfoSheets>
              <Typography>
                Wheater
              </Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae neque! Autem culpa amet, iusto cumque similique provident dolor eveniet? Sed veritatis veniam, velit deserunt vero iure aliquam distinctio iste!
            </InfoSheets>
          </Grid>
          <Grid item md={6}>
            <InfoSheets>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum mollitia ullam provident explicabo quas debitis enim non reiciendis quis, quia quasi temporibus impedit totam repellendus. Vel quia doloribus iste.
            </InfoSheets>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  </Container>
);

export default HomePageInfoSection;
