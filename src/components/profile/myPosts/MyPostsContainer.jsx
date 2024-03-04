import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateNewPostActionCreator: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);