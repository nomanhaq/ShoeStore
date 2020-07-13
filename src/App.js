import React from 'react';
import Navbar from'./Components/Navbar';
import Home from'./Components/Home';
import Cart from './Components/Cart';
import './App.css';
import{ Provider } from 'react-redux';
import store from './Store.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
