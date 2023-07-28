import React from "react";
import styles from '../css/Navbar.module.css'

export const Navbar = () => {
    console.log(styles)
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Profile</a>
            </div>
            <div className={styles.item}>
                <a>Massage</a>
            </div>
            <div className={styles.item}>
                <a>News</a>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
            <div className={styles.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}