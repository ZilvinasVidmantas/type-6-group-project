import { Container } from '@mui/material';
import React from 'react';

import ListPageCard from '';
import placesData from '';

const ListPage: React.FC = () => (
  <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {placesData.map(({
      title, photo, location, id, description,
    }) => (<ListPageCard key={id} photo={photo} title={title} location={location} description={description} />))}
  </Container>
);

export default ListPage;

// This is half-assed skeleton of the ListPage. Will be updated in the future.
/*
  Needs:
    * real name of the ListPageCard (Indre)
    * exact props which are needed for the ListPageCard
    * subcategory data which comes from the other group (???) or somewhere else (who knows)
    * maybe another global container and more style on it, according to our needs
*/