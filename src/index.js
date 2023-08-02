import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const dialogsData = [
  { id: 1, name: 'Dimysh' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Viktor' },
];

const messagesData = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'yo' },
  { id: 3, message: 'by' },
]

const iProps = {
  dialogsData:dialogsData,
  messagesData:messagesData,
}
root.render(
  <React.StrictMode>
      <App data={iProps}/>
  </React.StrictMode>
);

reportWebVitals();
