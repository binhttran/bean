import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import CustomCursor from './cursor';

const Image = styled.img`
    display: flex;
    width: 50%;
    height: auto;
    border-radius: 25px;
    margin-top: 70px; 
    item-align: center;
    left: 20%;
    top: -10%;
    z-index: 0; 
    border: 3px solid lightblue;
    filter: brightness(0.8) contrast(1.0);
    position: absolute;

    @media (max-width: 1000px) {
        width: 70%;
        margin-left: 45%;
        margin-top: -10px;
    }

`;



const Bunny = styled.img`
    display: flex;
    width: 25%;
    height: auto;
    position: absolute;
    z-index:2;
    transform: rotate(-10deg);
    left: 10%;
    top: -10%;

    @media (max-width: 1000px) {
        width: 25%;
        margin-left: 45%;
        margin-top: -40px;
    }


    `;

const Container = styled.div`
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
    background-color: #b8d2e3;
    border-radius: 25px;
    position: relative;
`;

const Title = styled.h1`
    color: #ebebe8;
    font-weight: bold;
    font-size: 80px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        font-size: 60px;
     
    }

`;

const Pics = styled.div`
    display: flex;
    position: relative;
    width: 50%;
`;

const Sparkle = styled.img`
    display: flex;
    width: 7%;
    position: absolute;
    left: 15%;
    top: 15%;
    z-index: 2;

    @media (max-width: 1000px) {
        width: 10%;
        margin-left: 45%;
        margin-top: 19px;
        z-index: 2;
    }
`;




const Cloud   = styled.img`
    display: flex;
    width: 15%;
    position: absolute;
    left: 13%;
    top: 450%;
    transform: rotate(-10deg);

    @media (max-width: 1000px) {
        visibility: hidden;
    }

`;

const Introduction = styled.div`
    display: flex;
    width: 36%;
    text-align: center;
    flex-direction: column;
    margin-top: 25px;
    text-align: left;
    color: #325266;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1000px) {
        width: 84%;
        margin-left: 8%;
        text-align: center;
        margin-top: 320px;
        font-size: 15px;
    } 

`;

const Main = styled.div`
    display: flex;
    flex-direction: row;
    height: 70%;

    @media (max-width: 1000px) {
        flex-direction: column;
        height: 100%;
    }

`;

const Heading = styled.div`
    display: flex;
    height: 30%;
`;

function Intro() {
    return (
        <Container id = 'about'>
            <CustomCursor />
            <Heading>
                <Title>ABOUT ME</Title>
            </Heading>
            <Main>
            <Pics>
                <Bunny src="/pics/bunny.png"/>
                <Image src="/pics/pic1.png"/>
                <Sparkle src="/pics/sparkle.png"/>
                <Cloud src="/pics/heart.png"/>

            </Pics>

            <Introduction>
            <h5>
                hey I am Binh! I am a junior studying at Boston University, 
                pursuing computer science and data science.
            </h5>
            <h5> I am interested in data science, 
                specifically in biomedical and healthcare technology. I really like the aspect of 
                working with data to benefit the health of the community. For my aspiration, I hope to assist 
                with the development of medical devices and solving problems in healthcare with data analysis. 
                I will be taking a class on biomedical technology, which I am super excited about :)
            </h5>
            <h5>When I have free time, on a nice day, I enjoy activities like tennis, pickleball, kayaking, or hiking!
                 Otherwise, I take pride in painting,
                baking, and exploring new music. Feel free to talk to me about any of these!</h5>
            </Introduction>
            </Main>
        </Container>
    
    )

}

export default Intro;