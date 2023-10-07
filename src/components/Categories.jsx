import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categories} from '../data'
import {mobile} from '../responsive'

const Container=styled.div`
   display:flex;
   gap:2px;
   /*flex-wrap:wrap;*/
   padding:20px;
   align-items:center;
   justify-content:center;

   
  
   background-color:rgba(214,215,220,.5);
   ${mobile({padding:"0",flexDirection: "column"})};
`

const Categories = () => {
  return (
    <Container>
        {
        categories.map((item)=>(
            <CategoryItem  item={item}/>
        ))
        }
      
    </Container>
  )
}

export default Categories
