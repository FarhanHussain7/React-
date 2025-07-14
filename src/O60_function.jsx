function ObjectData(){
  
const fruit=(name)=>{
      alert("yes it is apple",name);
  }

  function doubleCheck(){
    alert("Check the function ");
  }

    return (
        <div>

      <button onClick={fruit}>funOutSide</button>
    <button onClick={doubleCheck}>Click me</button>

    </div>
    )
}

export default ObjectData;