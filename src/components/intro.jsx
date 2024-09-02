import styled from 'styled-components';

const Image = styled.img`
    display: flex;
    width: 15%;
    height: auto;
    border-radius: 25px;
    margin-top: 70px; 
    item-align: center;
    transform: rotate(-10deg);
    left: 5%;
    top: 5;
    z-index: 0; 
    border: 3px solid lightblue;
    filter: brightness(0.8) contrast(1.0);

`;

const Image2 = styled.img`
    display: flex;
    width: 23%;
    height: auto;
    margin-top: 100px;
    border-radius: 25px;
    top: 15%;
    right:20%;
    position: absolute;
	transform: rotate(13deg);
	z-index: 0;
    border: 3px solid lightblue;
    filter: brightness(0.9) contrast(1.2);

`;

const Image3 = styled.img`
    display: flex;
    border-radius: 25px;
    left: 21%;
    top: 27%;
    position: absolute;
    width: 23%;
    height:auto;
    transform: rotate(5deg);
    border: 3px solid lightblue;
    filter: brightness(0.8) contrast(1.1);

    
`;

const Bunny = styled.img`
    display: flex;
    width: 10%;
    height: auto;
    position: absolute;
    z-index:2;
    transform: rotate(10deg);
    right: 40%;


    `;

const Container = styled.div`
    dislay: flex;
    flex-direction: column;
`;

const Name = styled.h1`
    color: lightblue;
    font-weight: bold;
    text-align: center;
    padding-top: 50px;
    margin-bottom: -10px;
`;

const Pics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    
`;

const Sparkle = styled.img`
    display: flex;
    width: 7%;
    position: absolute;
    right: 15%;
    top: 43%;

`;

const Cloud   = styled.img`
    display: flex;
    width: 10%;
    position: absolute;
    left: 18%;
    top: 5%;
    transform: rotate(-10deg);
`;

function Intro() {
    return (
        <Container>
            <Pics>
                <Bunny src="/pics/bunny.png"/>
                <Image3 src= "/pics/pic4.png"/>
                <Image src="/pics/pic1.png"/>
                <Image2 src="/pics/pic3.png"/>
                <Sparkle src="/pics/sparkle.png"/>
                <Cloud src="/pics/heart.png"/>

            </Pics>
            
            <Name>Binh Tran </Name>
        </Container>
    
    )

}

export default Intro;