import React from 'react';
import {AppContainer} from 'react-hot-loader';
import ReactDOM  from 'react-dom';
import AppRouter from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore( () => {}, {})

const render = (Component) =>
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

render(AppRouter);
if (module.hot) {
    module.hot.accept('./routes', () => {
        require('./routes');
        render(AppRouter);
    });
}

