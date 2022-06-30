import styled from "styled-components";

const StyledDiv=styled.div`
.contain1{
    width56%
    height:48vh;
    border:1px solid grey;
}
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
    margin-top:4vh; 
    height:8vh;
    background-color: grey;
    color: white;
 }

`;

export const Cart=()=>{


    var data=JSON.parse(localStorage.getItem("cartp"))

    // console.log(data.length)
    if(data.length===0){
        return(
        <h1>Cart is empty</h1> )
    }else{
    return (
        <StyledDiv>
        <div className="contain1">
            <h1>Cart</h1>
           
            <div className="card1">
         <p>{data.name}</p>
         <p>{data.price}</p>
         </div>
         
         <div className="total">Total: {data.price}</div>
        </div>
        
        </StyledDiv>
    )}
}