import {
  Box, Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import expand from '../../helpers/subcategory-page-card-expander';
import Button1 from '../../components/subcategory-button';

type SubcategoryPageCardProps = {
  id: string,
  title: string,
  photo: string,
  location: string,
  description: string,
};

const SubcategoryPageCard: React.FC<SubcategoryPageCardProps> = ({
  title, photo, location, id, description,
}) => (
  <Card
    id={id}
    className="card"
    onClick={(e) => expand(e)}
    sx={{
      marginTop: '2rem',
      width: '300px',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '2px',
      '&:hover': {
        transform: 'scale(1.1) perspective(0px)',
        transition: 'transform .2s ease-out',
      },
      '&.expand': {
        height: '600px',
        width: '500px',
        margin: '2rem auto 0 auto',
        '& .description': {
          display: 'block',
        },
      },
      '&.hide': {
        display: 'none',
      },
    }}
  >
    <CardMedia component="img" height="120" image={photo} />
    <CardContent>
      <Typography
        component="h2"
        variant="h5"
        sx={{
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
      <Typography
        component="h3"
        variant="body1"
        sx={{
          textAlign: 'center',
        }}
      >
        {location}
      </Typography>
      <Box
        className="description"
        sx={{
          display: 'none',
          paddingTop: '1rem',
        }}
      >
        <Button1 />
        <Typography
          component="p"
          variant="body2"
          sx={{
            marginTop: '1rem',
            textAlign: 'justify',
          }}
        >
          {description}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default SubcategoryPageCard;
