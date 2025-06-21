const Student = ({student})=>{
    return(
        <div style={
            {
                color:"green"
            }
        }>
            <h3>Student</h3>
             {
                 student.map((student)=>(

                        <ul>
                            <li>Name : {student.name}</li>
                            <li>Age : {student.age}</li>
                            <li>Email : {student.email}</li>
                            <li>Phone no : {student.phone}</li>
                            <li>=============================================</li>
                        </ul>
                 )
                )
            }
        </div>
    )
}

export default Student;