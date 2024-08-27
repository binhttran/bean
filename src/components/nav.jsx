import react from 'react';
// import { Link } from 'react-router-dom';
import style from 'styled-components';
const LeftContainer = style.div`
    display: flex;
    color: white;
    font-weight: bold;
    text-align: left;
    padding-right: 85vh;
    flex-direction: column;
    margin-left: 30px; 
    
    &:hover {
        color: #61ACC4;

`;

const Button = style.button`
    background-color: white;
    margin: 30px 10px;
    border-radius: 10px;
    border-color: white;
    color: #61ACC4;
    padding: 8px;

    &:hover {
        padding: 10px;
        font-weight: bold;
        border-color: #61ACC4;
        transition: background-color 0.3s ease, height 0.3s ease, border-radius 0.3s ease, padding 0.3s ease;

`;

const Name = style.h1`
    text-align: left;
    padding-right: 100px;
    margin-bottom: -2px; 

`;


const Main = style.div`
    display: flex;
    flex-direction: row;

`;
   

const Nav = () => {
  return (
    <Main>
         <LeftContainer>
            <Name>Binh Tran</Name>
            <p>CS @ Boston University</p>
        </LeftContainer>
        <div>
            <Button>About</Button>
            <Button>Experience</Button>
            <Button>Projects</Button>
            <Button>Skills</Button>
            <Button>Contact</Button>
        </div>
    </Main>
   
  );
}
export default Nav;