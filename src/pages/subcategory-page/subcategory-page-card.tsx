import {
  Card, CardContent, CardMedia, Typography, Paper,
} from '@mui/material';
import React from 'react';

type SubcategoryPageCardProps = {
  title: string,
  photo: string,
  location: string,
};

const SubcategoryPageCard: React.FC<SubcategoryPageCardProps> = ({
  title, photo, location,
}) => (
  <Paper elevation={4} sx={{ p: 6 }}>
    <Card sx={{
      border: 'none',
      boxShadow: 'none',
      borderRadius: '2px',
      '&:hover': {
        transform: 'scale(1.1) perspective(0px)',
        transition: 'transform .2s ease-out',
      },
    }}
    >
      <CardMedia component="img" height="120" image={photo} />
      <CardContent>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            //   fontFamily: 'Cinzel Decorative',
          }}
        >
          {title}
        </Typography>
        <Typography
          component="h3"
          variant="h5"
          sx={{
            textAlign: 'center',
          }}
        >
          {location}
        </Typography>
      </CardContent>
    </Card>
  </Paper>
);

export default SubcategoryPageCard;
