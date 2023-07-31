import React from "react";
import styles from './Navbar.module.css'

export const Navbar = () => {
    console.log(styles)
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='http'>Profile</a>
            </div>
            <div className={styles.item}>
                <a href='http'>Massage</a>
            </div>
            <div className={styles.item}>
                <a href='http'>News</a>
            </div>
            <div className={styles.item}>
                <a href='http'>Music</a>
            </div>
            <div className={styles.item}>
                <a href='http'>Settings</a>
            </div>
        </nav>
    )
}