import React from 'react'
import axios from 'axios'

export default class ES extends React.Component{
	constructor(props){
        super(props)
		this.state={
            //candidate_name:"",
            can_id:this.props.itm._id,
            interviewer_email:"",
			start_time:"",
			end_time:"",
		}
 		this.onSubmit = this.onSubmit.bind(this);
        this.onChangest = this.onChangest.bind(this);
        this.onChangeet = this.onChangeet.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange_inter_email=this.onChange_inter_email.bind(this);
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
		
    onChange_inter_email(event){
        this.setState({ interviewer_email: event.target.value })
    }

	
	onChangest(event){

        this.setState({ start_time: event.target.value })

	}
	onChangeet(event){

        this.setState({ end_time: event.target.value })

	}
    onClick(e) {
         e.preventDefault();

        
        axios.post('http://localhost:4000/deleterecord', {id:this.state.can_id})
                 .then(res => {
                    window.location.reload()
               
                 });
    }
	render(){
		//var uid=this.props.uid
		console.log(this.state)
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
                <button type="button"  className="btn btn-warning" style={{position:"absolute",right:"20px"}} onClick={this.onClick}>Cancel Interview</button>
    		  <h5 className="mb-1">{this.props.itm.candidates_username}</h5>
   			 </div>
   			 <p className="mb-1">Participant Email :{this.props.itm.candidates_email}</p>
                <p className="mb-1">Interviewer Email : {this.props.itm.interviewer_email
                }</p>
                <p className="mb-1">Start Time:{this.props.itm.start_time}</p>
                <p className="mb-1">End Time:{this.props.itm.end_time}</p>
                
   			 <form  onSubmit={this.onSubmit}>
                <p className="mb-1">Change Interviewer:</p>
                <div className="form-group">
                        <input type="text" 
                               className="form-control" 
                               value={this.state.interviewer_email}
                               onChange={this.onChange_inter_email}
                               required

                               />  
                    </div>
                <p className="mb-1">Change Start Time:</p>
                    <div className="form-group">        
                        <input type="time"
                               className="form-control" 
                               value={this.state.start_time}
                               placeholder="Time"
                               onChange={this.onChangest}
                               />
                    </div>
                    <p className="mb-1">Change End Time:</p>
                    <div className="form-group">        
                    <input type="time" 
                               className="form-control" 
                               value={this.state.end_time}
                               placeholder="Time"
                               onChange={this.onChangeet}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Interview" className="btn btn-primary"/>
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