import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom'

const Container=styled.div`
   /* flex:1;
    margin:10px;*/
    width:30vw;
    height:70vh;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    ${mobile({width:'70vw'})}
`
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
   ${mobile({width:'100vw',height:"50vh",objectfit:'contain'})}

`
const Info=styled.div`
   position:absolute;
   top:0;
   left:0;
   display :flex ;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   width:100%;
   height:100%;
`
const Title=styled.p`
    color:black;
    margin-bottom: 20px;
    font-weight:bold;
`
const Button=styled.button`
padding:10px;
border:none;
font-weight:600;
background-color: white;
color:gray;
cursor:pointer;
`
const CategoryItem = ({item}) => {
  return (
    <Link to={`/products/${item.cat}`}>
    <Container>
      <Image src={item.img}></Image>
      <Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
      </Info>      
    </Container>
    </Link>
  )
}

export default CategoryItem
