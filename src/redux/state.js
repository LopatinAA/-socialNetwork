export const store = {
  _state: {
    dialogPage: {
      dialogData: [
        { id: 1, name: 'Dimysh' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Viktor' },
      ],
      messageData: [
        { id: 1, message: 'hi123' },
        { id: 2, message: 'yo' },
        { id: 3, message: 'by' },
      ],
    },
    profilePage: {
      postData: [
        { id: 1, message: 'hi, how are you?', likeCounts: 125 },
        { id: 2, message: 'it`s my first post', likeCounts: 123 },
        { id: 3, message: 'it`s my first post', likeCounts: 123 },
      ],
      newPostText: "newPostText",
    },
  },
  _callSubscriber() {
    console.log('no subscribers')
  },
  getState() {
    return this._state
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCounts: 0,
    }
    this._state.profilePage.postData.push(newPost)
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

window.state = store;


