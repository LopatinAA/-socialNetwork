import React from "react";
import styles from '../css/Profile.module.css'

export const Profile = () => {
    return (
        <div className={styles.content}>
        <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt="img"/>
        <div>ava + </div>
        <div>my posts
          <div>new posts
            <div className={styles.item}>post 1</div>
            <div className={styles.item}>post 2</div>
          </div>
        </div>
      </div>
    )
}