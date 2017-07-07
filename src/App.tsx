import * as React from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/reducers';

// DevTools
import { composeWithDevTools } from 'redux-devtools-extension';

// Composants de l'application
import WidgetLayout from './components/layout/WidgetLayout';

// Création du store
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <WidgetLayout />
      </Provider>
    );
  }
}

export default App;
