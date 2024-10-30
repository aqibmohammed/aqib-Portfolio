import React from 'react';
import  { skills} from "../../data/constants";
 import styled from 'styled-components';

 const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
 `;

 
 const Wrapper=styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
 `;
 
 const Title =styled.div`
 font-size: 42px;
 font-weight: 600;
 text-align: center;
 margin-top: 12px;
 color: ${({theme})=> theme.bg};
 @media (max-width: 768px){
  margin-top: 12px;
  font-size: 32px;
 }
 `;
 const Desc =styled.div`
 font-size: 18px;
 max-width: 600px;
 text-align: center;
 color: ${({theme})=> theme.card_light};
 @media (max-width: 768px){
  font-size: 16px;
 } 
 
 `;
 const SkillContainer =styled.div`
 width : 100%;
 display: flex;
 flex-wrap: wrap;
 margin-top: 30px;
 padding: 0px 0px 40px 0px;
 justify-content: center;
 gap: 30px;
 `;
 const Skill =styled.div`
 width: 100%;
max-width: 500px;
 background:${({theme}) => theme.card_light};
 border: 0.1px solid ${({theme})=> theme.secondary};
 border-radius: 16px;
 padding: 18px 36px;
 @media(max-width: 500px){
  max-width: 330px;
  padding : 20px 36px;


 }
 
 `;
 const SkillTitle =styled.div`
 font-size: 24px;
 font-weight: 600;
 color: ${({theme})=> theme.text_primary+80};
 margin-bottom: 20px;
 text-align: center;

 
 
 
 `;
 const SkillList =styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
 
 `;

 const SkillItem =styled.div`
 diplay: flex;
 align-items: center ;
gap: 8px;
justify-content: center;
font-size: 14px;
 color: #add0ef;
 border-radius: 12px;
 border: 1px solid #add0ef;
 padding: 12px 16px;
 font-weight: 400;
 
@media (max-width: 768px){
  font-size: 14px;
  padding: 8px 12px;
}

@media (max-width: 500px){
  font-size: 12px;
  padding: 6px 8px;
}
 `;



 const SkilImage=styled.img`
width: 24px;
height: 24px;
margin-right: 5px;
`;


const Skills = () => {
  return (
    <Container id="skills">
<Wrapper>
<Title>
      Skills
</Title>
<Desc>
  I am a self taught developer who has been working on web development for the past few years. <br />I have worked with many different technologies and frameworks.
  I have a really good experience.<br /> I am comfortable working in teams with strong communication skills, and can work independently as well
  and my skills are:
</Desc>
<SkillContainer>
  {skills.map((item)=>(
   <Skill>
    <SkillTitle>{item.title}</SkillTitle>
    <SkillList>
      {item.skills.map((skill)=> (
        <SkillItem>
          <SkilImage src={skill.image}/>
          {skill.name}
        </SkillItem>
      ))}
    </SkillList>
   </Skill> 

  ))}
</SkillContainer>
</Wrapper>
    </Container>
  )
};

export default Skills;
