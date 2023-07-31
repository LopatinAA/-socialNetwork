import React from "react";
import styles from './Navbar.module.css'

export const Navbar = () => {
    console.log(styles)
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={styles.item}>
                <a href='/dialogs'>Massage</a>
            </div>
            <div className={styles.item}>
                <a href='/news'>News</a>
            </div>
            <div className={styles.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={styles.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}