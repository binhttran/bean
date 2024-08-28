import react from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
const LeftContainer = styled.div`
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

const Button = styled.button`
    background-color: white;
    margin: 20px 10px;
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

const StyledLink = styled.a`
    color: lightblue;
    text-decoration: none;
    font-weight: bold;
    transition: font-size 0.4s;

    &:hover {
    font-size: 1.1em; /* Increase font size on hover */
    }

`;
const Name = styled.h1`
    text-align: left;
    padding-right: 30px;
    margin-bottom: -2px; 

`;


const Main = styled.div`
    display: flex;
    flex-direction: row;

`;
   
const StyledList = styled.li`
    list-style: none;
`
const RightContainer = styled.ul`
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
            <RightContainer>
                <StyledList>
                    <Button>
                        <StyledLink href="about">About</StyledLink>
                    </Button>
                </StyledList>
                <StyledList>
                    <Button>
                        <StyledLink href="#experience">Experience</StyledLink>
                    </Button>
                </StyledList>
                <StyledList>
                    <Button>
                        <StyledLink href="project">Projects</StyledLink>
                    </Button>
                </StyledList>
                <StyledList>
                    <Button>
                        <StyledLink href="skills">Skills</StyledLink>
                    </Button>
                </StyledList>
                <StyledList>
                    <Button>
                        <StyledLink href="contact">Contacts</StyledLink>
                    </Button>
                </StyledList>
            </RightContainer>
        </div>
    </Main>
   
  );
}
export default Nav;