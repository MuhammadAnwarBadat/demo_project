import './App.css';
import Hello from './Hello';

// function App(props) {
//   return <div>Hello World from App.js {props.name} Age = {props.age-10}</div>
// } 

function App({name, age}) {
  return <div>
    Hello World from App.js {name} Age = {age-5}
  <br/>
  <Hello firstName={name} ></Hello>
  </div>
} 

export default App;
