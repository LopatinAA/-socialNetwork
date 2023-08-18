import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App store ={store} />
        </React.StrictMode>
    );

    reportWebVitals();

}
renderEntireTree(store)
store.subscribe(renderEntireTree)