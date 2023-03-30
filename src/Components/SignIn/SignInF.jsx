import React from "react";
import Video1 from "../../video/Video1.mp4";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  SignInBg,
  VideoBg,
} from "./SignInElements";

function SignInF() {
  return (
    <>
      <Container>
        <SignInBg>
          <VideoBg autoPlay loop muted src={Video1} type="video/mp4" />
        </SignInBg>
        <FormWrap>
          <Icon to="/">PurpleCoin</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignInF;
