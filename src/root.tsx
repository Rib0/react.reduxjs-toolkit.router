import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { App } from './components/app';

const Root: React.FC = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export { Root };
