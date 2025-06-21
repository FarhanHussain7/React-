import Collage from "./Collage";

function Array(){

    const CollageData = [
        {
            name: "Hi-Tech",
            city:"Ghaziabad",
            website:"wwww.Hitech.com",
            Students:[
                {
                    name:"Farhan Hussain",
                    age:"23",
                    email:"farhanHussain@gmail.com",
                    phone:"987738483"
                },
                {
                    name:"Ashish pal",
                    age:"24",
                    email:"Ashishpal@gmail.com",
                    phone:"9870000333"
                },
                {
                    name:"Chirag Jaiswal",
                    age:"25",
                    email:"chiragjaiswal@gmail.com",
                    phone:"983234543"
                }
            ]
        },
        {
            name: "IMS",
            city:"Lalkua",
            website:"wwww.IMS.com",
            Students:[
                {
                    name:"Farhan Hussain",
                    age:"23",
                    email:"farhanHussain@gmail.com",
                    phone:"987738483"
                },
                {
                    name:"Ashish pal",
                    age:"24",
                    email:"Ashishpal@gmail.com",
                    phone:"9870000333"
                },
                {
                    name:"Chirag Jaiswal",
                    age:"25",
                    email:"chiragjaiswal@gmail.com",
                    phone:"983234543"
                }
            ]
        },
        {
            name: "Sanskar",
            city:"Dasana",
            website:"wwww.Sanskar.com",
            Students:[
                {
                    name:"Farhan Hussain",
                    age:"23",
                    email:"farhanHussain@gmail.com",
                    phone:"987738483"
                },
                {
                    name:"Ashish pal",
                    age:"24",
                    email:"Ashishpal@gmail.com",
                    phone:"9870000333"
                },
                {
                    name:"Chirag Jaiswal",
                    age:"25",
                    email:"chiragjaiswal@gmail.com",
                    phone:"983234543"
                }
            ]
        },
        {
            name: "IPEM",
            city:"By Pass",
            website:"wwww.IPEM.com",
            Students:[
                {
                    name:"Farhan Hussain",
                    age:"23",
                    email:"farhanHussain@gmail.com",
                    phone:"987738483"
                },
                {
                    name:"Ashish pal",
                    age:"24",
                    email:"Ashishpal@gmail.com",
                    phone:"9870000333"
                },
                {
                    name:"Chirag Jaiswal",
                    age:"25",
                    email:"chiragjaiswal@gmail.com",
                    phone:"983234543"
                }
            ]
        },
        {
            name: "ABES",
            city:"Greater noida",
            website:"wwww.abes.com",
            Students:[
                {
                    name:"Farhan Hussain",
                    age:"23",
                    email:"farhanHussain@gmail.com",
                    phone:"987738483"
                },
                {
                    name:"Ashish pal",
                    age:"24",
                    email:"Ashishpal@gmail.com",
                    phone:"9870000333"
                },
                {
                    name:"Chirag Jaiswal",
                    age:"25",
                    email:"chiragjaiswal@gmail.com",
                    phone:"983234543"
                }
            ]
        }
    ]
    return(
        <div style={
            {
                display:"block",
                justifyItems:"center",
                alignItems:"center"
            }
        }>
            <h1>Collage Details</h1>
            {
                CollageData.map((collage,index)=>(
                    <div key={index}>
                       <Collage collage={collage}/>
                    </div>

                ))
            }
        </div>
    )
}

export default Array;