import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LoginContainer from './Containers/LoginContainer'
import PostsContainer from './Containers/PostsContainer'


const App: React.FC = () => {
  return (
    <>
    <Router>
      <Route path='/login' exac component={LoginContainer}/>
      <Route path='/posts' component={PostsContainer}/>
    </Router>
    </>
  );
}

export default App;
