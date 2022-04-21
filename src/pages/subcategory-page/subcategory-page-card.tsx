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

const expand2 = (e: any) => {
  const element = e.target;
  if (!element) return;
  const card = element.closest('.MuiCard-root');
  card.classList.toggle('expanded');
};

const SubcategoryPageCard: React.FC<SubcategoryPageCardProps> = ({
  title, photo, location, id, description,
}) => (
  // <Paper
  //   onClick={(e) => expand(e)}
  //   id={id}
  //   className="card"
  //   elevation={4}
  //   sx={{
  //     p: 6,
  //     '&.expand': {
  //       height: 600,
  //       width: '500px',
  //       justifySelf: 'center',
  //       position: 'absolute',
  //       top: 100,
  //     },
  //     '&.hide': {
  //       opacity: 0,
  //       transform: 'translateY(820px)',
  //     },
  //   }}
  // >
  <Card sx={{
    marginTop: '2rem',
    width: '300px',
    border: 'none',
    boxShadow: 'none',
    borderRadius: '2px',
    '&:hover': {
      transform: 'scale(1.1) perspective(0px)',
      transition: 'transform .2s ease-out',
    },
    '&.expanded .description': {
      display: 'block',
    },
  }}
  >
    <CardActionArea onClick={(e) => expand2(e)}>
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
    </CardActionArea>
  </Card>
);

export default SubcategoryPageCard;
