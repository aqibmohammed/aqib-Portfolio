import React from 'react'
import {Link as LinkR} from "react-router-dom";
import { FaBars} from 'react-icons/fa';
import styled, { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';

const Nav=styled.div`
background-color: ${({theme})=> theme.card_light};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size:1rem ;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px){
  transition: 0.8s all ease;
}
`;

const NavbarContainer= styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`; 

const NavLogo=styled(LinkR)`
  display: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
@media screen and (max-width: 640px){
  padding: 0 0px;
}
`;
const MobileIcon=styled.div`
display: none;
@media screen and (max-width: 768px){
  display: block;
  position : absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme})=> theme.text_primary}
}
`;
const NavItem=styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
const NavLink=styled.a`
color: ${({theme})=>theme.text_primary};
font-family: 'Montserrat', sans-serif;
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2 ease-in-out;
&:hover{
  color:#dc4bb5;
}
`;



const ButtonContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px){
    display:none;
  }
`;
const GithubButton=styled.a`
display: inline-flex;
    background-color: transparent;
text-decoration: none;

    color:${({theme})=> theme.primary};
    border: 1.8px solid ${({theme})=> theme.primary};
    border-radius: 100px;
    justify-content: center;
    align-items:center ;
    padding: 10px 20px ;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    height: 60%;
    &:hover{
      background-color: ${({theme})=> theme.primary};
      color:${({theme})=> theme.white};

    }
    
    &:after{
      background-color: #12486B;
    }
  @media screen and (max-width: 640px){
  font-size: 0.8rem;
  width: 50%;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
const Span1 = styled.div`
    color: ${({theme})=> theme.primary};
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;
position: absolute;
top: 50px;
right:0;
width: 100%;
padding: 12px 40px 24px 40px;
background:${({theme})=> theme.card_light+50};
transition: all 0.3 ease-in-out;
transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
border-radius: 0 0 20 20px;
box-shadow: 0 5px 10px rgba(0,0,0,0.3);
opacity: ${({open})=> open ?'1' : '0' };
z-index: ${({open})=> open ?'1' : '-1' }

`;

const MobileMenuLinks=styled.a`
color: ${({theme})=> theme.text_primary };
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.25 ease-in-out;
&:hover{
  color: #dc4bb5;
}


`;


const Navbar = () => {
  const [open,SetOpen]=React.useState(false);
  const theme=useTheme();
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
             <Span1>عقيب </Span1>/<Span>Aqib</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          
            <FaBars 
            onClick={()=>{
              SetOpen(!open);
            }}/>
        </MobileIcon>
        <NavItem>
          <br />

          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          {/* <NavLink href='#experience'>Experience</NavLink> */}
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
        </NavItem>
       
        {
        open && (
            <MobileMenu open={open}>
                <MobileMenuLinks href="#about" onClick={() => {
              SetOpen(!open)
            }}>About</MobileMenuLinks>
            <MobileMenuLinks href='#skills' onClick={() => {
              SetOpen(!open)
            }}>Skills</MobileMenuLinks>
            {/* <MobileMenuLinks href='#experience' onClick={() => {
              SetOpen(!open)
            }}>Experience</MobileMenuLinks> */}
            <MobileMenuLinks href='#projects' onClick={() => {
              SetOpen(!open)
            }}>Projects</MobileMenuLinks>
            <MobileMenuLinks href='#education' onClick={() => {
              SetOpen(!open)
            }}>Education</MobileMenuLinks>
          <GithubButton style={{
            padding: '10px 16px',
            background: `${theme.primary}`,
             color: 'white',
             width: 'max-content'
             }} href={Bio.github} target="_blank">Github Profile</GithubButton>
            </MobileMenu>
          )
      }
      </NavbarContainer>
     
    </Nav>
  );
};

export default Navbar;
