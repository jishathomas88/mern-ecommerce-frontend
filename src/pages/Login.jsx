import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiRequest'
import { mobile } from '../responsive'
const Container=styled.div`
  width:100%;
  height:100vh;
   background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,url("https://wallpapercave.com/wp/wp11136022.jpg") center ;
   background-size:cover;
   background-repeat:no-repeat;
   
   display:flex;
   align-items:center;
   justify-content:center;
`
const Wrapper=styled.div`
width:25%;
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
flex-direction:column;
`
 const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`

const Button=styled.button`
  width:40%;
  padding:15px 20px;
  background-color:teal;
  color:white;
  cursor:pointer;
  border:none;
  margin-bottom:10px;
  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`
const Error=styled.span`
  color:red;
`
const Link=styled.a`
  text-decoration:underline;
  font-size:12px;
  margin:5px 0px;
  cursor:pointer;
`

const Login = () => {
  const dispatch=useDispatch();
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

 const {isFetching,error}=useSelector(state=>state.user)

const handleClick=(e)=>{
e.preventDefault();
login(dispatch,{username,password})
}
  return (
    <Container>
       <Wrapper>
            <Title>
              LOGIN
            </Title>
            <Form>
            <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}></Input>
            <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}></Input>
           
              <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
             {error && <Error>Something went wrong...</Error> }
              <Link>Do not you remember the password?</Link>
              <Link>CREATE A NEW ACCOUNT?</Link>
              </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
