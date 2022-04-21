import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h1>This is category page</h1>
      <p>{JSON.stringify(categoryId)}</p>
    </div>
  );
};

export default CategoryPage;
