const ProductData = [
  {
    name: 'Almond',
    price: 920,
    img: './images/almond2.jpg',
    tax: 20,
    id: 1,
    description: 'Almonds are nutrient-dense nuts originating from the Middle East, known for their delicate crunch and subtle sweetness, packed with essential nutrients.'
  },
  {
    name: 'Cashew',
    price: 980,
    img: './images/cashew-img.jpeg',
    tax: 23,
    id: 2,
    description: 'Cashews are buttery, mildly sweet nuts that are rich in fiber, protein, and healthy fats, commonly enjoyed as a snack or ingredient in both sweet and savory dishes.'
  },
  {
    name: 'Walnut',
    price: 1200,
    img: './images/walnut-img.avif',
    tax: 26,
    id: 3,
    description: 'Walnuts are known for their rich, slightly bitter flavor and high levels of omega-3 fatty acids, beneficial for heart health and brain function.'
  },
  {
    name: 'Dried Black Currants',
    price: 940,
    img: './images/black-currant-img2.png',
    tax: 20,
    id: 4,
    description: 'Dried black currants are small, tangy, and rich in antioxidants, vitamins, and minerals, perfect for snacking or adding to baked goods and salads.'
  },
  {
    name: 'Dried Cranberries',
    price: 1050,
    img: './images/Dried-Cranberries.jpg',
    tax: 23,
    id: 5,
    description: 'Dried cranberries are sweet-tart berries packed with antioxidants and vitamins, popular in trail mixes, baked goods, or as a topping for salads.'
  },
  {
    name: 'Macadamia Nuts',
    price: 4275,
    img: './images/Macadamia-Nuts.jpg',
    tax: 56,
    id: 6,
    description: 'Macadamia nuts are creamy, rich in healthy fats, and known for their buttery flavor, often enjoyed as a luxurious snack or in gourmet recipes.'
  },
  {
    name: 'Hazelnuts',
    price: 1030,
    img: './images/Hazelnut.jpg',
    tax: 22,
    id: 7,
    description: 'Hazelnuts are sweet and rich, commonly used in desserts and spreads, especially beloved for their nutty flavor and high nutrient content.'
  },
  {
    name: 'Dried Figs',
    price: 730,
    img: './images/Dried-Figs.jpg',
    tax: 17,
    id: 8,
    description: 'Dried figs are naturally sweet and chewy, rich in fiber, vitamins, and minerals, enjoyed as a nutritious snack or in desserts and salads.'
  },
  {
    name: 'Raisins',
    price: 355,
    img: './images/Raisins.jpg',
    tax: 14,
    id: 9,
    description: 'Raisins are sweet, dried grapes packed with energy, fiber, and minerals, great as a snack or ingredient in baking and cooking.'
  },
  {
    name: 'Dried Apricots',
    price: 1350,
    img: './images/Dried-Apricots.jpg',
    tax: 27,
    id: 10,
    description: 'Dried apricots are sweet and slightly tangy, rich in vitamins A and C, making them a popular choice for healthy snacking and recipes.'
  },
  {
    name: 'Pistachios',
    price: 1485,
    img: './images/Pistachios1.jpg',
    tax: 29,
    id: 11,
    description: 'Pistachios are mildly sweet and earthy, loved for their unique flavor and vibrant green color, high in protein and healthy fats.'
  },
  {
    name: 'Dried Kiwi',
    price: 1350,
    img: './images/Dried-Kiwi1.jpg',
    tax: 25,
    id: 12,
    description: 'Dried kiwi is sweet, tangy, and packed with vitamin C, perfect for snacking and adding a tropical twist to recipes.'
  },
  {
    name: 'Pecans',
    price: 1650,
    img: './images/Pecans.jpg',
    tax: 27,
    id: 13,
    description: 'Pecans are buttery, slightly sweet nuts high in healthy fats and fiber, ideal for baking, cooking, or snacking.'
  },
  {
    name: 'Dried Dates',
    price: 370,
    img: './images/Dried-Dates.jpg',
    tax: 14,
    id: 14,
    description: 'Dried dates are naturally sweet, chewy, and high in fiber and essential minerals, used as a natural sweetener and in baking.'
  },
  {
    name: 'Brazil Nuts',
    price: 1780,
    img: './images/Brazil-Nuts.jpg',
    tax: 30,
    id: 15,
    description: 'Brazil nuts are rich, buttery, and a powerful source of selenium, beneficial for immunity and thyroid health.'
  },
  {
    name: 'Chestnuts',
    price: 770,
    img: './images/Chestnuts1.jpg',
    tax: 18,
    id: 16,
    description: 'Chestnuts are sweet and starchy, enjoyed roasted or in dishes, high in fiber and low in fat compared to other nuts.'
  },
  {
    name: 'Pine Nuts',
    price: 2999,
    img: './images/Pine-Nuts.jpg',
    tax: 37,
    id: 17,
    description: 'Pine nuts are small, buttery nuts popular in Mediterranean dishes and pesto, rich in healthy fats and minerals.'
  },
  {
    name: 'Tiger Nuts',
    price: 1200,
    img: './images/Tiger-Nuts.jpg',
    tax: 24,
    id: 18,
    description: 'Tiger nuts are nutty and chewy, actually a tuber, known for their fiber content and digestive health benefits.'
  },
  {
    name: 'Dried Goji Berries',
    price: 2700,
    img: './images/Dried-Goji-Berries.jpg',
    tax: 34,
    id: 19,
    description: 'Dried goji berries are sweet-tart, packed with antioxidants, protein, and vitamin C, valued for their health benefits.'
  },
  {
    name: 'Candlenuts',
    price: 800,
    img: './images/Candlenuts.jpg',
    tax: 20,
    id: 20,
    description: 'Candlenuts are rich, slightly oily nuts commonly used in Southeast Asian cuisines, known for their high oil content.'
  },
  {
    name: 'Dried Coconut Chips',
    price: 540,
    img: './images/Coconut-Chips.jpg',
    tax: 16,
    id: 21,
    description: 'Dried coconut chips are crunchy and lightly sweet, perfect for adding texture and tropical flavor to snacks and recipes.'
  },
  {
    name: 'Dried Cherries',
    price: 420,
    img: './images/Dried-Cherries.jpg',
    tax: 14,
    id: 22,
    description: 'Dried cherries are tart and sweet, high in antioxidants and commonly enjoyed in baking, salads, or as a snack.'
  },
  {
    name: 'Dried Mango',
    price: 320,
    img: './images/Dried-Mango.jpg',
    tax: 20,
    id: 23,
    description: 'Dried mango is naturally sweet and chewy, a tropical treat high in vitamins A and C, great for snacking and desserts.'
  },
  {
    name: 'Peanuts',
    price: 240,
    img: './images/peanuts.jpg',
    tax: 12,
    id: 24,
    description: 'Peanuts are earthy, protein-rich legumes, enjoyed roasted, boiled, or ground into butter, popular for snacking and cooking.'
  }
];

export default ProductData;
