import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import Search from './routes/Search';
import Cust from './routes/Cust';
import NoMatch from './routes/NoMatch';

import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/me" component={MyPage} />
          <Route path="/search" component={Search} />
          <Route path="/cust" component={Cust} />
          <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>

  );
};

export default App;