import Header from "./O3_ArrayData";
import UserComponent,{UserKey} from "./Example/Import_Export";
import './App.css';

function App(){

  
  const name = "Farhan Hussain";
  let x = 20;
  let y = 30;
  
  return (
    <div>
      <Header/>
      <h1>Hello {name ? name:"User not found"} </h1>
    <h3>{x+y}</h3>
    <p>this is new react app </p>

  </div>
  )
}

export default App;