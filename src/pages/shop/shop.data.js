const SHOP_DATA = [
  {
    id: 1,
    title: 'Chinese',
    routeName: 'shop/',
    items: [
      {
        id: 1,
        name: 'Chinese Whole Meal',
        imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        //imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 220
      },
      {
        id: 2,
        name: 'Chonquing Chicken',
        imageUrl: 'https://cdn.tasteatlas.com/Images/Dishes/4cc2758bb1354d4e8b1e018105767fed.jpg?mw=1300',
        //imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 180
      },
      {
        id: 3,
        name: 'San Xi Lou',
        imageUrl: 'https://cdn.tasteatlas.com//Images/DishRestaurants/b87a2bbf7eed41b299f8b0854d48ea96.jpg?w=600&h=500',
        //imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 230
      },
      {
        id: 4,
        name: 'Si Chuan HotPot',
        imageUrl: 'https://cdn.tasteatlas.com/images/dishrestaurants/425f42fc8890460eb65c3028755133d8.jpg?mw=1300',
        //imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 250
      },
      {
        id: 5,
        name: 'Si Chuan Hotpan',
        imageUrl: 'https://cdn.tasteatlas.com/images/dishrestaurants/425f42fc8890460eb65c3028755133d8.jpg?mw=1300',
        //imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 180
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        //imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        //imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        //imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Pizza',
    routeName: 'shop/',
    items: [
      {
        id: 10,
        name: 'Papa Johns Pizza',
        imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        //imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 300
      },
      {
        id: 11,
        name: 'Pizza Wheel',
        imageUrl: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80',
        //imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 350
      },
      {
        id: 12,
        name: 'Broadway Cheesy Pizza',
        imageUrl: 'https://czechtheworld.com/wp-content/uploads/2021/09/Pizza-Names-1.jpg',
        //imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 250
      },
      {
        id: 13,
        name: 'Whole Veggie Pizza',
        imageUrl: 'https://czechtheworld.com/wp-content/uploads/2021/09/Pizza-Names-13.jpg',
        //imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 240
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Indian Cuisine',
    routeName: 'shop/',
    items: [
      {
        id: 18,
        name: 'Chicken Makhani',
        imageUrl: 'https://www.blueosa.com/wp-content/uploads/2020/07/butter-chicken-Chicken-Makhani.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Samosas Deep Fried',
        imageUrl: 'https://www.blueosa.com/wp-content/uploads/2020/07/top-10-indian-dishes-samosas.jpg',
        price: 30
      },
      {
        id: 20,
        name: 'Aloo Gobi',
        imageUrl: 'https://www.blueosa.com/wp-content/uploads/2020/07/Indian-Cauliflower-Potatoe.jpg',
        price: 110
      },
      {
        id: 21,
        name: 'Naan flat bread',
        imageUrl: 'https://www.blueosa.com/wp-content/uploads/2020/07/garlic-naam.jpg',
        price: 80
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  // {
  //   id: 4,
  //   title: 'Womens',
  //   routeName: 'womens',
  //   items: [
  //     {
  //       id: 23,
  //       name: 'Blue Tanktop',
  //       imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
  //       price: 25
  //     },
  //     {
  //       id: 24,
  //       name: 'Floral Blouse',
  //       imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
  //       price: 20
  //     },
  //     {
  //       id: 25,
  //       name: 'Floral Dress',
  //       imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
  //       price: 80
  //     },
  //     {
  //       id: 26,
  //       name: 'Red Dots Dress',
  //       imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
  //       price: 80
  //     },
  //     {
  //       id: 27,
  //       name: 'Striped Sweater',
  //       imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
  //       price: 45
  //     },
  //     {
  //       id: 28,
  //       name: 'Yellow Track Suit',
  //       imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
  //       price: 135
  //     },
  //     {
  //       id: 29,
  //       name: 'White Blouse',
  //       imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
  //       price: 20
  //     }
  //   ]
  // },
  // {
  //   id: 5,
  //   title: 'Mens',
  //   routeName: 'mens',
  //   items: [
  //     {
  //       id: 30,
  //       name: 'Camo Down Vest',
  //       imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
  //       price: 325
  //     },
  //     {
  //       id: 31,
  //       name: 'Floral T-shirt',
  //       imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
  //       price: 20
  //     },
  //     {
  //       id: 32,
  //       name: 'Black & White Longsleeve',
  //       imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
  //       price: 25
  //     },
  //     {
  //       id: 33,
  //       name: 'Pink T-shirt',
  //       imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
  //       price: 25
  //     },
  //     {
  //       id: 34,
  //       name: 'Jean Long Sleeve',
  //       imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
  //       price: 40
  //     },
  //     {
  //       id: 35,
  //       name: 'Burgundy T-shirt',
  //       imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
  //       price: 25
  //     }
  //   ]
  // }
];

export default SHOP_DATA;
