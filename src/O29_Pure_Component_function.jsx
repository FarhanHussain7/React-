// pure function : they allways give output on the based of the output 
        //         they never depends on outside enviroment. 
let guest=0;
function Pure(){
    return(
        <div>
            <h1>Pure Component and function </h1>
            <Count guest={1}/>
             <Count guest={2}/>
              <Count guest={3}/>
               <Count guest={4}/>
        </div>
    )
}

const Count=({guest})=>{
    // guest = guest+1;
   return( <h1>We have {guest} guest and we have to make {guest} cup of tea </h1>)
}

export default Pure;