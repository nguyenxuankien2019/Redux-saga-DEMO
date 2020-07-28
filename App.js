import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigator/Navigation';
import {store} from './src/redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
export default App