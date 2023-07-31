import React from "react";
import styles from './Profile.module.css'
import { MyPosts } from "./myPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={styles.content}>
      <img src='https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13' alt="img" />
      <div>ava + </div>
      <MyPosts />
    </div>
  )
} 