import styled from "styled-components";

const StyledDiv=styled.div`
font-family: sans-serif;
.contain1{
    width56%
    height:48vh;
    border:1px solid grey;
}
p{
    font-size:1.5vw;
 }
//  h1{
  
//         font-size:1.vw;
   
//  }
.card1{
    width:95%
    height:8vh;
    background-color: grey;
 color: white;
    height:8vh;
    display:flex;
    flex-direction:row;
    align-item:center;
    justify-content: space-between;
    // border:1px solid red;

 }
 .total{
    padding-top:.5%;
    margin-top:4vh; 
    height:8vh;
    background-color: grey;
    color: white;
 }
 
`;

export const Cart=()=>{


    var data=JSON.parse(localStorage.getItem("cartp"))

    // console.log(data.length)

    //**render the data on browser */
    if(data.length===0){
        return(
        <h1>No Product added to the cart</h1> )
    }else{
    return (
        <StyledDiv>
        <div className="contain1">
            <h1>Cart</h1>
           
            <div className="card1">
         <p>{data.name}</p>
         <p>{data.price}</p>
         </div>
         
         <div className="total"><p>Total: {data.price}</p></div>
        </div>
        
        </StyledDiv>
    )}
}
