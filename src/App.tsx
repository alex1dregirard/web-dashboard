import * as React from 'react';
import './App.css';

// Composants de l'application
import WidgetLayout from './components/layout/WidgetLayout';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <WidgetLayout />
    );
  }
}

export default App;
