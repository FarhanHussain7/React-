import Student from "./Student";

const Collage=({collage})=>{
    return(
        <div  
        style={{
            border:"2px solid black",
            backgroundColor:"#ccc",
            padding:"20px",
            borderRadius:"10px",
            margin:"30px",
            color:"red",
            boxShadow:"0px 0px 10px gray",
            width:"500px",
        }}
        >
             <h1>Name : {collage.name}</h1>
                        <ul>
                            <li>
                                <h2>City : {collage.city}</h2>
                            </li>
                            <li>
                                <h2>Website : {collage.website}</h2>
                            </li>
                            <li>
                            <Student student={collage.Students}/>
                            </li>
                        </ul>
                
        </div>
    )
}

export default Collage;