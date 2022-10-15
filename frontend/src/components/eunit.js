import React from 'react'
import axios from 'axios'

export default class ES extends React.Component{
	constructor(props){
        super(props)
		this.state={
            //candidate_name:"",
            can_id:this.props.itm._id,
			start_time:"",
			end_time:"",
		}
 		this.onSubmit = this.onSubmit.bind(this);
        this.onChangest = this.onChangest.bind(this);
        this.onChangeet = this.onChangeet.bind(this);

	}
   onSubmit(e){
		e.preventDefault()
	 console.log("jadu")
		axios.post('http://localhost:4000/addrate',this.state)
         .then(res => {
             window.location.reload()
             console.log("thanks")
         })
         .catch(function(error) {
             console.log(error);
         })
	}
		


	
	onChangest(event){

        this.setState({ start_time: event.target.value })

	}
	onChangeet(event){

        this.setState({ end_time: event.target.value })

	}
   
	render(){
		//var uid=this.props.uid
		
		var rev=""
		var rat;
		var can_name=""
		
		var lol=this.props.itm
        can_name=lol.candidates_username
		rev=lol.start_time;
        rat=lol.end_time
		
		
		
		return(
  		<div>
          
        
        <a  style={{margin:'5px'}} className="list-group-item list-group-item-action flex-column align-items-start">
   			 <div className="d-flex w-100 justify-content-between">
    		  <h5 className="mb-1">{this.props.itm.candidates_username}</h5>
   			 </div>
   			 <p className="mb-1">{this.props.itm.candidates_email}</p>

   			 <form  onSubmit={this.onSubmit}>
                    <div className="form-group">        
                        <input type="time" 
                               className="form-control" 
                               value={this.state.start_time}
                               placeholder="Time"
                               onChange={this.onChangest}
                               />
                    </div>
                    <div className="form-group">        
                    <input type="time" 
                               className="form-control" 
                               value={this.state.end_time}
                               placeholder="Time"
                               onChange={this.onChangeet}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Time Slot " className="btn btn-primary"/>
                    </div>
                    
              </form>
              

           {/*   <p style={{display:hide1}}>
              Review : {rev}
              <br/>
              Rating : {rat}
        </p> */}

        	
        </a>
        </div>
		);
  }
}