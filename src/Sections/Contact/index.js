import styled, { css } from 'styled-components/macro'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import logoBlack from '../../assets/logo-black.svg'
import { FaEnvelope, FaUser, FaAt } from 'react-icons/fa'
import ContactLinks from '../../components/ContactLinks'
import ScrollToTop from '../../components/ScrollToTop'

const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: calc(100vh - 80px); */
  color: white;
  margin-top: 6rem;
  margin-bottom: 5rem;

  @media only Screen and (max-width: 42em) {
    margin-top: 4rem;
  }
`

const ContentContainer = styled.div`
  background-color: var(--background);
  position: relative;
  width: 30rem;
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  padding: 1rem 2rem;

  @media only Screen and (max-width: 42em) {
    width: 100%;
    padding: 0;
  }
`

const ContactLogoContainer = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  margin-top: -3.5rem;
  display: flex;
  justify-content: center;
  background-color: var(--background);
  align-items: center;
  /* padding: 2rem; */
  border-radius: 50%;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  @media only Screen and (max-width: 42em) {
    margin: -3.5rem auto 0;
    width: 6rem;
    height: 6rem;
  }
`

const ContactLogo = styled.img`
  height: 4.5rem;
  width: 4.5rem;
`

const ContactHeader = styled.h2`
  position: absolute;
  top: 2rem;
  right: 4rem;
  height: 3rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: var(--black);

  @media only Screen and (max-width: 42em) {
    font-size: 2.5rem;
    margin: 1rem 0;

    right: 50%;
    transform: translateX(50%);
  }
`

const Form = styled.form`
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only Screen and (max-width: 42em) {
    margin-top: 4rem;
  }
`

const Field = styled.div`
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  position: relative;
`

const LogoStyle = css`
  position: absolute;
  width: 50px;
  line-height: 50px;
  color: var(--primary);
  top: 1rem;
`

const UserLogo = styled(FaUser)`
  ${LogoStyle}
`

const AtLogo = styled(FaAt)`
  ${LogoStyle};
`

const EnvelopeLogo = styled(FaEnvelope)`
  ${LogoStyle};
  top: 1.1rem;
`

const Input = styled.input`
  height: 3rem;
  width: 100%;
  padding-left: 3rem;
  font-size: 18px;
  outline: none;
  border: none;
  color: var(--fontMedium);
  background: var(--background);
  border-radius: 10px;
  box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  -webkit-box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  -mox-box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  -webkit-appearance: none;
  margin-bottom: 2rem;

  &:focus ~ label {
    position: absolute;
    top: -1.1rem;
    left: 0.75rem;
    color: var(--fontLight);
  }

  @media only Screen and (max-width: 48em) {
    margin-bottom: 1rem;

    &:focus ~ label {
      font-size: 0.75rem;
      top: -0.8rem;
    }
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem 3rem 1rem;
  font-size: 18px;
  color: var(--fontMedium);
  background: var(--background);
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  -webkit-box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  -mox-box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  -webkit-appearance: none;
  resize: none;

  &:focus ~ label {
    position: absolute;
    top: -1.1rem;
    left: 0.75rem;
    color: var(--fontLight);

    @media only Screen and (max-width: 48em) {
      font-size: 0.75rem;
      top: -0.8rem;
    }
  }
`

const Label = css`
  position: absolute;
  left: 3rem;
  pointer-events: none;
  color: var(--fontMedium);
  transition: all 0.2s ease-in;
`

const EmailLabel = styled.label`
  ${Label};
  top: 1rem;
  ${(props) =>
    props.email &&
    css`
      position: absolute;
      top: -1.1rem;
      left: 0.75rem;
      color: var(--fontLight);

      @media only Screen and (max-width: 48em) {
        font-size: 0.75rem;
        top: -0.8rem;
      }
    `};
`

const NameLabel = styled.label`
  ${Label};
  top: 1rem;
  ${(props) =>
    props.name &&
    css`
      position: absolute;
      top: -1.1rem;
      left: 0.75rem;
      color: var(--fontLight);

      @media only Screen and (max-width: 48em) {
        font-size: 0.75rem;
        top: -0.8rem;
      }
    `};
`

const MessageLabel = styled.label`
  ${Label};
  top: 1rem;
  ${(props) =>
    props.message &&
    css`
      position: absolute;
      top: -1.1rem;
      left: 0.75rem;
      color: var(--fontLight);

      @media only Screen and (max-width: 48em) {
        font-size: 0.75rem;
        top: -0.8rem;
      }
    `};
`

const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: var(--background);
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 6px 6px 15px var(--fontMedium), -6px -6px 15px #ffffff;
    transform: translate(-2px, -1px);
  }

  &:active {
    box-shadow: 2px 2px 5px #adadad, -2px -2px 5px #ffffff;
    transform: translate(1px, 2px);
  }
`

const FormSubmitMessage = styled.p`
  ${Label}
  top: -1.3rem;
  left: 1rem;
  color: var(--fontLight);
  opacity: ${({ submitMessage }) => (submitMessage ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  /* position: absolute;
  color: var(--primary);
  height: 1rem;
  
  pointer-events: none;
  color: var(--fontMedium);
  transition: all 0.2s ease-in; */
  @media only Screen and (max-width: 48em) {
    font-size: 0.75rem;
    top: -0.8rem;
  }
  /* z-index: 100; */
`

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name !== '' && email !== '' && message !== '') {
      emailjs
        .sendForm(
          'gmail',
          'portfolio-template',
          e.target,
          'user_YHHPfi54ZsQh2hsYTZofX'
        )
        .then(
          (result) => {
            // console.log(result.text)
            setSubmitMessage('Message Sent Successfully')
            setName('')
            setEmail('')
            setMessage('')
            setTimeout(() => {
              setSubmitMessage('')
            }, 3000)
          },
          (error) => {
            // console.log(error.text)
            setSubmitMessage(
              'Apologies, there was an error sending the message.  Please try again.'
            )
            setTimeout(() => {
              setSubmitMessage('')
            }, 3000)
          }
        )
    } else {
      setSubmitMessage('Please fill out all form fields')
      setTimeout(() => {
        setSubmitMessage('')
      }, 3000)
    }
  }

  return (
    <ContactSectionContainer id='contact'>
      <ContentContainer>
        <ContactLogoContainer>
          <ContactLogo src={logoBlack} />
        </ContactLogoContainer>
        <ContactHeader>Contact</ContactHeader>
        <Form onSubmit={sendEmail}>
          <Field>
            <UserLogo />
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name='name'
            />
            <NameLabel name={name}>name</NameLabel>
          </Field>
          <Field>
            <AtLogo />
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
            />
            <EmailLabel email={email}>email</EmailLabel>
          </Field>
          <Field>
            <EnvelopeLogo />
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
            ></TextArea>
            <MessageLabel message={message}>message</MessageLabel>
          </Field>

          <SubmitButton type='submit' value='Send'>
            <FormSubmitMessage submitMessage={submitMessage}>
              {submitMessage}
            </FormSubmitMessage>
            Send
          </SubmitButton>
        </Form>
      </ContentContainer>
      <ScrollToTop />
    </ContactSectionContainer>
  )
}

export default ContactSection
