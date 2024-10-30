import React, { useRef,useState} from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.card_light};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white +80};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
transition: all 0.3s ease-in-out;
  gap: 12px;
  &:hover{
    box-shadow: 0px 0px 20px rgba(255,255,255,0.4);

    transform: translateY(-5px);
}
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 12px 16px;
transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  &:hover{
    box-shadow: 0px 0px 20px rgba(255,255,255,0.4);
    transform: translateY(-5px);
}
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 12px 16px;
transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  &:hover{
    box-shadow: 0px 0px 20px rgba(255,255,255,0.4);
    transform: translateY(-5px);
}
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  background-color:${({theme})=>theme.bg}; 
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  
`;

const ValidationMessage = styled.p`
  color: white;
`;

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

    // Get the values from the input fields
    const email = form.current.user_email.value;
    const name = form.current.from_name.value;
    const message = form.current.message.value;

    // Check if any of the fields are empty
    if (!email || !name || !message) {
      setValidationMessage("Please fill in all the fields!");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm('service_jbiv3fo', 'template_iwaiugn', form.current, 'aXEZAeDLOqD91xBFj');
      // Handle success, e.g., display a success message
      alert("Message sent successfully, I'll reach you soon!")


      // Reset the form and button text
      form.current.reset();
      setLoading(false);
      setValidationMessage('');
    } catch (error) {
      console.log(error.text);
      // Handle error, e.g., display an error message
      alert("Something Went Wrong")

      setLoading(false);
    setValidationMessage('An unexpected error occurred while sending your message. Please try again later.')
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Let's Contribute for Awesome Experience!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput type="name"  placeholder="Your Name" name="from_name" />
          <ContactInput type="email" placeholder="Your Email" name="user_email" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value={loading ? "Sending..." : "Send"} />
          {validationMessage && <ValidationMessage>{validationMessage}</ValidationMessage>}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
