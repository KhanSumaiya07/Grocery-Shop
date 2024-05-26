import React from 'react'
import styles from './banner.module.css'
import Btn from '../button/btn'


const Banner = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <span>taste of nature</span>
        <h1>Eat Clean & Green <br/> Eat Organic</h1>
        <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs).</p>
        <Btn/>
      </div>
      <div className={styles.right}>

      </div>
    </div>
  )
}

export default Banner
