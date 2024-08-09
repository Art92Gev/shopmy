import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data/products';

function CategoryList() {
  return (
    <div className="category-list">
      <h2>Выберите категорию</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
