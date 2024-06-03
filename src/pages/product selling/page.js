import React from 'react'
import styles from '../superfoods/style.module.css'
import Btn from '@/component/button/btn'
const ProductSailling = () => {
  return (
    <div >
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          <img src='https://img.freepik.com/premium-photo/premium-integrated-nuts-package-design-3d-illustration-pink-background_1029476-124095.jpg' alt='coffee image' />
        </div>
        <div className={styles.sailright}>
          <div className={styles.content}>
          <h2>The Product saillings</h2>
          <h1>Naturally Food For You</h1>
          <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers.</p>
          <Btn/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSailling
