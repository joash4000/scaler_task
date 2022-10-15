import React from 'react'
import axios from 'axios'
import './dash.css'
export default class Add extends React.Component{
	constructor(props){
		super(props)
        this.state={
        	candidates_username:"",
        	candidates_email:"",
            start_time:"",
            end_time:""
        	
        }
		this.onChangename= this.onChangename.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        
	}
 	onChangename(event) {
        this.setState({candidates_username: event.target.value });
    }

    onChangeemail(event) {
        this.setState({candidates_email: event.target.value });
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
                      document.getElementById("AfterSubmit").innerHTML = "LIST ADDED";
                      console.log(res.data)
                    
                   }
                   else{
                      document.getElementById("AfterSubmit").innerHTML = "LOGIN FIRST";
                   }
                 });

        




    }
	render(){


		return(

  			<div className='card-container'>
             <form onSubmit={this.onSubmit}>
                    <div className="form-group">        
                        <label>Candidate Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.candidates_username}
                               onChange={this.onChangename}
                               required
                               />
                    </div>
                    <div className="form-group">
                        <label>Candidate Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.candidates_email}
                               onChange={this.onChangeemail}
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