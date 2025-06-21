import { useState } from "react";
import "./css/O1_External_css.css";
function Style(){

    const [CardStyle, setColorStylr]= useState(
        {
            border:"1px solid #cccccc3b",
            width:"300px",
            boxShadow:"1px 2px 3px 8px #cccccc3b",
             justifyItems:"center",
             margin:"20px",
             padding:"10px",
             borderRadius:"20px"
        }
    )
    const [Color, setTextColor]=useState('black');
    const [grid, setdisplay]=useState(true)
    
    const updateTheme=(bgColor,textColor)=>{
        setColorStylr({...CardStyle,backgroundColor:bgColor})
        setTextColor(textColor)
    }
      
return(
    <div>
        <h1 style={{color:"red", backgroundColor:"goldenrod"}}>
        Inline Style in React 
        </h1>
        <button onClick={()=>{updateTheme('grey','green')}}>grey theme</button>
        <button onClick={()=>{updateTheme('white','red')}}>default theme</button>
        <button onClick={()=>setdisplay(!grid)}>Toggle Data</button>
        <div className="AllCards" style={{
                 display: grid? 'flex':'block',
             }}>
        <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
           <ul>
            <li><p>Software engineer</p></li>
            <li><p>Age : 26</p></li>
            <li><p>Email: alex@gmail.com</p></li>
            <li><p>Phone no : 98665452</p></li>
            </ul>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
         <div style={CardStyle}>
            <img src="/business-8308579.jpg" width={"300px"} height={"250px"} style={{border:"2px solid black", borderRadius:"50px"}}/>
           <div style={{color:Color}}> <h1>Farhan hussain</h1>
            <p>Software engineer</p>
            <p>Age : 26</p>
            <p>Email: alex@gmail.com</p>
            <p>Phone no : 98665452</p>
            </div>
        </div>
        </div>
    </div>
)
}
export default Style;