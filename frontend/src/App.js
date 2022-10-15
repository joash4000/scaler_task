import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "./components/dashmain"

//import User from "./components/user-login"


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
  </li>
            </ul>
          </div>
        </nav>

        <br/>

        <p>
        Hey welcome to my interview scheduler app. 
       {/*Now Click on Dashboard above to observe the functionality of platform. */}
        </p>
       {/*
        <Route path="/user" component={() => <User value="user"/>}/>
*/}
        <Route path="/dashboard" component={() => <Dashboard />}/>

      </div>
    </Router>
   
  );
 
}

export default App;
