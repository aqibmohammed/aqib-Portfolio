import React from 'react'
import styled from "styled-components";
import {Bio} from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Aqib_Photo.jpeg"


const HeroContainer=styled.div`
background-color: ${({theme})=> theme.card_light};//card_light
display: flex;
justify-content: center;
position: relative;
padding: 80px 30px;
@media screen and(max-width: 960px){
  padding: 66px 16px;
}
@media screen and(max-width: 640px){
  padding: 32px 16px;
}
z-index: 1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const Herobg=styled.div`
position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer=styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer=styled.div`
width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

const HeroRightContainer=styled.div`
width: 100%;
/* background-color: aliceblue; */
order:2;
display: flex;
justify-content: end;
gap: 12px;
@media  (max-width: 960px){
  order: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
 
}
@media screen and (max-width: 640px){
  margin-bottom: 30px;

  
}
`;

const Title=styled.div`
font-size: 50px;
font-weight: 700;
color: ${({theme})=> theme.light_gray};
line-height: 68px;

@media screen and (max-width: 960px){
  text-align: center;
}

@media screen and (max-width: 640px) {
font-size: 40px;
line-height: 48px;
margin-bottom: 16px;
}
`;

const Span=styled.div`
color: ${({theme})=> theme.primary};
cursor: pointer;
`;
const SubTitle=styled.div`
font-size: 20px;
color: ${({theme})=> theme.text_primary+95};
line-height: 32px;
margin-bottom: 42px;

@media screen and (max-width: 960px){
  text-align: center;
}

@media screen and (max-width: 640px){
font-size: 16px;
line-height: 32px;

}
`;

const ResumeButton=styled.a`
-webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 80%;
    max-width: 200px;
    text-align: center;
    padding: 16px 0;

    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    
    transition: all 0.2s ease-in-out !important;
    background-color: #b1ade2;
    background-image: linear-gradient(315deg, #b1ade2 0%, #7ddff8 74%);

    // background: hsla(271, 100%, 50%, 1);
    // background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #12486B,
    -20px -20px 60px #12486B;
    &:hover {
        transform: scale(1.05);
    transition: all 1s ease-in-out;
    box-shadow:  0px 20px 20px #12486B;
    filter: brightness(1);
    color:${({ theme }) => theme.card_light};

    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 16px;
        width:60%;
    } 
`;

const TextLoop=styled.div`
font-size: 32px;
font-weight: 600px;
color: ${({theme})=> theme.text_secondary};
gap: 12px;
display: flex;

@media screen and (max-width: 960px){
text-align: center;


}
@media screen and (max-width: 640px) {
font-size: 24px;
line-height: 48px;
margin-bottom: 16px;

}

`;


const Image=styled.img`
width : 100%;
position: relative;
border-radius: 50%;
max-width: 300px;
max-height: 300px;
object-fit: cover;
object-position: center;
border: 2px solid ${({theme})=> theme.primary};
&:hover {
  transform: scale(1.5);
transition: all 0.8s ease-in-out;
box-shadow:  0px 20px 20px #12486B,

}    

@media screen and (max-width: 960px){
  max-width: 200px;
  max-height: 200px;
  &:hover {
    transform: scale(1.2);
}
}

@media  (max-width: 640px){
  max-width: 200px;
  max-height: 200px;
  &:hover {
    transform: scale(1.2);
  }
}
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        
        <Herobg>
    
        </Herobg>
        <HeroInnerContainer>
          
          <HeroRightContainer>
          <Image src={HeroImg} alt="Aqib"/>
          </HeroRightContainer>
          <HeroLeftContainer>
            <Title>Hello, I <br/>
            {Bio.name}
            </Title>
            <TextLoop>
              I'm a
              <Span>
                <Typewriter
                options={{strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
                />
              </Span>
            </TextLoop>
            <SubTitle>
              {Bio.description}
            </SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              My Resume!
              </ResumeButton>
          </HeroLeftContainer>
        </HeroInnerContainer>
        </HeroContainer> 
      
    </div>
  )
};

export default Hero;
