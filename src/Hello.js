import React from "react";
import './Hello.css'
// function App(props) {
//   return <div>Hello World from App.js {props.name} Age = {props.age-10}</div>
// } 

function Hello({firstName}) {
  return <p class="myname">This is para in Hello Tag name : {firstName} </p>
} 

export default Hello;
