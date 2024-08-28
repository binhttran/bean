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

`;

const Image2 = styled.img`
    display: flex;
    width: 23%;
    height: 30%;
    margin-top: 100px;
    border-radius: 25px;
    top: 20%;
    right:20%;
    position: absolute;
	transform: rotate(15deg);
	z-index: 0;
    border: 3px solid lightblue;
`;

const Image3 = styled.img`
    display: flex;
    border-radius: 25px;
    left: 21%;
    top: 27%;
    position: absolute;
    width: 23%;
    height:30%;
    transform: rotate(5deg);
    border: 3px solid lightblue;
    
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
    
`;

function Intro() {
    return (
        <Container>
            <Pics>
                <Image3 src= "/pics/pic4.png"/>
                <Image src="/pics/pic1.png"/>
                <Image2 src="/pics/pic3.png"/>
            </Pics>
            
            <Name>Binh Tran </Name>
        </Container>
    
    )

}

export default Intro;