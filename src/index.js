import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/reduxStore'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = () => {
    console.log('store in renderEntireTree: ', store)
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );

    reportWebVitals();

}
renderEntireTree()
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})