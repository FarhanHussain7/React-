function ObjectData(){
    let UserObject = {
     name:"Farhan",
     email:"fh223344@gmail.com",
     Phone:987876677888
  }
    return (
        <div>
    <p> Email {UserObject.email}</p>
    <input type="text" value={UserObject.name}/><br />
    </div>
    )
}

export default ObjectData;