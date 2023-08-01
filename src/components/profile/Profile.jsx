import React from "react";
import { MyPosts } from "../profile/myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts />
    </div>
  )
} 