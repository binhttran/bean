import styled from "styled-components";

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
    color: black;
    font-weight: bold;
    font-size: 80px;

`;

const Button = styled.button`
    background-color: white;
    border-radius: 10px;
    margin-right: 10px;
    padding: 10px;

`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px;
`;
function Skills(){
    return (
        <Container id = 'skills'>
            <div>
                <Title>SKILLS</Title>
            </div>
            <Buttons>
                <Button>Python</Button>
                <Button>Java</Button>
                <Button>JavaScript</Button> 
                <Button>ReactJS</Button>  
                <Button>HTML/CSS</Button>
                <Button>SQL</Button>
                <Button>Git</Button>
                <Button>C</Button>
                <Button>MongoDB</Button>
                <Button>Typescript</Button>
                <Button>Figma</Button>
                <Button>Azure</Button>
                <Button>Git</Button>
                <Button>BaseX</Button>
                <Button>Bash</Button>
            </Buttons>
        </Container>

    )

}
export default Skills;