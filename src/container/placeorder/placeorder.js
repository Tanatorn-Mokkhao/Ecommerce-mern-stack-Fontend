import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../component/layout/layout";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getAddress } from "../../action/addressAction";

function Placeorder() {
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
  }, []);
  return (
    <div>
      <Layout>
        <Container className="con-place-order">
          <div className="place-order">
            <div className="detail-left">
              <div className="header-address">Delivery</div>
              <div className="detail-address"></div>
            </div>
            <div className="detail-right">2</div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default Placeorder;
