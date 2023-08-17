import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { state, addPost, updateNewPostText, subscribe } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );

    reportWebVitals();

}
renderEntireTree(state)
subscribe(renderEntireTree)