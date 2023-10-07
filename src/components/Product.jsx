import { FavoriteBorderOutlined, FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import product4 from '../images/product4.jpg'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    position:absolute;
    background-color:white;
`

const Info=styled.div`
   position:absolute;
   width:100%;
   height:100%;
   top:0;
   left:0;
   background-color:rgba(0,0,0,0.2);
   display:flex;
   align-items:center;
   justify-content:center;
   opacity:0;
   cursor:pointer;
   z-index:3;

`

const Container=styled.div`
   /* flex:1;
    margin:5px;*/
    width:280px;
    height:350px;
    position:relative;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color:#f5f9fd;
    
   &:hover ${Info}{
     opacity:1;
     transition: all 0.5s ease;
   }
   ${mobile({width:"270px"})}
    
`
const Image=styled.img`
    
    z-index: 2;
    height:75%;
    
`

const Icon=styled.div`

width:40px;
height:40px;
border-radius:50%;
cursor:pointer;
display:flex;
   align-items:center;
   justify-content:center;
   background-color:white;
   margin:10px;
   transition: all 0.5s ease;
   &:hover{
    background-color:rgba(0,0,0,0.2);
    transform:scale(1.1);
    
   }
    
`

const Product = ({item}) => {
  console.log(item.img)
  return (
    <Container>
        <Circle></Circle>
      
      <Image src={item.img}></Image>
            <Info>
        <Icon>
            <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item._id}`}>
        <Icon>
            <SearchOutlined />
        </Icon>
        </Link>
        <Icon>
            <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
