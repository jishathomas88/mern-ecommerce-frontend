import { AddShoppingCartOutlined, MailOutline, Search, SearchSharp, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Select } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/apiRequest';

const Container = styled.div`
width:100%;
height:60px;
background-color:rgba(214,214,220,0.5);
${mobile({height: "50px"})}

`
const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    ${mobile({padding: "10px 0px"})}
`;
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Center=styled.div`
flex:2;
text-align: center;
${mobile({flex: "1"})};

`;
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:"2",justifyContent: "center"})}
`
const Language=styled.span`
${mobile({display: "none"})};
`;
const SearchContainer=styled.div`
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
border:0.5px solid lightgray;
`
const Input=styled.input`
  border:none;
  outline  :none ;
  background-color:hsla(240, 7.8947368421052735%, 85.09803921568628%, 0.2);
  ${mobile({width: "50px"})}
`
const Logo=styled.h1`
    font-weight: bold;  
    ${mobile({fontSize: "24px"})}
`
const MenuItem=styled.div`
    font-size:18px;
    font-weight:500;
    margin-left:25px;
    ${mobile({fontSize: "12px",marginLeft : "10px"})}
`
const LinkItem=styled(Link)`
  text-decoration: none;
  color:inherit;
`
const Logout=styled.button`
border:none;
background-color: lightgray;
padding:5px;
cursor  :pointer ;
`
const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity);
    const user=useSelector(state=>state.user.currentUser)
    const dispatch=useDispatch()
    console.log(quantity)
    const handleLogout=(e)=>{
      logout(dispatch)
    }
  return (
    <Container>
        <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='Search' />
            <SearchSharp  style={{color:"gray",fontSize:"16px"}}/>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>LAMA.</Logo>
      </Center>
      <Right>
        {
          !user ?  (  
            <>
        <LinkItem to='/register'>
        <MenuItem>REGISTER</MenuItem>
        </LinkItem>
        <LinkItem to='/login'>
        <MenuItem>SIGN IN</MenuItem>
        </LinkItem>
        </>     
        ) : (<><span style={{marginRight:'5px'}}>{user.username}</span>
             <Logout onClick={(e)=>handleLogout()}>Logout</Logout></>)
        }
        
          
        <Link to='/cart'>
        <MenuItem>
        <Badge badgeContent={quantity} color="primary" showZero>
        <ShoppingCartOutlinedIcon color="black" />
        </Badge>
        </MenuItem>
        </Link>
        </Right> 
      </Wrapper>
    </Container>
  )
}

export default Navbar
