import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.jsx';
import Name from './components/name.jsx';
import style from 'styled-components';
import Projects from './components/projects.jsx';
import Intro from "./components/intro"
import Skills from "./components/skills"

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
    flex-direction: column;
    margin: 0;
    height: 100vh;
   `;


const Container = style.div`
    display: flex;
    flex-direction: column;

`;
function App() {
  return (
    <Container>
        {/* <Heading>
          <Nav />
        </Heading> */}
        <Body>
              <Name/>
              <Intro/>
              <Projects/>
              <Skills/>
        </Body>
    </Container>
  

  );
}

export default App;
