import styled from 'styled-components';

const Title = styled.h2`
    text-align: center;
    color: lightblue; 
`;

const Line = styled.hr`
    border: 1px solid lightblue;
    margin-left: 80px; 
    margin-top: 5px; 
    width: 80%; 
`;

const Dates = styled.p`
    color: lightblue;
    text-align: left;

`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-left: 50px;
    }
`; 

const SubTitle = styled.h3`
    color: lightblue;
    text-align: left; 

    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;
const Description = styled.p`
    color: lightblue;
    line-height: 1.5;
    margin-top: 0;
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
    
    
    @media (max-width: 1000px) {
        margin-left: 50px; 
    }

`;

const Wrapper2 = styled.div`
    transition: background-color 0.3s;
    border-radius: 10px;
    padding:10px; 
    margin-left: 50px;


    &:hover {
        background-color: #deecf4; 
    }
`;

const Position = styled.p`
    color: lightblue;
    text-align: left;
    font-style: italic; 

    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;


function Main() {
  return (
    <Wrapper>
        <Title>Experience</Title>
            <Line/>
                <Wrapper2>
                    <SubTitle>Intern @ Ernest & Young</SubTitle>  
                    <Dates>May 2023 - July 2023</Dates>
                    <Position>Researched ESG reports</Position>
                        <Description>ESG Benchmarking: Engaged in a 6-week research project regarding ESG benchmarking through analysis of sustainability reports, 10-K with a team of 4 people, and shareholder summary reports.</Description> 
                        <Description>Professionally presented to 30 EY representatives and CLAOC professionals during CEE Student Success Summit.</Description>
                </Wrapper2>
    </Wrapper>

   
  );
}

export default Main;