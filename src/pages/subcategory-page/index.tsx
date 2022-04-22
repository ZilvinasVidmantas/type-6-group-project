import React from 'react';
import { useParams } from 'react-router-dom';
import CustomContainer from '../../components/container/custom-container';
import SubcategoryPageCard from './subcategory-page-card';

const meatPlaces = [

  {
    id: '1',
    title: 'Restaurant Lokys',
    photo: 'https://www.tourtravelhotels.com/wp-content/uploads/2021/05/Restaurant-Lokys.jpg',
    location: 'Stikliu str. 8, Vilnius',
    description: 'Lithuanian restaurant in Vilnius Old Town is a second-generation family restaurant, which specializes in historical traditional Lithuanian cuisine. Our menu narrates olden stories of Lithuanian noblemen, who feasted on forest foods like berries, mushrooms, nuts, and game.',
  },
  {
    id: '2',
    title: 'Bistro 18',
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/01/ed/ea/00/bistro-18.jpg',
    location: 'Stiklių str. 18, Vilnius',
    description: 'At bistro 18 we have a passion for and commitment to food. Our driving force is a need to provide the very best dishes with the best of care and the least intrusion to the products themselves. We pride ourselves on making everything in house, something which requires more time and patience but from which the end result sings.',
  },
  {
    id: '3',
    title: 'Meat Lovers Pub',
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/02/c5/3a/88/meat-lovers-pub.jpg',
    location: 'Šv.Ignoto g. 14, Vilnius',
    description: '#6 of 44 steak restaurants in Vilnius #41 of 146 BBQs in Vilnius Add a photo 20 photos Besides Statue of Laurynas Gucevicius, visit Meat Lovers in the vicinity. At this restaurant, visitors may have good medium steaks, hamburgers and pork ribs. You will enjoy its food, particularly tasty chocolate cakes, cheesecakes and crème brûlée.',
  },
];

const SubcategoryPage: React.FC = () => {
  const { categoryId, subcategoryId } = useParams();

  return (
    <CustomContainer>
      {meatPlaces.map(({
        title, photo, location, id, description,
      }) => (
        <SubcategoryPageCard
          id={id}
          key={id}
          photo={photo}
          title={title}
          location={location}
          description={description}
        />
      ))}
    </CustomContainer>
  );
};

export default SubcategoryPage;

/*
  Needs:
    * exact props which are needed for the ListPageCard
    * subcategory data which comes from fetch service by subcategoryId
    * style on the CustomContainer, according to our needs
*/
