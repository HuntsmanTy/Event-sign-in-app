import React, {Component} from 'react';
 const queryString = require('query-string');


export default class Searching extends Component {
  constructor() {
    super();
    this.state = { attendie: {firstName:'',lastName:'',companyName:'',email:''}};
  }

  getAttendie() {
    const parsed = queryString.stringify(this.state.attendie);

    fetch(`http://localhost:4000/v1/rsvp-attendie?`+ parsed, { method: 'GET' })
      .then(response => response.json())
      .then(attendie => {
        this.setState({ attendie });
        console.log(attendie);
      })
      .catch(err => console.error(err));

      
  }

  changeFirstName(e){
    this.setState.attendie.firstName = e.target.value;
  }
  changeLastName(e){
    this.setState.attendie.lastName = e.target.value;
  }

  changeCompanyName(e){
    this.setState.attendie.companyName = e.target.value;

  }

  changeEmail(e){

    this.setState.attendie.email = e.target.value;

    
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
     <input type="text" defaultValue={this.state.attendie.firstName} onChange={this.changeFirstName.bind(this)}/>
    Last Name:
    <input type="text" defaultValue={this.state.attendie.lastName} onChange={this.changeLastName.bind(this)} />
    Company Name:
<input type="text" defaultValue={this.state.attendie.companyName}  onChange={this.changeCompanyName.bind(this)}/>
    Email Address:
<input type="text"  defaultValue={this.state.attendie.email} onChange={this.changeEmail.bind(this)}/>
<button type="submit" id='search'>Search</button>

</form>

</div>
  
    )
  }

}

