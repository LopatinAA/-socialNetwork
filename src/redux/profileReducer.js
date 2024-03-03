const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postData: [
        { id: 1, message: 'hi, how are you?', likeCounts: 125 },
        { id: 2, message: 'it`s my first post', likeCounts: 123 },
        { id: 3, message: 'it`s my first post', likeCounts: 123 },
      ],
      newPostText: "",
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
          let newPost = {
            id: 5,
            message: state.newPostText,
            likeCounts: 0,
        }
        let stateCopy = {...state}
        stateCopy.postData = [...state.postData]
        stateCopy.postData.push(newPost)
        stateCopy.newPostText = ''
        return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
          let stateCopy = {...state}
          stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  export const updateNewPostActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    }
  }