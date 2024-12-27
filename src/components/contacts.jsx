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
    background-color: #2A2D41;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

`; 

const Title = styled.h1`
    color: #ebebe8;
    font-weight: bold;
    font-size: 80px;
    margin-top: 2%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 70%;
`;

const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const Heading = styled.h3`
    color: #ebebe8;
    font-size: 30px;
    margin-top: 10%;
`;

const Detail = styled.h5`
    color: #a1a1aa;
    margin-top: 5%;
`;
function Contacts () {

    return (
        <Page id = "contact">
            <Title>CONTACT</Title>
            <Wrapper>
                <Subtitle>
                    <Heading>Contact Detail</Heading>
                    <Detail>tranb@bu.edu</Detail> 
                </Subtitle>
                <Subtitle>
                    <Heading>Social Media</Heading>
                    <Detail>linkedin</Detail>
                    <Detail>github</Detail>
                </Subtitle>
                <Subtitle>
                    <Heading>Local Time</Heading>
                    <Detail>UTC-4</Detail>
                    <Detail>Boston, MA</Detail>
                </Subtitle>
            </Wrapper>
        </Page>
    )
}

export default Contacts;