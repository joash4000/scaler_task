import React from 'react'
import axios from 'axios'
import './dash.css'
export default class Add extends React.Component{
	constructor(props){
		super(props)
        this.state={
        	candidates_username:"",
        	candidates_email:"",
            interviewer_email:"",
            start_time:"",
            end_time:""
        	
        }
		this.onChangename= this.onChangename.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChange_inter_email= this.onChange_inter_email.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        
	}
 	onChangename(event) {
        this.setState({candidates_username: event.target.value });
    }

    onChangeemail(event) {
        this.setState({candidates_email: event.target.value });
    }
    onChange_inter_email(event){
        this.setState({interviewer_email: event.target.value });
    }
    async onSubmit(e) {
        e.preventDefault();
        
        var  lid
        
        const List= this.state
        console.log(List)
        //delete List.files
     await axios.post('http://localhost:4000/candidadeform', List)
                 .then(res => {
                   if(res.data.success==true){
                   		lid = res.data.listid
                      document.getElementById("AfterSubmit").innerHTML = "INTERVIEW SCHEDULED";
                      console.log(res.data)
                    
                   }
                 if(res.data.success==false){
                    document.getElementById("AfterSubmit").innerHTML = "Candidate not available in the time slot";
                   }
                //    else{
                //       //document.getElementById("AfterSubmit").innerHTML = "LOGIN FIRST";
                //    }
                 }).catch(e=>{
                    document.getElementById("AfterSubmit").innerHTML = "Candidate not available in the time slot";
                 })
                
       }
	render(){


		return(

  			<div className='card-container'>
             <form onSubmit={this.onSubmit}>
                    <div className="form-group">        
                        <label>Participant Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.candidates_username}
                               onChange={this.onChangename}
                               required
                               />
                    </div>
                    <div className="form-group">
                        <label>Participant Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.candidates_email}
                               onChange={this.onChangeemail}
                               required

                               />  
                    </div>
                    <div className="form-group">
                        <label>Interviewer Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.interviewer_email}
                               onChange={this.onChange_inter_email}
                               required

                               />  
                    </div>
                    <div className="form-group">
                        <label>Start Time </label>
                        <input type="time" 
                               className="form-control" 
                               value={this.state.start_time}
                               placeholder="Time"
                               onChange={(event)=>{this.setState({start_time:event.target.value })}}
                               required

                               />  
                    </div>
                    <div className="form-group">
                        <label>End Time </label>
                        <input type="time" 
                               className="form-control" 
                               value={this.state.end_time}
                               placeholder="Time"
                               onChange={(event)=>{this.setState({end_time:event.target.value })}}
                               required

                               />  
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                    <div id ="AfterSubmit">

                    </div>
                </form>
                <div style={{height:'200px'}}></div>
            </div>

		)

	}
}