import * as React from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from './reducers/reducers';

import { MuiThemeProvider } from 'material-ui/styles';

// DevTools
import { composeWithDevTools } from 'redux-devtools-extension';

// Composants de l'application
import WidgetLayout from './components/layout/WidgetLayout';

// Typo
import 'typeface-roboto';

// Création du store
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk), autoRehydrate()));

persistStore(store);

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
            <WidgetLayout />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
