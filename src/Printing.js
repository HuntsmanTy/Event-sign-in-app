import React, {Component} from 'react';
let pdf = require('html-pdf');
const firstName = "tyler";
const lastName = "huntsman";
const companyName = "Helio Student"


let html = "<div><h>"+firstName+lastName+"</h><p>"+companyName+"</p></div>";
let options = {height: "2.5 in", width: "5 in",orientation: 'landscape'}

export default class Printing extends Component{
constructor(){
    super()
}
  createThePDF=(e)=>{
pdf.create(html,options).toFile('./nametag.pdf',function(err,res){
if(err){console.log(err)}
console.log(res);
})

    
  }
render(){

    return(
        <div>
        <button> </button>
        </div>
    )
}

}

