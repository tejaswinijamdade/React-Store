import React, { useContext } from "react";
import { ShopContext } from "./context/shopContext";
import styled from "styled-components";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Wrapper>
        <div className="cartItem my-3">
            <img src={productImage} alt="ProductImage" className="cartImg" width="80"/>
            <div className="description">
                <p>
                <b>{productName}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler d-inline-flex">
                <button className="modalbtn addBtn" onClick={() => removeFromCart(id)}> - </button>
                <input
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
               className="modal-input text-center" />
                <button className="modalbtn removeBtn" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    </Wrapper>
  );
};


const Wrapper =styled.section`
.addBtn, .removeBtn{
  width: 40px;
    height:33px;
}
input.modal-input {
  height: 2rem;
}
.cartItem {
  padding: 1rem;
  border: 1px solid #00000061;
  border-radius: 1.5rem;
  box-shadow: 2px 2px #12090940;
}


`;
