import React from 'react';
import {AppContainer} from 'react-hot-loader';
import ReactDOM  from 'react-dom';
import AppRouter from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReduxThunk from 'redux-thunk'

import Reducer from './reducers/root'
import {makeLoadAction} from "./actions/actions";

injectTapEventPlugin();

const store = createStore(Reducer, applyMiddleware(ReduxThunk));

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <AppContainer>
                    <Component />
                </AppContainer>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('app')
    );
    store.dispatch(makeLoadAction())
};


render(AppRouter);
if (module.hot) {
    module.hot.accept('./routes', () => {
        require('./routes');
        render(AppRouter);
    });
}

