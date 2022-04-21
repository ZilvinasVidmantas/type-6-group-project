import { Container, Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import CustomContainer from '../../components/container/custom-container';
import SubcategoryPageCard from './subcategory-page-card';

const meatPlaces = [
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

const SubcategoryPage: React.FC = () => {
  
  const { categoryId, subcategoryId } = useParams();
  
  return (
  <CustomContainer>
    {meatPlaces.map(({
      title, photo, location,
    }) => (<SubcategoryPageCard key={title} photo={photo} title={title} location={location} />))}
  </CustomContainer>
)};

export default SubcategoryPage;

/*
  Needs:
    * exact props which are needed for the ListPageCard
    * subcategory data which comes from fetch service by subcategoryId
    * style on the CustomContainer, according to our needs
*/
