import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../component/layout/layout";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { ImCross } from "react-icons/im";
import { deleteItemInCart, getCart } from "../../action/cartAction";
import { Link, NavLink } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const rendertotalPrice = () => {
    let total = 0;
    if (cart.cart.cart) {
      cart.cart.cart.map((data) => {
        total += data.price;
      });
    }
    return total;
  };

  const handleDeleteItem = (id) => {
    // console.log(id);
    dispatch(deleteItemInCart(id)).then(() => {
      dispatch(getCart());
    });
  };

  return (
    <div>
      <Layout>
        <Container className="cart-page">
          <div className="main-cart">
            <div className="left-cart-page">
              <p
                style={{
                  fontSize: "25px",
                  textAlign: "start",
                  marginLeft: "20px",
                  fontWeight: "bold",
                }}
              >
                My cart
              </p>
              <hr style={{ width: "92%" }} />
              {cart.cart.cart ? (
                cart.cart.cart.map((data) => (
                  <div className="detail-cart" key={data._id}>
                    <div className="detail-cart-1">
                      <img
                        src={
                          "http://localhost:2000/public/" +
                          data.product.picture[0].img
                        }
                      />
                      <p
                        style={{
                          marginTop: "40px",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                      >
                        {data.product.name}
                      </p>
                      <p
                        style={{
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                      >
                        Quantity :{data.quantity}
                      </p>
                    </div>

                    <div>
                      <ImCross
                        onClick={handleDeleteItem.bind(this, data.product._id)}
                        style={{ cursor: "pointer" }}
                      />

                      <p
                        style={{
                          marginTop: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        {data.price}
                      </p>
                    </div>
                    <hr />
                  </div>
                ))
              ) : (
                <p style={{ fontWeight: "bold" }}>NO PRODUCT IN CART</p>
              )}
            </div>
            <div className="right-cart-page">
              <div className="right-cart-page-inside">
                <p style={{ fontWeight: "bold" }}>TOTAL</p>
                <hr />
                <p style={{ fontWeight: "bold" }}>{rendertotalPrice()}</p>
                {cart.cart.cart ? (
                  <NavLink to="/placeorder">Place Order</NavLink>
                ) : null}
                <hr />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default Cart;
