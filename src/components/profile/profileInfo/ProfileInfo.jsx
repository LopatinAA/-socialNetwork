import React from "react";
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt="img" />
      </div>
      <div className={styles.descriptionBlock}>ava + </div>
    </div>
  )
} 