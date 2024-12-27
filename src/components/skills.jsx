import styled from "styled-components";
import CustomCursor from "./cursor";

const Container = styled.div`
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background-color: #ebebe8;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    position: relative;
`;
const Title = styled.h2`
    color: #101827;
    font-weight: bold;
    font-size: 80px;

`;

const Button = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
    margin-right: 10px;
    border: none;
    margin-top: 10px;   
    max-width: 150px;
    justify-content: flex-start;
    padding: 10px 30px;
    height: fit-content;
    width: fit-content;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 

`;

const Font = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #101827;
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 90%;
    flex-wrap: wrap;
    margin-left: 10%;
`;

const Container1 = styled.div`
    flex-direction: column;
    display: flex;
    height: 30%;
`;

const Img = styled.img`
    width: 30%;
    height: auto;
    margin: auto;
    padding: 0 10px 0 0; 
`; 


function Skills(){
    return (
        <Container id = 'skills'>
            <Container1>
                <Title>SKILLS</Title>
            </Container1>
            <Buttons>
                <Button><Img src = "./pics/python.png"/><Font>Python</Font></Button>
                <Button><Img src="./pics/java.png"/><Font>Java</Font></Button>
                <Button><Img src="./pics/js.png"/><Font>JavaScript</Font></Button> 
                <Button><Img src="./pics/react.png"/><Font>ReactJS</Font></Button>  
                <Button><Img src="./pics/html:css.png"/><Font>HTML/CSS</Font></Button>
                <Button><Img src="./pics/sql.png"/><Font>SQL</Font></Button>
                <Button><Img src="./pics/git.png"/><Font>Git</Font></Button>
                <Button><Img src="./pics/c.png"/><Font>C</Font></Button>
                <Button><Img src="./pics/mongo.png"/><Font>MongoDB</Font></Button>
                <Button><Img src="./pics/ts.png"/><Font>Typescript</Font></Button>
                <Button><Img src="./pics/figma.png"/><Font>Figma</Font></Button>
                <Button><Img src="./pics/azure.png"/><Font>Azure</Font></Button>
                <Button><Img src="./pics/basex.png"/><Font>BaseX</Font></Button>
                <Button><Img src="./pics/bash.png"/><Font>Bash</Font></Button>
            </Buttons>
        </Container>

    )

}
export default Skills;