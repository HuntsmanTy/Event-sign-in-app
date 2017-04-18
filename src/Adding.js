import React, {Component} from 'react';
let fs = require('fs');



export default class Adding extends Component {
  constructor() {
    super();
    this.state={ firstName:'',lastName:'',companyName:'',email:''};
  }

  getAttendie() {
    const parsed=this.state;
   const myHeaders=new Headers({
  "Content-Type": "application/json",
});

    fetch(`http://localhost:4000/v1/walk-in-attendie`, { method: 'POST',headers:myHeaders, body: JSON.stringify(parsed) })
      .then(response => response.json())
      .then(attendie => {
        this.setState({ attendie });
        console.log(attendie);
      })
      .catch(err => console.error(err));

      
  }

  changeFirstName(e){
this.setState({firstName:e.target.value})
  }
  changeLastName(e){
this.setState({lastName:e.target.value})
  }

  changeCompanyName(e){
    this.setState({companyName:e.target.value})
  }

  changeEmail(e){
    this.setState({email:e.target.value})
  }

  handleSubmit=(e)=>{
        e.preventDefault();
    this.getAttendie();
  }


  render(props) {

    return (

<div>
        <h1>Attendies</h1>
 
<form onSubmit={this.handleSubmit}>
  First Name:
     <input type="text" defaultValue={this.state.firstName} onChange={this.changeFirstName.bind(this)}/>
    Last Name:
    <input type="text" defaultValue={this.state.lastName} onChange={this.changeLastName.bind(this)} />
    Company Name:
<input type="text" defaultValue={this.state.companyName}  onChange={this.changeCompanyName.bind(this)}/>
    Email Address:
<input type="text"  defaultValue={this.state.email} onChange={this.changeEmail.bind(this)}/>
<button type="submit" id='search'>Add</button>

</form>


</div>
  
    )
  }

}