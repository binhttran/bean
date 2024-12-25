import styled from 'styled-components';

const Page = styled.div`
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
    background-color: #ebebe8;
`;

const Text = styled.h1`
    color: black;
    font-size: 50px;
    margin: auto;
    text-align: center;
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
`;

const Nav = styled.h3`
    color: black;
    margin-right: 10px; 
    text-align: left;
    padding-left: 20px;
    font-size: 20px;
   
`;

const MyName = styled.h2`
    color: black;
    text-align: right;
    font-size: 30px;
    margin-top: 10px

`;

const NavBar= styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 700px;   
`;

const StyledLink = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;
    position: relative; 
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0); 
        height: 4px;
        bottom: 0; 
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right; 
        transition: transform 0.40s ease-out; 
    }

    &:hover::after {
        transform: scaleX(1); 
        transform-origin: bottom left;
    }
`;

function Name(){
    return(
        <Page>
            <TopBar>
                <MyName>
                    BINH TRAN</MyName>
                <NavBar>
                    <Nav>
                        <StyledLink href="#about">ABOUT</StyledLink>
                    </Nav>
                    <Nav>
                        <StyledLink href="#experience">EXPERIENCE</StyledLink>
                    </Nav>
                    <Nav>
                        <StyledLink href="#skills">SKILLS</StyledLink>
                    </Nav>
                    <Nav><StyledLink href="#contact">CONTACT</StyledLink></Nav>
                </NavBar>
            </TopBar>
            <Text>Hi there, I'm <i>Binh</i>!</Text>
        </Page>

    )

}

export default Name;