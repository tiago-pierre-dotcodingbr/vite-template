import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/theme.config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

// store
import { persistor, store } from './store/index';

// routes
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Routes />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
