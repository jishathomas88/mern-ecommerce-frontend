import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'
import axios from 'axios'

const Container=styled.div`
   /* width:100%;*/
    height:100%;
    padding:20px;
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])
  console.log(cat,filters,sort)
  useEffect(()=>{
     const getProducts=async()=>{
      try{
      const res= cat ?  (await axios.get(`http://localhost:5000/api/product?category=${cat}`)) :
      (await axios.get(`http://localhost:5000/api/product`))
      setProducts(res.data)
       console.log(res.data) 
      }catch(error){
       console.log(error)
      }

     }
    getProducts()
  },[cat])
  
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>
      Object.entries(filters).every(([key,value])=>
       item[key].includes(value)
       )
       ))    

  },[products,cat,filters])
  useEffect(()=>{
  if(sort=== "newest"){
   filteredProducts.sort((a,b)=>
   a.createdAt - b.creadtedAt
   )
  }else if(sort === "asc"){
    filteredProducts.sort((a,b)=>
    a.price - b.price
    )
  }else {
    filteredProducts.sort((a,b)=>
    b.price - a.price
    )
  }
  },[sort])
  return (
    <Container>
        {
          cat ?  filteredProducts.map((item)=>(
                <Product item={item}/>
            )) : 
            products.slice(0,8).map((item)=>(
              <Product item={item}/>))
        }
      
    </Container>
  )
}

export default Products
