function ObjectData(){
    let UserObject = {
     name:"Farhan",
     email:"fh223344@gmail.com",
     Phone:9878766734
  }
    return (
        <div>
            <p>Name : {UserObject.name}</p>
    <p> Email {UserObject.email}</p>
    <input type="text" value={UserObject.name}/><br />
    <input type="text" value={UserObject.Phone}/><br />
    </div>
    )
}

export default ObjectData;