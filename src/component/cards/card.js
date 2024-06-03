// components/card/Card.js
import React from 'react';
import styles from './card.module.css';
import Btn from '../button/btn';

const Card = ({ title, subtitle, description, backgroundColor, width }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    width:width,
  };

  return (
    <div className={styles.CardContainer} style={cardStyle}>
      <span>{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <Btn/>
    </div>
  );
};

const CardList = () => {
  const cardData = [
    { title: 'Free Shipping', subtitle: 'Special offer', description: 'online store only', backgroundColor: '#ffcccc', width:'350px' },
    { title: '50% Off', subtitle: 'Limited Time', description: 'all items in store', backgroundColor: '#ccffcc', width:'300px' },
    { title: 'Buy 1 Get 1', subtitle: 'Exclusive Deal', description: 'selected items', backgroundColor: '#ccccff', width:'400px' },
    { title: 'New Arrivals', subtitle: 'Just In', description: 'latest trends', backgroundColor: '#ffccff', width:'400px' },
    { title: 'Flash Sale', subtitle: 'Today Only', description: 'hurry up!', backgroundColor: '#ffffcc', width:'350px' },
    { title: 'Member Discount', subtitle: 'Sign Up', description: 'exclusive offers for members', backgroundColor: '#ccffff', width:'300px' },
  ];

  return (
    <div className={styles.CardsContainer}style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}} >
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          backgroundColor={card.backgroundColor}
          width={card.width}
        />
      ))}
    </div>
  );
};

export default CardList;
