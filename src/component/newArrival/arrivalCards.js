import React from 'react';
import styles from './arrival.module.css';
import AddtocartBtn from '../button/addtocartBtn';

const Card = ({ image, title, price }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <AddtocartBtn/>
    </div>
  );
};

const ProductCard = () => {
  const cardData = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHzqjyXZyPfeaKYgu4I4phyq5t7cIJslN9S1TUDOmmdI4wU5q5iN23Ebl014uiuWZHjY&usqp=CAU', title: 'First Product', price: '$20' },
    { image: 'https://m.media-amazon.com/images/I/813VBvC8DlL.jpg ', title: 'Second Product', price: '$30' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymhB1fH2nO2IlzVLX6ciQiVUHbdBlMMUSySjp9upmGw&s', title: 'Third Product', price: '$40' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9eDbxw8NlAhFiNxlMBXSaOdvTqONDQUrWLKnjsm65g&s', title: 'Fourth Product', price: '$50' },
  ];

  return (
    <div className={styles.arrivalContainer}>
      <div className={styles.cardContainer}>
        {cardData.map((product, index) => (
          <Card 
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
