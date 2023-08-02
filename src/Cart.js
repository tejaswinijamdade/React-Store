import styled from "styled-components";
import React, { useContext } from "react";
import { ShopContext } from "./context/shopContext"
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { PRODUCTSLISTS } from "./ProductList";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return <Wrapper>
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTSLISTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return true;
        })};
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cartItem {
  width: 700px;
  height: 250px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px;
  padding:4rem
}

.cartItem img {
  width: 200px;
  height: 200px;
  margin-right: 1rem
}

.cartItem .description {
  width: 100%;
  font-size: 30px;
}

.countHandler input {
  width: 30%;
  height: 35px;
  text-align: center;
  font-weight: bolder;
}

.checkout button {
  width: 150px;
  height: 50px;
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
}

`;

export default Cart;
