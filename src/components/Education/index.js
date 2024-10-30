import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import Educationcard from "../cards/Educationcard"


const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 0px 10px 100px 0px;
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

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
color: ${({theme})=> theme.card_light};
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

const TimeLineSection=styled.div`
width : 100px;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;

`;


const Education = () => {
  return (
<Container id='education'>
        <Wrapper>
            <Title>
                Education
            </Title>
                <Desc>

                </Desc>
                <TimeLineSection>
                  <Timeline>
                    {education.map((education,index)=>(
                      <TimelineItem >
                      
                        <TimelineContent>
                          <Educationcard education={education}/>
                        </TimelineContent>
                        <TimelineSeparator>
                          <TimelineDot/>{
                            index!== education.length-1 && <TimelineConnector/>}
                        </TimelineSeparator>
                      </TimelineItem>
                    ))}
                    </Timeline>
                </TimeLineSection>
        </Wrapper>
    </Container>
  )
};

export default Education;
