import React from "react";
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt="img" />
        <div className={styles.description}>
          <div> lastName firstName</div>
          <div> サムライには目的はなく、道しかありません </div>
        </div>
      </div>
    </div>
  )
} 