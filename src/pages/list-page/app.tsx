import {
  Card, CardContent, CardMedia, Container, Typography,
} from '@mui/material';
import React from 'react';

type TouristAttractionProps = {
  title: string,
  photo: string,
  location: string,
};

const meatPlaces: TouristAttractionProps[] = [
  {
    title: 'Restaurant Lokys',
    photo: 'https://www.tourtravelhotels.com/wp-content/uploads/2021/05/Restaurant-Lokys.jpg',
    location: 'Stikliu str. 8, Vilnius',
  },
  {
    title: 'Bistro 18',
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/01/ed/ea/00/bistro-18.jpg',
    location: 'Stiklių str. 18, Vilnius',
  },
  {
    title: 'Meat Lovers Pub',
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/02/c5/3a/88/meat-lovers-pub.jpg',
    location: 'Šv.Ignoto g. 14, Vilnius',
  },
];

const TouristAttraction: React.FC<TouristAttractionProps> = ({
  title, photo, location,
}) => (
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
);

const App: React.FC = () => (
  <Container sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 8,
    p: 2,
  }}
  >
    {meatPlaces.map((meatPlace) => (<TouristAttraction key={meatPlace.title} photo={meatPlace.photo} title={meatPlace.title} location={meatPlace.location} />))}
  </Container>
);

export default App;
