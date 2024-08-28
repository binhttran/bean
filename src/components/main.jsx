import styled from 'styled-components';

const Title = styled.h2`
    text-align: center;
    color: lightblue; 
`;

const Line = styled.hr`
    border: 1px solid lightblue;
    margin-left: 20px; 
    margin-top: 5px; 
    margin-right: 20px;
`;

const Dates = styled.p`
    color: white;
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
    color: white;
    text-align: left; 

    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;
const Description = styled.p`
    color: white;
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
    border-radius: 25px;
    margin-top: 10px; 
    margin-left: 10px; 
    margin-right: 10px;
    padding: 8px 16px;
    background-color: #B8D2E3; 

    &:hover {
        border: 7px solid;
        border-color: lightblue;

    }
`;

const Position = styled.p`
    color: white;
    text-align: left;
    font-style: italic; 

    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;


function Main() {
  return (
    <Wrapper>
        <Title id='experience'>Experience</Title>
            <Line/>
                <Wrapper2>
                    <SubTitle>Intern @ Ernest & Young</SubTitle>  
                    <Dates>May 2023 - July 2023</Dates>
                    <Position>Researched ESG reports</Position>
                        <Description>ESG Benchmarking: Engaged in a 6-week research project regarding ESG benchmarking through analysis of sustainability reports, 10-K with a team of 4 people, and shareholder summary reports.</Description> 
                        <Description>Professionally presented to 30 EY representatives and CLAOC professionals during CEE Student Success Summit.</Description>
                </Wrapper2>    
                <Wrapper2>
                    <SubTitle>Intern @ CodeSpeak Labs</SubTitle>  
                    <Dates>February 2022 - April 2022</Dates>
                    <Position>Digital Design</Position>
                    <Description>Conceptualized and crafted 20 distinctive variations of the logo for the esteemed Orange County Goes Solar initiative, employing advanced digital design techniques.</Description> 
                    <Description>Actively participated in and showcased expertise in HTML through engaging weekly classes, exemplifying a keen aptitude for design principles.</Description>
                </Wrapper2>
                <Wrapper2>
                    <SubTitle>Intern @ Ernest & Young</SubTitle>   
                    <Dates>June 2020 - August 2020</Dates>
                    <Position>Researched the Digital Divide</Position>
                    <Description>Performed and analyzed research on the inequality in access to technology that was affecting 13.5% of the population in Orange County, CA.</Description> 
                    <Description>Conducted more than 10 interviews with school superintendents inquiring about improvements to virtual learning during the COVID-19 pandemic.</Description>
                </Wrapper2>
                 
    </Wrapper>

   
  );
}

export default Main;