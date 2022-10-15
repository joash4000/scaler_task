import React from "react"
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from './add'
import Display from './display'
import Edit from './editinterview'

export default class Dashboard extends React.Component{
	constructor(){
		super()


	} 
	componentDidMount(){
		


	}
	
	
	render(){

		return(
		<Router>	
			<div>

			
	       	<nav  id="navuser" className="navbar navbar-expand-lg navbar-light bg-light">
	          <div className="collapse navbar-collapse">
	            <ul className="navbar-nav mr-auto">
	              <li className="navbar-item">
	                <Link to="/dashboard/form" className="nav-link">Create Interview</Link>
	              </li>
	              <li className="navbar-item">
	                <Link to="/dashboard/display" className="nav-link">View Upcoming Interview</Link>
	              </li>
                <li className="navbar-item">
	                <Link to="/dashboard/edit" className="nav-link">Edit Interview</Link>
	              </li>
	            
	            </ul>
	          </div>
	       </nav>
         <Route path="/dashboard/form" component={() => <Add />}/>
         <Route path="/dashboard/display" component={() => <Display  />}/>
         <Route path="/dashboard/edit" component={() => <Edit  />}/>
         

	</div>



       

		</Router>
		);
	}
}