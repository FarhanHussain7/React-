// styled Component : it is library which has multiple function for style use can use this by just download it 
//  download command : npm i styled-components
import styled from 'styled-components';
function StyledCom(){
// I can use styled component in 2 ways
    // first way 
    // const Heading = styled.h1`
    //     color:red;
    //     border:2px solid black;
    //     border-radius:5px;
    //     width:500px;
    //     margin:20px;
    //     padding:10px;
    //     `

    // Second way 
    const Heading=styled.h1({
        color:"red",
        border:"2px solid black",
        borderRadius:"5px",
        width:"500px",
        margin:"20px",
        padding:"10px"
    })

    const StyledBtn = styled.button`
        color:blue;
        width:100px;
        margin:20px;
        `
    return(
        <div>
            <h1>Styled Component for Style</h1>
            <Heading> Software developer </Heading>
            <Heading> DevOps developer </Heading>
            <Heading> Tester  </Heading>
            <Heading> web developer </Heading>
            <StyledBtn>Submit</StyledBtn>
            <StyledBtn>Click</StyledBtn>
            <StyledBtn>More</StyledBtn>
            <StyledBtn>Next</StyledBtn>
        </div>
    )
}

export default StyledCom;