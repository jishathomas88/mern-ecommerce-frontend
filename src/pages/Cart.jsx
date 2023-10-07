import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'
import { mobile } from '../responsive'
import { decrementProduct, removeProduct } from '../redux/cartRedux'
const Container=styled.div`
`
const Wrapper=styled.div`
padding:20px;
${mobile({padding:'10px'})}
`
const Title=styled.h1`
font-weight:300;
text-align: center;
`
const Top=styled.div`
display:flex;
align-items: center;
justify-content:space-between;
padding: 20px;
`
const TopButton=styled.button`
    padding: 10px;
    font-weight:600;
    cursor:pointer;
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    border: ${(props)=>props.type === "filled" && "none"};
    color: ${(props)=>props.type === "filled" && "white"};
    

`
const TopTexts=styled.div`
${mobile({display:'none'})}
    
`
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
    
`

const Bottom=styled.div`
display:flex;
${mobile({flexDirection:'column'})}
`
const Info=styled.div`
flex:3;

`
const Product=styled.div`
display:flex;
justify-content: space-between;
border-bottom: 2px solid lightgrey;

${mobile({flexDirection:'column'})}
`
const ProductDetails=styled.div`
flex:2;
display:flex;

`
const Image=styled.img`
flex:1;
//width:200px;
width:30%;
`
const Details=styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
`
const ProductSize=styled.span``
const PriceDetails=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`
const ProductAmount=styled.div`
font-size:24px;
margin:5px;
${mobile({margin:'5px 15px'})}
`
const ProductPrice=styled.span`
font-size:30px;
font-weight:300;
${mobile({marginBottom:'20px'})}
`
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius: 10px;
padding:20px;

height:60vh;
`
const Hr=styled.hr`
background-color: #eee;
border:none;
height:1px;
`
const SummaryTitle=styled.h1`

font-weight:200;
`
const SummaryItem=styled.div`
display:flex;
justify-content:space-between;
margin:30px 0px;
font-weight: ${props=>props.type === "total" && "600"};
font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText=styled.span`

`
const SummaryItemPrice=styled.span``
const Button=styled.button`
width:100%;
padding:10px;
background-color: black;
color:white;
cursor:pointer;
`
const Cart = () => {
    const [stripeToken,setStripeToken]=useState(null)
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const key=process.env.REACT_APP_STRIPE_KEY
    

    const onToken=(token)=>{
    setStripeToken(token)
    }
    console.log(stripeToken)
    useEffect(()=>{
     const makeRequest=async ()=>{
      try{
        const res=await userRequest.post("/checkout/payment/",{tokenId:stripeToken.id,amount:cart.total})
        console.log(res.data)
        navigate('/success',{state :{data:res.data}})

      }catch(error){

      }
     }
    stripeToken && makeRequest()
    },[stripeToken,cart.total,navigate])


    const handleQuantity=(type,productId)=>{
      console.log("clicked")
      if(type==='dec'){
        console.log(type)
        const cartProduct=cart.products.find((productItem)=>productItem._id===productId)
        console.log(cartProduct)
        if(cartProduct.quantity>1){
            console.log(cartProduct.quantity)
            dispatch(decrementProduct({id:productId,quantity:cartProduct.quantity,price:cartProduct.price}))
        }else{
            dispatch(removeProduct({id:productId,price:cartProduct.price}))
        }
    }
}
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
         <TopButton>CONTINUE SHOPPING</TopButton>
         <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText >WishList(0)</TopText>
         </TopTexts>
         <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
           <Info>
            {
                cart.products.map((product)=>(
                <Product>
                <ProductDetails>
                    <Image src={product.img}></Image>
                    <Details>
                        <ProductName><b>Product: </b>{product.title}</ProductName>
                        <ProductId><b>Id:</b>{product._id}</ProductId>
                        <ProductColor color={product.color}></ProductColor>
                        <ProductSize><b>Size:</b>{product.size}</ProductSize>
                    </Details>

                </ProductDetails>
                <PriceDetails>
                    <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove onClick={()=>handleQuantity('dec',product._id)}/>
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                </PriceDetails>
                

            </Product>
            
                ))
                
            }
            <Hr />
            
           </Info>
           <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
                <SummaryItemText type="total">Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
            name='lama shop'
            billingAddress
            shippingAddress
            description={`your total is $${cart.total}`}
            token={onToken}
            amount={cart.total*100}
            stripeKey={key}
            >
           <Button>CHECKOUT NOW</Button>
           </StripeCheckout>
           </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
