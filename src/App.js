import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.jsx';
import style from 'styled-components';
import Main from './components/main.jsx';
import Intro from "./components/intro"

const Heading = style.div`
    display: flex;
    background-color:#B8D2E3;
    height: 20%;
    border-radius: 25px;
    margin-top: 10px; 
    margin-left: 10px; 
    margin-right: 10px;
    padding: 8px 16px;

    &:hover {
      height: 30%;
      border-radius: 25px;
      padding: 10px 20px;
      transition: background-color 0.3s ease, height 0.3s ease, border-radius 0.3s ease, padding 0.3s ease;
    }
   
`;
const Body = style.div`
    display: flex;
    height: 100vh;
    background: white;
    flex-direction: row;
`;
const LeftSide = style.div`
    display: flex;
    width: 50%;
    left: 0;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    margin-left: 50px;
  `;

const Container = style.div`
    display: flex;
    flex-direction: column;
`
const RightSide = style.div`
    display: flex;
    width: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    min-height: 100vh;
`;
function App() {
  return (
    <Container>
        <Heading>
          <Nav />
        </Heading>
        <Body>
          <LeftSide>
              <Intro/>
          </LeftSide>
          <RightSide>
              <Main/>
          </RightSide>
        </Body>
    </Container>
  

  );
}

export default App;
