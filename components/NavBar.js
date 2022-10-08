import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'


const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={'./images/gericht.png'}/>
      </div>

      <ul className={styles.navbar_links}>
        <li><Link href=""><a>Home</a></Link></li>
        <li><Link href=""><a>Photo</a></Link></li>
        <li><Link href=""><a>Blog</a></Link></li>
        <li><Link href=""><a>Project</a></Link></li>
        <li><Link href=""><a>About</a></Link></li>
      </ul>
    </div>
  )
}

export default NavBar
