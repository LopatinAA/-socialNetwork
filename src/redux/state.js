let renderEntireTree = () => {}

const dialogData = [
  { id: 1, name: 'Dimysh' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Viktor' },
];

const messageData = [
  { id: 1, message: 'hi123' },
  { id: 2, message: 'yo' },
  { id: 3, message: 'by' },
];

const postData = [
  { id: 1, message: 'hi, how are you?', likeCounts: 125 },
  { id: 2, message: 'it`s my first post', likeCounts: 123 },
  { id: 3, message: 'it`s my first post', likeCounts: 123 },
]
let newPostText = "newPostText"

export const state = {
  dialogPage: {
    dialogData: dialogData,
    messageData: messageData,
  },
  profilePage: {
    postData,
    newPostText,
  }
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCounts: 0,
  }
  state.profilePage.postData.push(newPost);
  renderEntireTree(state)
  state.profilePage.newPostText = ''
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state)
}

export const subscribe = (observer) => {
  renderEntireTree = observer;
}