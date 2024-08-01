import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MovieContextProvider from './customHooks/provider/MovieContextProvider';
import PageContextProvider from './customHooks/provider/PageContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <MovieContextProvider>
            <PageContextProvider>
                 <App />
            </PageContextProvider>
        </MovieContextProvider> 
    </React.StrictMode>
);
