import React from 'react'
import axios from 'axios'

export default class ES extends React.Component{
	constructor(props){
        super(props)
		this.state={
            //candidate_name:"",
            can_id:this.props.itm._id,
            interviewer_1:"",
            interviewer_2:"",
			start_time:"",
			end_time:"",
		}
 		this.onSubmit = this.onSubmit.bind(this);
        this.onChangest = this.onChangest.bind(this);
        this.onChangeet = this.onChangeet.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange_inter_email_1=this.onChange_inter_email_1.bind(this);
        this.onChange_inter_email_2=this.onChange_inter_email_2.bind(this);
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
		
    onChange_inter_email_1(event){
        this.setState({interviewer_1: event.target.value })
    }
    onChange_inter_email_2(event){
        this.setState({interviewer_2: event.target.value })
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
		var hide="none"
		const in_2=lol.interviewer_2
		if(in_2)hide=""
		
		return(
  		<div>
          
        
        <a  style={{margin:'5px'}} className="list-group-item list-group-item-action flex-column align-items-start">
   			 <div className="d-flex w-100 justify-content-between">
                <button type="button"  className="btn btn-warning" style={{position:"absolute",right:"20px"}} onClick={this.onClick}>Cancel Interview</button>
    		  <h5 className="mb-1">{this.props.itm.candidates_username}</h5>
   			 </div>
   			 <p className="mb-1">Participant Email : {this.props.itm.candidates_email}</p>
                <p className="mb-1">Interviewer 1 : {this.props.itm.interviewer_1
                }</p>
                <p className="mb-1" style={{display:hide}}>Interviewer 2 : {this.props.itm.interviewer_2
                }</p>
                <p className="mb-1">Start Time:{this.props.itm.start_time}</p>
                <p className="mb-1">End Time:{this.props.itm.end_time}</p>
                
   			 <form  onSubmit={this.onSubmit}>
                {/*<p className="mb-1">Change Interviewer 1:</p>*/}
               <div className="form-group">
                        {/* <input type="text" 
                               className="form-control" 
                               value={this.state.interviewer_email}
                               onChange={this.onChange_inter_email}
                               required

            />  */}  
            <label for="interviewer_email">Interviewer 1: </label>
            <select name="interviewer_email" id="interviewer_email" type="text" className="form-control"
            
                  value={this.state.interviewer_1}
                   onChange={this.onChange_inter_email_1}
                    required>
              <option value="" hidden></option>
              <option value="akshay44@gmail.com">akshay44@gmail.com</option>
             <option value="anjali68@gmail.com">anjali68@gmail.com</option>
            <option value="tanya8@gmail.com">tanya8@gmail.com</option>
             <option value="sunil64@gmail.com">sunil64@gmail.com</option>
            </select>
                    </div>
                    {/*<p className="mb-1">Change Interviewer 2:</p>*/}
                    <div className="form-group">
                            
                 <label for="interviewer_email">Interviewer 2: </label>
                 <select name="interviewer_email" id="interviewer_email" type="text" className="form-control"
                 
                       value={this.state.interviewer_2}
                        onChange={this.onChange_inter_email_2}
                         required>
                   <option value="" hidden></option>
                   <option value="akshay44@gmail.com">akshay44@gmail.com</option>
                  <option value="anjali68@gmail.com">anjali68@gmail.com</option>
                 <option value="tanya8@gmail.com">tanya8@gmail.com</option>
                  <option value="sunil64@gmail.com">sunil64@gmail.com</option>
                 </select>
                         </div>
                <p className="mb-1">Change Start Time:</p>
                    <div className="form-group">        
                        <input type="time"
                               className="form-control" 
                               value={this.state.start_time}
                               placeholder="Time"
                               onChange={this.onChangest}
                               required />
                    </div>
                    <p className="mb-1">Change End Time:</p>
                    <div className="form-group">        
                    <input type="time" 
                               className="form-control" 
                               value={this.state.end_time}
                               placeholder="Time"
                               onChange={this.onChangeet}
                               required />
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