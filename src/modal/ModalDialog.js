import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { PRODUCTSLISTS } from '../ProductList';
import { CartItem } from '../cart-item';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false);
  }
  const closeModal = () => {
    return invokeModal(false)
  }
//   const{productName,price, productImage}= props.data;

const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

   

  return (
    <Wrapper>
      <Button variant="success" onClick={initModal}>
        View Product
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title><b>Shop Now,... OFFER ENDING SOON...!</b></Modal.Title>
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
      <div>Lets Shop This Products....</div>
      ) : (
        <h3> Add Product To View Here.....</h3>
      )}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
          <Button variant="danger" >
               <Link to="/cart" className='text-light' >Open Cart</Link> 
          </Button>
          {/* <Button variant="dark" onClick={closeModal}>
            Store
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Wrapper>
  )
}
export default ModalDialog


const Wrapper= styled.section`
.modal-content  img.cartImg {
    width: 100px !important;
    height: 150px !important;
}

`;