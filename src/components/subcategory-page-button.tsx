import React from 'react';
import {
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SubcategoryPageButton: React.FC = () => (
  <Button variant="contained" href="https://goo.gl/maps/1C4aQpX2JYkufQhXA" color="error" endIcon={<LocationOnIcon />}>Location</Button>
);
export default SubcategoryPageButton;
