import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../component/layout/layout";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, getAddress } from "../../action/addressAction";
import { Modal, Button, Form } from "react-bootstrap";
import { checkOut } from "../../action/orderAction";
function Placeorder() {
  const address = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [filladdress, setFilladdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [delivery, setDelivery] = useState("");

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveAdd = () => {
    const payload = { name, filladdress, phoneNumber, postalCode };
    dispatch(addAddress(payload)).then(() => {
      dispatch(getAddress());
    });
  };
  const handleCheckOut = () => {
    if (delivery) {
      const payload = { address: delivery, orderItems: cart.cart.cart };
      dispatch(checkOut(payload));
    } else {
      window.alert("PLEASE CHOOSE DELIVERY");
    }
  };

  const rendertotalPrice = () => {
    let total = 0;
    if (cart.cart.cart) {
      cart.cart.cart.map((data) => {
        total += data.price;
      });
    }
    return total;
  };

  const renderModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <Form.Control
            type="text"
            placeholder="Address"
            value={filladdress}
            onChange={(e) => setFilladdress(e.target.value)}
          />
          <br />

          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />

          <Form.Control
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <Layout>
        <Container className="con-place-order">
          {renderModal()}
          <div className="seperate-con">
            <div className="seperate-con-left">
              <div className="master-delivery">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Delivery
                </p>
                {!delivery ? (
                  <p
                    style={{
                      direction: "rtl",
                      marginRight: "50px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}
                  >
                    Add
                  </p>
                ) : (
                  <p
                    style={{
                      direction: "rtl",
                      marginRight: "50px",
                      cursor: "pointer",
                    }}
                    onClick={() => setDelivery("")}
                  >
                    Change
                  </p>
                )}
              </div>
              {address.address && !delivery
                ? address.address.map((data) => (
                    <div className="choose-delivery">
                      <div className="header-detail">
                        <p>ชื่อ</p>
                        <p>เบอโทร</p>
                        <p>ที่อยู่</p>
                      </div>
                      <div className="address-detail">
                        <p>{data.name}</p>
                        <p>{data.phoneNumber}</p>
                        <p>{data.address}</p>
                        <p>{data.postalCode}</p>
                        <button onClick={() => setDelivery(data._id)}>
                          Delivery Here
                        </button>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className="seperate-con-right">
              <div className="total-sumary">
                <p style={{ fontWeight: "bold" }}>TOTAL</p>
                <hr />
                <p style={{ fontWeight: "bold" }}>{rendertotalPrice()}</p>
                <button onClick={handleCheckOut}>CHECK OUT</button>
                <hr />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default Placeorder;
