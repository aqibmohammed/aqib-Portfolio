import React from 'react';
import styled from "styled-components";


const Card =styled.div`
width: 330px;
height: 490px;
background-color:${({theme})=> theme.bg};
cursor: pointer;
border-radius:15px;
box-shadow: 0px 20px 0px rbga(0,0,0,0.5);
overflow: hidden;
transition: all 0.5s ease-in-out;
padding: 26px 20px;
display: flex;
flex-direction: column;
gap: 14px;
box-shadow: rgba(0,0,0,0.15) 0px 4px 24px 5px;

&:hover{
  transform: translateY(-10px);
  box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
  filter: brightness(1.1);
}

`;

const Image=styled.img`
  width: 100%;
  height: 180px;
  background-color:${({theme})=> theme.white};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;
const Tags=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-top: 4px;
align-items: center;

`;

const Details=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Members =styled.div`
display: flex;
align-items: center;
padding-left: 10px;


`;
const Tag=styled.span`
font-size: 12px;
font-weight: 400;
color:${({theme})=>theme.primary};
background-color:${({theme})=>theme.primary+15};
padding:2px 8px;
border-radius: 7px;
`;

const Title =styled.div`
font-size: 20px;
font-weight: 600;
color: ${({theme})=>theme.text_secondary};
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
max-width: 100%;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

`;

const Date=styled.div`
font-size: 12px;
font-weight:400;
margin-left: 2px;
color: ${({theme})=> theme.text_secondary+80};
@media (max-width: 768) {
  font-size: 10px;
}

`;
const Description=styled.div`
font-size: 10px;
font-weight:400;
color: ${({theme})=>theme.text_secondary+99};
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
display: -webkit-box;
margin-top: 0px;
max-width: 100%;

`;
const Avatar=styled.img`
width: 38px;
height: 38px;
border-radius: 50%;
margin-left: -10px;
background-color: ${({theme})=> theme.white};
box-shadow: 0 0  16px 2px rgba(0, 0, 0, 0.3);
border: 1px solid ${({theme})=> theme.bg};
`;

const ProjectCard = ({project,setOpenModal}) => {
  return (
    <Card onClick={() => setOpenModal({state: true, project: project})}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag)=>(<Tag key={tag}>#{tag}</Tag>))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
      </Details>
      <Description>{project.description}</Description>
      <Members>
        {project.member?.map((member)=>(
          <Avatar src={member.img}/>
        ))}
      </Members>
    </Card>
  )
}

export default ProjectCard
