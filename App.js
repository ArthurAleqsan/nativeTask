import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import store from './src/store/store';
import Router from './src/router/Router';


const App = () => {
  return <Provider store={store}>
    <Router />
  </Provider>
}

export default App;
