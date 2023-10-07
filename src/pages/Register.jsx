import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container=styled.div`
  width:100%;
  height:100vh;
   background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,url("https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-3965545.jpg&fm=jpg") center ;
   background-size:cover;
   background-repeat:no-repeat;
   
   display:flex;
   align-items:center;
   justify-content:center;
   ${mobile({height:'auto'})}
`
const Wrapper=styled.div`
width:40%;
display:flex;
flex-direction:column;
background-color:white;
padding:20px;
${mobile({width:'75%'})}
`

const Title=styled.h1`
font-size:24px;
font-weight:300;
`
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`
 const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
${mobile({margin:'10px 5px'})}
`
const Agreement=styled.div`
font-size:12px;
margin:20px 0px;
`
const Button=styled.button`
  width:40%;
  padding:15px 20px;
  background-color:teal;
  color:white;
  cursor:pointer;
  border:none;

`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
              CREATE AN ACCOUNT
            </Title>
            <Form>
            <Input placeholder="name"></Input>
            <Input placeholder="lastname"></Input>
            <Input placeholder="username"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Input placeholder="confirm password"></Input>
            <Agreement>
              By creating an account, I consent to the processing of my personal data
              in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <Button>CREATE</Button>
              </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
