// In React to use bootstrap we first download it will that command : npm i react-bootstrap bootstrap

import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function BootStrap(){
    return(
        <div>
            <h1>
                Bootstrap using 
            </h1>
            <button onClick={()=>{alert("simple button")}}>Simple button </button>
            <Button onClick={()=>{alert("Bootstrap button")}}>Bootstrap Button</Button>
            
            
            <Button variant="danger">ok</Button>
            <Button variant="success">okay </Button>
            <Button variant="warning">click</Button>


            <Alert variant="danger">Alert Bootstrap</Alert>
            <Alert variant="primary">Alert Bootstrap</Alert>
            <Alert variant="success">Alert Bootstrap</Alert>
            <Alert variant="dark">Alert Bootstrap</Alert>
        </div>
    )
}

export default BootStrap;