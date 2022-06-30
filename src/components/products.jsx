import { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import { Cart } from "./cart";

const StyledDiv=styled.div`
font-family: sans-serif;
.main{
    width:70%;
    height:45.5vh;
    display:flex;
    margin:auto;

    flex-direction:row;
    justify-content: space-between;
    border:1px solid grey;
 }
 .contain{
    width:40%;
    height:45vh;
    display:flex;
    // margin:auto;

    flex-direction:column;
    justify-content: space-between;
    border:1px solid grey;
 }
 .card{
    // width:95%
    background-color: grey;
 color: white;
    height:8vh;
    display:flex;
    flex-direction:row;
    align-item:center;
    justify-content: space-between;
    // border:1px solid red;

 }
 p{
    font-size:1.5vw;
 }
 .btndiv{
    margin-top:3%;
 }
 button{
    font-size:1.5vw;
 }
 .car{
    width:40%;
    height:58vh;
 }

`;

export const Product=()=>{
    const [pdata, setPdata] =useState([]);
    const [items, setItems] =useState(0)
    const [cart, setCart] =useState([])

    //**call the getdata function in useEffect
useEffect(()=>{

    getdata();
   
}, [])

//**products data */
const Products = [

    {id: 1, name: "Product-1", price:100},
    
    {id: 2, name: "Product-2", price:200},
    
    {id: 3, name: "Product-3", price:300},
    
    ];

    //**getdata function to get the data  */
    const getdata=()=>{
        setPdata(Products)
    }

    //**function to icrease decrease the items */
    function result(value){
        setItems(items+value);
    }
   
    // console.log(pdata)
    function addtocart(list){
        setCart(list)
      
    }
    localStorage.setItem("cartp", JSON.stringify(cart));

    //**render the data on browser, using map */
    return (
  <StyledDiv>
    <div className="main">
    <div className="contain">
        <h1>Products</h1>
        {pdata.map((list)=>{
            return(
                <div className="card" key={list.id}>
                   <p>{list.name}</p>
                   <p>{list.price}</p>
                   <div className="btndiv">
                   <button onClick={()=>{
                    if(items>0)
                    result(-1)
                    }}>-</button>
                   <button>{items}</button>
                   <button onClick={()=>{
                    result(+1);
                    addtocart(list);

            
                    }}>+</button>
                   </div>

                </div>
            )
        })}
    </div>
<div className="car">
    <Cart />
</div>
    </div>
  </StyledDiv>

    )
}
