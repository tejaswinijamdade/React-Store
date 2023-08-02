import React, { useState } from "react";
import styled from "styled-components";
import { PRODUCTSLISTS } from "./ProductList";
import { Product } from "./Product";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button components
import { useContext } from "react";
import { ShopContext } from "./context/shopContext";
import { CartItem } from "./cart-item";



const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(PRODUCTSLISTS);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = PRODUCTSLISTS.filter((product) => {
      const productName = product.productName ? product.productName.toLowerCase() : "";

      return productName.includes(query);
    });

    setSearchResults(filteredResults);
  };

  return (
    <Wrapper className="my-5">
      <div className="container mainContainer">
          <div className="container mt-3">
            <input
              type="text"
              placeholder="Search Product Here.."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="container text-end">
              <button className="viewCart" variant="primary" onClick={toggleModal}>
                  View Product Cart
              </button>
          </div>
      </div>
     

      <div className="products">
       
        {searchResults.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <div className="product text-center">
         {PRODUCTSLISTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                 }
                
                 return true;
           })};
        </div>
        {totalAmount > 0 ? (
      <h3>Lets Buy This Products....</h3>
      ) : (
        <h3> Add Product To View Here.....</h3>
      )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default Products;


const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  section {
    display: inline-block;
   
}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
    .container.mainContainer {
      display: table-caption;
    }
    button.viewCart {
      width: 150px;
    }
  }
  .cartItem {
    padding: 1rem;
    border: 1px solid #00000061;
    border-radius: 1.5rem;
    box-shadow: 2px 2px #12090940;
}
button.viewCart {
  padding: 1rem 2.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  font-size: 1.6rem;
  background: #3f48ccb5;
  color: #fff;
  border: 1px solid #0000ff29;
}
.mainContainer {
  align-items: baseline;
  width: 80%;
    margin: 0 auto;
    display: flex;
}
 
`;
