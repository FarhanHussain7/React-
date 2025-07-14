function Image(){

 const path="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

    return(
        <div>
    <img src="./public/taj mahal1.jpg" alt="jacket" />
    <img src={path} alt="Cat" />

        </div>
    )
}

export default Image;