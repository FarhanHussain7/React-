const ReuseUser =({data})=>{
    return(
        <div style={{
            border:"1px solid black",
            margin:"10px",
            padding:"10px",
            borderRadius:"10px",
            width:"400px"
        }}>
            <h1>Name : <span style={{color:"green"}}>{data.name}</span></h1>
            <h1>Email : <span style={{color:"green"}}>{data.email}</span></h1>
            <h1>Age : <span style={{color:"green"}}>{data.age}</span></h1>
        </div>
    )
}

export default ReuseUser;