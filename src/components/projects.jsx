import styled from 'styled-components';
import CustomCursor from './cursor';

const Title = styled.h2`
    color: #b8d2e3;
    font-weight: bold;
    font-size: 80px;
    margin-top: -55%;
    position: absolute;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 130vh;
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
    border-radius: 25px;
`; 

const Box1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`;

const MiniBox = styled.div`
    margin-top: 3%;
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
    font-size: 30px;
`;


const Description = styled.p`
    color: #a1a1aa;
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px 14px; 
    width: 25%;
    margin-left: 20px;
    margin-top: -10px;
    font-size: 12px; 
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    border-color: grey;
    &:hover {
    background-color: #27272A;
    border-color: #27272A;
    }

    &:focus {
    outline: none;
    box-shadow: 0 0 4px #ffffff;
    }
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    display: inline-block;

`;

const TechStack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`;
const Button2 = styled(Button)`
    background-color: #212123;
    border-color: #212123;
    margin-top: -10px;
    margin-bottom: 20px;
    cursor: default; 
    font-size: 12px;
    padding: 4px 4px; 
    margin-top: 1px;
`;

const GitImg = styled.img`
    width: 25%;
    height: auto; 
    margin-right: 4px;
`;
function Projects() {
  return (
    <Wrapper id='projects'>
        <CustomCursor />
        <Title >PROJECTS</Title>
        <Box1>
            <MiniBox>
                <Img src="pics/project1.png"/>
                <SubTitle>Sign Language Lexicon</SubTitle>

                <Button><GitImg src="pics/github.png"/><StyledLink href="https://github.com/ASL-LEX/sign-as-a-service" target="_blank"> Git Repo</StyledLink></Button>
                <Description>
                    Sign as a Service addresses the challenge of sign language data availability. Written language has traditionally been used to label sign data
                    The platform provides digital representations of signs, allowing researchers to
                    label videos with the correct signs rather than written translations. It features a
                    sign language lexicon search, enabling precise 1-to-1 labeling.
                </Description>
                <TechStack>
                    <Button2>Typescript</Button2>
                    <Button2>Javascript</Button2>
                    <Button2>Python</Button2>
                    <Button2>NestJS</Button2>
                    <Button2>HTML/CSS</Button2>
                    <Button2>ReactJS</Button2>
                    <Button2>MongoDB</Button2>
                </TechStack>
            </MiniBox>

        </Box1>
               
    </Wrapper>

   
  );
}

export default Projects;