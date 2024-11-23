import React, { useState } from 'react';

const categoriesData = [
  { id: 1, name: 'Vêtements', products: [
    { id: 1, name: 'Baby Shirt', price: 15, imageUrl: 'shirt.jpg' },
    { id: 2, name: 'Baby Pants', price: 12, imageUrl: 'pants.jpg' },
  ]},
  { id: 2, name: 'Jouets', products: [
    { id: 3, name: 'Teddy Bear', price: 20, imageUrl: 'bear.jpg' },
    { id: 4, name: 'Toy Car', price: 10, imageUrl: 'car.jpg' },
  ]},
  { id: 3, name: 'Accessoires', products: [
    { id: 5, name: 'Baby Hat', price: 8, imageUrl: 'hat.jpg' },
    { id: 6, name: 'Baby Socks', price: 5, imageUrl: 'socks.jpg' },
  ]},
];

function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    const category = categoriesData.find(c => c.id === parseInt(categoryId));
    setSelectedCategory(category);
  };

  return (
    <div className="category-page">
      <h2>Select a Category</h2>
      <select onChange={handleCategoryChange} defaultValue="">
        <option value="" disabled>Select a category</option>
        {categoriesData.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      {selectedCategory && (
        <div className="products">
          <h3>Products in {selectedCategory.name}</h3>
          <ul>
            {selectedCategory.products.map(product => (
              <li key={product.id}>
                <img src={product.imageUrl} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
