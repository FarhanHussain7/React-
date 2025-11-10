// Controlled component means that we have input field in our file and this input field are controlled by the state

import { useState } from "react";

function Component(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

   const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px 20px',
  marginRight: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px'
};

const headingStyle = {
  textAlign: 'center',
  color: '#333'
};


    return(
        <div>
  <h1 style={headingStyle}>Controlled Component</h1>
  <form style={formStyle}>
    <input type="text" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    <input type="text" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
    <input type="password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
    <button style={buttonStyle}>Submit</button>
    <button style={{ ...buttonStyle, backgroundColor: '#6c757d' }} onClick={() => { setName(""); setEmail(""); setPassword(""); }}>Clear</button>
    <h1 style={headingStyle}>{name}</h1>
    <h1 style={headingStyle}>{email}</h1>
    <h1 style={headingStyle}>{password}</h1>
  </form>
</div>

    )
}       

export default Component;