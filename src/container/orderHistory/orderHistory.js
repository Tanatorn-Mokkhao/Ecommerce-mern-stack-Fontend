import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../component/layout/layout";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { getorderHistory } from "../../action/orderAction";
function OrderHistory() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const [state, setState] = useState("");
  useEffect(() => {
    dispatch(getorderHistory());
  }, []);

  return (
    <div>
      <Layout>
        <Container className="orderHistory-page">
          <div className="header">ORDER HISTORY</div>
          {order.orderHistory.map((data, index) => (
            <div className="detail" key={index}>
              <p style={{ direction: "rtl", color: "orange" }}>
                STATUS DELIVERY | {data.status}
              </p>
              <hr />
              <p>
                {data.orderItems.map((_data, index) => (
                  <>
                    <ul>
                      <li>
                        <img
                          src={
                            "http://localhost:2000/public/" +
                            _data.product.picture[0].img
                          }
                        />
                      </li>
                      <li style={{ marginTop: "20px" }}>
                        {_data.product.name}
                      </li>

                      <ul style={{ marginTop: "20px" }}>X{_data.quantity}</ul>
                    </ul>
                    <hr />
                  </>
                ))}
              </p>
              <p style={{ padding: "50px 20px", direction: "rtl" }}>
                TORAL PRICE {data.totalprice}
              </p>
            </div>
          ))}
        </Container>
      </Layout>
    </div>
  );
}

export default OrderHistory;
