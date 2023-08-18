import React from "react";
import { MyPosts } from "../profile/myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        store={props.store}/>
    </div>
  )
} 