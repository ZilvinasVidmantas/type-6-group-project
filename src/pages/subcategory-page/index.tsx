import React from 'react';
import { useParams } from 'react-router-dom';

const SubcategoryPage: React.FC = () => {
  const { categoryId, subcategoryId } = useParams();

  return (
    <div>
      <h1>SubCategory page</h1>
      <p>
        ketegoryId:
        {' '}
        {categoryId}
      </p>
      <p>
        sub:
        {' '}
        {subcategoryId}
      </p>
    </div>
  );
};

export default SubcategoryPage;
