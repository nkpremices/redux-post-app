import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Redirector } from 'react-router-redirect';
import './App.scss';
import PostForm from './components/Posts/index';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import NotFound from './components/Notfound';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1 className="header">Post App</h1>
        <Router>
          <Redirector />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts" component={PostForm} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
