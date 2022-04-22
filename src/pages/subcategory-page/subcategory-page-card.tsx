import React from 'react';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import SubcategoryPageButton from '../../components/subcategory-page-button';

type SubcategoryPageCardProps = {
  id: string,
  title: string,
  photo: string,
  location: string,
  description: string,
  active?: boolean,
  onClick: (id: string) => void,
};

const SubcategoryPageCard: React.FC<SubcategoryPageCardProps> = ({
  title,
  photo,
  location,
  id,
  description,
  active,
  onClick,
}) => {
  let className = 'card';
  if (active !== undefined) {
    className += active ? ' active' : ' hidden';
  }

  return (
    <Card
      id={id}
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        onClick(id);
      }}
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
        '&.active': {
          height: '600px',
          width: '500px',
          margin: '2rem auto 0 auto',
          '& .description': {
            display: 'block',
          },
        },
        '&.hidden': {
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
          <SubcategoryPageButton />
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
};

export default SubcategoryPageCard;
