import React from "react";
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import { BestFriends } from "./bestFriends/BestFriends";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink to='/profile' className={e => e.isActive ? styles.active : styles.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={e => e.isActive ? styles.active : styles.item}>Massage</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={e => e.isActive ? styles.active : styles.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={e => e.isActive ? styles.active : styles.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={e => e.isActive ? styles.active : styles.item}>Settings</NavLink>
            </div>
            <div className={styles.bestFriends}>
            <BestFriends/>
            </div>
        </nav>
    )
}