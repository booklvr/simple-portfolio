import styled, { css } from 'styled-components/macro'
import React, { useState } from 'react'

import logoBlack from '../../assets/logo-black.svg'
import { FaEnvelope, FaUser } from 'react-icons/fa'

const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
  margin-top: 5rem;
  margin-bottom: 3rem;

  /* @media only Screen and (max-width: 42em) {
    margin-top: 4rem;
  } */
`

const ContentContainer = styled.form`
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
  width: 8rem;
  height: 8rem;
  margin-top: -3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 50%;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  @media only Screen and (max-width: 42em) {
    margin: -3.5rem auto 0;
    width: 6rem;
    height: 6rem;
  }
`

const ContactLogo = styled.img`
  height: 4rem;
  width: 4rem;

  @media only Screen and (max-width: 42em) {
  }
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

const FormContainer = styled.form`
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
`

const UserLogo = styled(FaUser)`
  ${LogoStyle}
`

const EnvelopeLogo = styled(FaEnvelope)`
  ${LogoStyle}
  top: 3.25rem;
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

  &:focus ~ label {
    position: absolute;
    top: -1.1rem;
    left: 0.75rem;
    color: var(--fontLight);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem 3rem 1rem;
  margin-top: 2rem;
  font-size: 18px;
  color: var(--fontMedium);
  background: var(--background);
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 5px #adadad, inset -5px -5px 10px #ffffff;
  resize: none;

  &:focus ~ label {
    position: absolute;
    top: 0.9rem;
    left: 0.75rem;
    color: var(--fontLight);
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
    `};
`

const MessageLabel = styled.label`
  ${Label};
  top: 3.1rem;
  ${(props) =>
    props.message &&
    css`
      position: absolute;
      top: 0.9rem;
      left: 0.75rem;
      color: var(--fontLight);
    `};
`

const SubmitButton = styled.button`
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

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <ContactSectionContainer id='contact'>
      <ContentContainer>
        <ContactLogoContainer>
          <ContactLogo src={logoBlack} />
        </ContactLogoContainer>
        <ContactHeader>Contact</ContactHeader>
        <FormContainer>
          <Field>
            <UserLogo />
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <EmailLabel email={email}>email</EmailLabel>
          </Field>
          <Field>
            <EnvelopeLogo />
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></TextArea>
            <MessageLabel message={message}>message</MessageLabel>
          </Field>
          <SubmitButton>Send</SubmitButton>
        </FormContainer>
      </ContentContainer>
    </ContactSectionContainer>
  )
}

export default ContactSection
