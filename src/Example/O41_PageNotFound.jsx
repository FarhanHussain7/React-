import { Link } from "react-router";
function Page404(){
    return(
        <div style={{ textAlign:"center",
            margin: "0",
  padding: "0",
  backgroundImage: "url('https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh"
        }}>
            <h1>Page Not Found</h1>
            <p>404 Error </p>
            <Link to="/"><p>Go to home page</p></Link>
        </div>
    )
}

export default Page404;