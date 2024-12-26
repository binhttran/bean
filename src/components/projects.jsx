import styled from 'styled-components';

const Title = styled.h2`
    color: white;
    font-weight: bold;
    font-size: 80px;
    margin-top: -35%;
    position: absolute;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    flex-direction: column;
    background-color: #101827;
    position: relative;
`; 

const Box1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`;

const MiniBox = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    background-color: #09090b;
    border-radius: 25px;
    width: 30%;
    height: auto;
    overflow: hidden;
  
   

`;

const SubTitle = styled.h3`
    color: white;
    text-align: left; 
    margin-left: 20px;
`;


const Description = styled.p`
    color: white;
    text-align: left;
    margin-left: 20px;
`;
const Img = styled.img`
    width: 100%;
    height: auto;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    object-fit: cover;
    backgroud-position: center;
    transition: 1s; 


    //slowly zoom in so it will be cropped when hover
    &:hover{
        transform: scale(1.05);

        
        
    }
`;

const Button = styled.button`
    background-color: black;
    border-radius: 4px;
    border-color: white;
    text-color: white;
    width: 20%;
    height: 100%;
    color: white;
    font-size: 10px;
    margin-left: 20px;
    font-size: 10px;
    font-weight: bold;
    margin-top: -10px;

    &:hover {
        background-color: #27272A;
        border-color: #27272A;
`;
function Projects() {
  return (
    <Wrapper id='projects'>
        <Title >PROJECTS</Title>
        <Box1>
            <MiniBox>
                <Img src="pics/project1.png"/>
                <SubTitle>Sign Language Lexicon</SubTitle>
                //link in the button
                <Button>git repo</Button>
                <Description>Sign Language Lexicon offers a platform for admins 
                to perform CRUD operations on lexicons, which are short snippets of signing specific words. This provides digital representation of 
                American Sign Language</Description>
            </MiniBox>

        </Box1>
               
    </Wrapper>

   
  );
}

export default Projects;