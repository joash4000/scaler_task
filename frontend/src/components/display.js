import React from 'react'
import axios from 'axios'
import RS from './runit'
export default class Display extends React.Component{
    constructor(props){
		super(props)
       this.state={}
  }

  componentDidMount() {
        axios.get('http://localhost:4000/getcan')
             .then(res => {
                console.log(res.data)
                 this.setState(res.data);
             })
             .catch(function(error) {
                 console.log(error);
             })

  }
  render(){
   
    var lol=this.state
    console.log(lol)
    var lis=[]
    for (var i in lol){
       lis.push(lol[i])
    }
      console.log(lis)
        const List = lis.map((item) => <RS itm={item} />)   

		return(

      <div>
      {List} 
      
      <div style ={{ height:"400px", width:"100%", clear:"both"}}>
     </div>
      </div>
		

    )

	}
}