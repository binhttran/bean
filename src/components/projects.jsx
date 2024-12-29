import styled from 'styled-components';
import CustomCursor from './cursor';

const Title = styled.h2`
    color: #b8d2e3;
    font-weight: bold;
    font-size: 80px;
    margin-top: -55%;
    position: absolute;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 60px;
        margin-bottom: 550px;
        position: absolute;
     
    }

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

    @media (max-width: 1000px) {
        width: 30%;
        height: 85%;
        margin-top: 20%;

`;

const SubTitle = styled.h3`
    color: white;
    text-align: left; 
    margin-left: 20px;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 25px;

`;


const Description = styled.p`
    color: #a1a1aa;
    text-align: left;
    margin-left: 20px;

    @media (max-width: 1000px) {
        font-size: 10px;
`;
const Img = styled.img`
    width: 100%;
    height: auto;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    object-fit: cover;
    backgroud-position: center;
    transition: 1s; 
    postion: absolute;


    //slowly zoom in so it will be cropped when hover
    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 1000px) {
        width: 100%;
        height: auto;
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

    @media (max-width: 1000px) {
        width: 45%;
    
    }
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    display: inline-block;

    @media (max-width: 1000px) {
        font-size: 10px;
       
    }

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

    @media (max-width: 1000px) {
        font-size: 8px;
    }
`;

const GitImg = styled.img`
    width: 25%;
    height: auto; 
    margin-right: 4px;
`;

const Img2 = styled(Img)`   
    height: 140%;
    width: auto;
    @media (max-width: 1000px) {
        width: 120%;
        height: auto;
    }
`;
const Img3 = styled(Img)`
    height: auto%;
    width: 70%;
    margin: auto;

    @media (max-width: 1000px) {
        width: 80%;
        height: auto;
    }

   
`;
function Projects() {
  return (
    <Wrapper id='projects'>
        <Title >PROJECTS</Title>
        <Box1>
        <MiniBox>
                <Img3 src="pics/project3.png"/>
                <SubTitle>Children's data </SubTitle>

                <Button><GitImg src="pics/github.png"/><StyledLink href="https://github.com/ASL-LEX/sign-as-a-service" target="_blank"> Git Repo</StyledLink></Button>
                <Description>
                    tbd
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
            <MiniBox>
                <Img2 src="pics/project2.png"/>
                <SubTitle>Recipes Automation</SubTitle>

                <Button><GitImg src="pics/github.png"/><StyledLink href="https://github.com/binhttran/RecipesAutomation" target="_blank"> Git Repo</StyledLink></Button>
                <Description>
                 Meal preparation just got a lot easier. This platform provides a recipe based on available ingredients to save users convenience and time by 40%. Utilizes Google OAuth login to keep track of profiles with Firebase database while retrieving information from Spoonacular and Unwrangle
                Sam's Club APIs to continuously give recipe recommendations and updates the cart to show the ingredients the user is missing which users can purchase directly from Sam's Club. It also keeps a history of your past recipes for your convenience.
                </Description>
                <TechStack>
                    <Button2>Javascript</Button2>
                    <Button2>ReactJS</Button2>
                    <Button2>NodeJS</Button2>
                    <Button2>ExpressJS</Button2>
                    <Button2>Firebase</Button2>
                    <Button2>APIs</Button2>
                </TechStack>
            </MiniBox>

        </Box1>
               
    </Wrapper>

   
  );
}

export default Projects;