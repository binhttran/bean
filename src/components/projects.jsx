import styled from 'styled-components';

const Title = styled.h2`
    color: white;
    font-weight: bold;
    font-size: 80px;
    margin-top: -35%;
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
    margin-top: -5px;

`;
const Wrapper = styled.div`
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
    background-color: #325266;
    position: relative;


`; 

const SubTitle = styled.h3`
    color: white;
    text-align: left; 

    &:hover {
        color: #61ACC4;
    }
    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;
const Description = styled.li`
    color: white;
    line-height: 1.5;
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
    line-height: 2;
    list-style-position: outside; 
    padding-left: 1.5em; 
    text-indent: -1.5em;

    
    @media (max-width: 1000px) {
        margin-left: 50px; 
    }

`;

const Wrapper2 = styled.div`
    display: flex;
    transition: background-color 0.3s;
    border-radius: 25px;
    margin-top: 10px; 
    margin-left: 10px; 
    margin-right: 10px;
    padding: 8px 16px;
    flex-direction: row;
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
    margin-top: -5px;


    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;

const Wrapper3 = styled.div`
    display: flex;
    width: 50%;
    margin-left: 50px;
    flex-direction: column

`;

const Wrapper4 = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 20px; 
    margin-top: 10px;
`;
function Experience() {
  return (
    <Wrapper id='projects'>
        <Title >PROJECTS</Title>
               
    </Wrapper>

   
  );
}

export default Experience;