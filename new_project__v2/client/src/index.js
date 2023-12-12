import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore"
import MovieStore from './store/MovieStore';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    movie: new MovieStore(),
  }}>
    <App />
  </Context.Provider>,
  
  document.getElementById('root')
);
