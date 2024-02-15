import React from "react";
import styles from './BestFriends.module.css'

export const BestFriends = () => {
    return (
        <div className={styles.bestFriends}>
            <div className={styles.items}>
                <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt='img' />
                Dimysh
            </div>
            <div className={styles.items}>
                <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt='img' />
                Andrey
            </div>
            <div className={styles.items}>
                <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt='img' />
                Sasha
            </div>
        </div>
    )
}