import React from "react";
import { MyPosts } from "../profile/myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = (props) => {
  console.log(props)

  const postData = [
    { id: 1, message: 'hi, how are you?', likeCounts: 15 },
    { id: 2, message: 'it`s my first post', likeCounts: 123 },
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={postData} />
    </div>
  )
} 