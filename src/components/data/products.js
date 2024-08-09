const products = [
  {
    id: 1,
    category: "Nissan Teana J31",
		qty: '4',
    name: "Запчасть 1",
    description: "Описание запчасти 1 для Nissan Teana J31",
    price: "1000",
    images: [
      { original: "https://yerefan.ucoz.net/5b6eca63605bea0eeb48db43f77fa0ce.jpg", thumbnail: "https://yerefan.ucoz.net/5b6eca63605bea0eeb48db43f77fa0ce.jpg" },
      { original: "https://via.placeholder.com/600", thumbnail: "https://via.placeholder.com/150" }
    ]
  },
  {
    id: 2,
		qty: '4',
    category: "Nissan Teana J31",
    name: "Запчасть 2",
    description: "Описание запчасти 2 для Nissan Teana J31",
    price: "2000",
    images: [
      { original: "https://yerefan.ucoz.net/10155656_1451614908406977_1964737074_n.jpg", thumbnail: "https://yerefan.ucoz.net/10155656_1451614908406977_1964737074_n.jpg" }
    ]
  },
  {
    id: 3,
		qty: '4',
    category: "Toyota Camry",
    name: "Запчасть 1",
    description: "Описание запчасти 1 для Toyota Camry",
    price: "3000",
    images: [
      { original: "https://yerefan.ucoz.net/2.jpg", thumbnail: "https://yerefan.ucoz.net/2.jpg" },
      { original: "https://via.placeholder.com/600", thumbnail: "https://via.placeholder.com/150" }
    ]
  }
];

export const categories = [
  { id: 1, name: "Nissan Teana J31" },
  { id: 2, name: "Toyota Camry" }
];

export default products;
