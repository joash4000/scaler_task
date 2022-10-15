import React from 'react'
import axios from 'axios'

export default class RS extends React.Component{
	constructor(props){
		super(props)
		this.state={
            candidate_name:"",
			start_time:"",
			end_time:"",
		}
 		

	}
    render(){
		var uid=this.props.uid
		
		var rev=""
		var rat;
		
		
		var lol=this.props.itm
		rev=lol.start_time;
        rat=lol.end_time
		
		
		return(
  		<div>
          
        
        <a  style={{margin:'5px'}} className="list-group-item list-group-item-action flex-column align-items-start">
   			 <div className="d-flex w-100 justify-content-between">
    		  <h5 className="mb-1">{this.props.itm.candidates_username}</h5>
   			 </div>
                <p className="mb-1">{this.props.itm.candidates_email
                }</p>
              

              <p >
              Start Time : {rev}
              <br/>
              End Time : {rat}
              </p>

        	
        </a>
        </div>
		);
  }
}