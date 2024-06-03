import React from 'react'
import styles from './style.module.css'
import Btn from '@/component/button/btn'
const Superfood = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          <img src='https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Dirty-chai-latte-b5c00fc.jpg' alt='coffee image' />
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
          <h2>Our Ingradiants</h2>
          <h1>SuperFoods Super You</h1>
          <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers.</p>
          <Btn/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Superfood
