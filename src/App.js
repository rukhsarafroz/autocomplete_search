import React from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import MonsterHomePageComponent from './components/MonsterHomePageComponent';

function App() {
  return (
    <Provider store={store}>
      <MonsterHomePageComponent />
    </Provider>
  );
}

export default App;
