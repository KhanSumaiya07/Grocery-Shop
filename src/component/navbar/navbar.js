import Link from 'next/link'
import React from 'react'
import styles from '../navbar/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Link href="/">GroceryShop</Link>
        </div>
        <ul className={styles.navmenu}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Shop</Link>
            </li>
            <li>
                <Link href="/">Pages</Link>
            </li>
            <li>
                <Link href="/">Blog</Link>
            </li>
            <li>
                <Link href="/">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
