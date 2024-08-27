import styled from 'styled-components';

const Image = styled.img`
    display: flex;
    width: 50%;
    height: auto;
    border-radius: 25px;
    margin-top: 20px; 
`;

const Container = styled.div`
    dislay: flex;
    flex-direction: column;
`;

const Name = styled.h1`
    color: lightblue;
    font-weight: bold;
`;

function Intro() {
    return (
        <Container>
            <Image src="/pics/cat.png"/>
            <Name>Binh Tran </Name>
        </Container>
    
    )

}

export default Intro;