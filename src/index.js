import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const dialogData = [
  { id: 1, name: 'Dimysh' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Viktor' },
];

const messageData = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'yo' },
  { id: 3, message: 'by' },
];

const postData = [
  { id: 1, message: 'hi, how are you?', likeCounts: 15 },
  { id: 2, message: 'it`s my first post', likeCounts: 123 },
]


const iProps = {
  dialogsData : {
    dialogData:dialogData,
    messageData:messageData,
  },
  postData:postData,
}
root.render(
  <React.StrictMode>
      <App bll={iProps}/>
  </React.StrictMode>
);

reportWebVitals();
