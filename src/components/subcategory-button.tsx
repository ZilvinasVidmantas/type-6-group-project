import React from 'react';
import {
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';

const Button1: React.FC = () => (
  <Button variant="contained" href="https://goo.gl/maps/1C4aQpX2JYkufQhXA" color="error" endIcon={<LocationOnIcon />}>Location</Button>
);
export default Button1;