import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "./context/shopContext";
// import ModalDialog from "./modal/ModalDialog";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



export const Product=(props)=>{


    const{id,productName,price, productImage}= props.data;
   
    const {addToCart, cartItems} =useContext(ShopContext);

    const cartItemsAmount = cartItems[id]
    return(
        <Wrapper>
           <div className="product">
                <img src={productImage} alt="Product img"/>
                <div className="description mt-5">
                    <h3>{productName}</h3><br/>
                    <p>${price}.00</p>
                </div>
              <button  className="addToCartBttn" onClick={()=>addToCart(id)} >
                Add To Cart {cartItemsAmount>0  && <>({cartItemsAmount})</>} </button>
            </div>
{/* 
            <div className="container mt-3">
                <ModalDialog/>
            </div> */}
        </Wrapper>
    );
}

const Wrapper= styled.section`
  .products {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  }
  
  .product {
    border-radius: 15px;
    width: 249px;
    margin: 2rem 8rem;
  }
  
  .product img {
    width: 280px;
    height: 350px;
  }
  
  .product .description {
    text-align: center;
  }
  .addToCartBttn {
    background-color: transparent;
    border: 2px solid rgb(19, 19, 19);
    min-width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 15px;
    margin: 10px auto;
    display: block;
  }
  
  .addToCartBttn:hover {
    background-color: rgb(19, 19, 19);
    color: white;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .products {
      justify-content: center;
      display: grid;
  }
  .product {
    margin: 4rem !important;
}

   
  }
`;