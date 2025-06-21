import Header from "./Header";
import UserComponent,{UserKey} from "./Import_Export";
import './App.css';

function App(){

  
const fruit=(name)=>{
      alert("yes it is apple",name);
  }




  function doubleCheck(){
    alert("Check the function ");
  }
  const name = "Farhan Hussain";
  let x = 20;
  let y = 30;
  let UserObject = {
     name:"Farhan",
     email:"fh223344@gmail.com",
     Phone:987876677888
  }
 const UserArray =['jihan', 'kaif', 'rihan']
 const path="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  return (
    <div>
      <Header/>
      <button onClick={fruit}>funOutSide</button>
    <h1>Hello {name?name:"User not found"} </h1>
    <h3>{x+y}</h3>
    <p>this is new react app </p>
    <button onClick={doubleCheck}>Click me</button>
    <img src="./public/taj mahal1.jpg" alt="jacket" />
    <UserComponent/>
    <UserKey/>
    <p> Email {UserObject.email}</p>
    <p>{UserArray[0]}</p>
    <input type="text" value={UserObject.name}/><br />
    <img src={path} alt="Cat" />
    <button onClick={()=>{alert("yes this is callback")}}>callback</button>
  </div>
  )
}

export default App;