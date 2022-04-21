import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlacesService from '../../services/places-service';
import Place from '../../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  const [place, setPlace] = useState<null | Place>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Cia reiktų naudoti kategory service
    (async () => {
      if (categoryId) {
        try {
          const fetchedPlace = await PlacesService.fetchById(categoryId);
          setPlace(fetchedPlace);
        } catch (error) {
          console.error('Nera tokios kategorijos, ateityje redirektinsiu i error page');
        }
      }
      setLoaded(true);
    })();
  }, []);

  return (
    <div>
      <h1>Cia yra kategory peidžas</h1>
      <p>{JSON.stringify(categoryId)}</p>
      {!loaded ? '...loading' : JSON.stringify(place)}

    </div>
  );
};

export default CategoryPage;
