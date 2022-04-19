import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Section from '../components/section';

const ButtonsPage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Section>
      <Typography component="h1" variant="h3" color="red">Buttons</Typography>
      <Typography component="a" href="https://mui.com/material-ui/react-button/" target="blank">Documentation</Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained">contained</Button>
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
      </Box>
    </Section>

    <Section>
      <Typography component="h2" variant="h4" sx={{ mb: 2 }}>Added Theme colors</Typography>
      <Typography sx={{ color: 'red.main' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum quod nesciunt animi reiciendis magnam voluptate saepe velit commodi odit!</Typography>
      <Typography sx={{ color: 'blue.main' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum quod nesciunt animi reiciendis magnam voluptate saepe velit commodi odit!</Typography>
      <Typography sx={{ color: 'green.main' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum quod nesciunt animi reiciendis magnam voluptate saepe velit commodi odit!</Typography>
    </Section>

    <Section>
      <Typography component="h2" variant="h4" sx={{ mb: 2 }}>Custom buttons</Typography>
      <Button variant="contained" color="red">red</Button>
      <Button variant="contained" color="green">green</Button>
      <Button variant="contained" color="blue">blue</Button>
    </Section>
  </Container>
);

export default ButtonsPage;
