/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const CategoryCard: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'row', gap: '35px' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Guide to the best places to eat in Vilnius, Lithuania.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Entertainment
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover the best entertainment in Vilnius.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Culture
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Boring isn't an option in Vilnius! It's a city packed with action, art, inspiration, history and more than a few unexpected adventures along the way.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
);

export default CategoryCard;
