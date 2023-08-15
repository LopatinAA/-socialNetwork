import React from "react";
import { MyPosts } from "../profile/myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>
  )
} 