import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

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
    background-color: #ebebe8;
`;

const Text = styled.h1`
    color: black;
    font-size: 50px;
    text-align: center;
    margin-top: 50%;
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 20%;
`;

const Nav = styled.h3`
    color: black;
    margin-right: 10px; 
    text-align: left;
    padding-left: 20px;
    font-size: 20px;
   
`;

const MyName = styled.h2`
    color: black;
    text-align: right;
    font-size: 30px;
    margin-top: 10px

`;

const NavBar= styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 700px;   
`;

const StyledLink = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;
    position: relative; 
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0); 
        height: 4px;
        bottom: 0; 
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right; 
        transition: transform 0.40s ease-out; 
    }

    &:hover::after {
        transform: scaleX(1); 
        transform-origin: bottom left;
    }
`;

const TypedDiv = styled.div`
    color: black;
    overflow:hidden;
    white-space: nowrap;
    position: relative;

    ${({textLength}) =>
    textLength &&
    `
    animation: typing 10s steps(${textLength}, end), forwards;
    `}

    @keyframes typing {
        from {
            width: 0;
        } to {
            width: 100%;
        }
        }
    }
}
    
`; 

const BottomPart = styled.div`
    display: flex;
    flex-direction: column; 
    height: 80%;
`; 

const Position = styled.h2`
    color: grey;
    font-size: 30px;
    opacity: 0.6;
    margin-top: 0px; 
`;
const Cursor = styled.span`
    border-right: 2px solid grey;
    animation: blink 0.80s steps(1) infinite;

    @keyframes blink {
        0%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`; 

const TypingContainer = ({text}) => {
    const[typedText, setTypedText] = useState('');
    const[isDeleting, setDeleteText]= useState(false);
    const[isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        let typingTimeout;

        const handleTyping = ()=>{
            if(isPaused){

                typingTimeout = setTimeout(() => 
                {
                    setDeleteText(!isDeleting);
                    setIsPaused(false);
                }, 1000);
            
            }else if(!isDeleting && typedText.length < text.length){
                typingTimeout = setTimeout(() => {
                    setTypedText((prev) => prev + text[prev.length]);
                }, 200)
            
            }else if(isDeleting && typedText.length > 0){
                typingTimeout = setTimeout (()=>
                {
                    setTypedText((prev) => prev.slice(0,-1));
                    }, 100);
            } else{
                setIsPaused(true);
            }
        };
                    
            
        handleTyping();

        return () => clearTimeout(typingTimeout);

     },[text, typedText, isDeleting, isPaused]);

     return(
        <TypedDiv textLength={text.length}>
            <Position>{typedText}<Cursor/></Position>
            
        </TypedDiv>
     );

};


function Name(){
    return(
        <Page>
            <TopBar>
                <MyName>
                    BINH TRAN
                </MyName>
                <NavBar>
                    <Nav>
                        <StyledLink href="#about">ABOUT</StyledLink>
                    </Nav>
                    <Nav>
                        <StyledLink href="#projects">PROJECTS</StyledLink>
                    </Nav>
                    <Nav>
                        <StyledLink href="#skills">SKILLS</StyledLink>
                    </Nav>
                    <Nav><StyledLink href="#contact">CONTACT</StyledLink></Nav>
                </NavBar>
            </TopBar>
            <BottomPart>
                <Text>Hi there, I'm <i>Binh</i>!</Text>
                <TypingContainer text="Data Engineer"/>
            </BottomPart>
          
            
        </Page>

    )

}

export default Name;