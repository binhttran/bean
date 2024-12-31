import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

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
    background-color: #2A2D41;
 

`; 

const Title = styled.h1`
    color: #ebebe8;
    font-weight: bold;
    font-size: 100px;
    marhin-top: -10%;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 80px;
        margin: auto;
     
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -3%;
    margin-left: 10%;
    width: 80vw;

    @media (max-width: 1000px) {
        width: 100vw;
`;

const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: -20%;
    width: 30%;

    @media (max-width: 1000px) {
        padding-left: 0;
        margin-top: -1%;
        font-size: 12px;
    }

    
`;

const Heading = styled.h3`
    color: #ebebe8;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 28px;
        margin-top: -80%;


`;

const Detail = styled.h3`
    color: white;
    margin-top: 1%;
    font-family: 'Poppins', sans-serif;
    

`;

const StyledLink = styled.a`
    color: #ebebe8;
    text-decoration: none;
    font-weight: bold;
    position: relative; 
    display: inline-block;
    margin-left: 10px;
    padding-bottom: 5px;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0); 
        height: 4px;
        bottom: 0; 
        left: 0;
        background-color: #fba310;
        transform-origin: bottom right; 
        transition: transform 0.40s ease-out; 
    }

    &:hover::after {
        transform: scaleX(1); 
        transform-origin: bottom left;
    }

    
`;




const ClockContainer = styled.div`

  font-size: 24px;

  text-align: center;

  color: #fff;

  @media (max-width: 1000px) {
        font-size: 16px;
    }

`;



const Clock = () => {
    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(
          new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })
        );
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return <ClockContainer>{currentTime}</ClockContainer>;
  };

const Footer = styled.div`
    display: flex;
    background-color: #2A2D41;
    height: 60px;
    margin-top: auto; 
    width: 100vw;
    
`;

const FooterText = styled.h3`
    color: #ebebe8;
    font-size: 20px; 
    margin-left: 20%;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 15px;
        margin-left: 10%;
    }


`;

const FooterLink = styled.a`
    color: #ebebe8;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    padding-left: 50%;
    padding-top: 20px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

`;

const Img = styled.img`
    width: 5%;
    height: auto;

    @media (max-width: 1000px) {
        width: 8%;

`; 
function Contacts () {

    return (
        <Page id = "contact">
            <Title>CONTACT</Title>
            <Wrapper>
                <Subtitle>
                    <Heading>Contact Detail</Heading>
                    <Detail><Img src="./pics/mail.png"/><StyledLink href="tranb@bu.edu">tranb@bu.edu</StyledLink></Detail> 
                </Subtitle>
                <Subtitle>
                    <Heading>Socials</Heading>
                    <Detail><Img src="./pics/linkedin.png"/><StyledLink href="https://www.linkedin.com/in/binhtran0808/">LinkedIn</StyledLink></Detail>
                    <Detail><Img src="./pics/github2.png"/><StyledLink href="https://github.com/binhttran">Github</StyledLink></Detail>
                </Subtitle>
                <Subtitle>
                    <Heading>Local Time</Heading>
                    <Detail><Clock/></Detail>
                    <Detail>Boston, MA</Detail>
                </Subtitle>
            </Wrapper>
            <Footer>
                    <FooterText>© 2024 Binh. T</FooterText>
                    <FooterLink href="#top">BACK TO THE TOP</FooterLink>
            </Footer>
        </Page>
    )
}

export default Contacts;