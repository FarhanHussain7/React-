import UserComponent,{UserKey} from "./Example/Import_Export";

function ImportExport(){
  
  return (
    <div>
    <UserComponent/>
    <UserKey/>
    <button onClick={()=>{alert("yes this is callback")}}>callback</button>
  </div>
  )
}

export default ImportExport;