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
              <div className="header-address">
                <p>Delivery</p>
                <p
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => alert("Incomming กำลังทำอยู่ครับ")}
                >
                  Add{" "}
                </p>
              </div>
              <hr />
              {/* <div className="detail-address"> */}
              {address.address
                ? address.address.map((data) => (
                    <div className="detail-address">
                      <div
                        style={{
                          direction: "rtl",
                          textAlign: "start",
                        }}
                      >
                        <p>
                          <p>ชื่อ</p>
                        </p>
                        <p>เบอโทร</p>
                        <p>ที่อยู่</p>
                      </div>
                      <div style={{ textAlign: "start", marginLeft: "20px" }}>
                        <p>{data.name}</p>
                        <p>{data.phoneNumber}</p>
                        <p>{data.address}</p>
                        <p>{data.postalCode}</p>
                        <button
                          style={{
                            // marginLeft: "250px",
                            backgroundColor: "rgb(52,171,90)",
                            border: "0px solid",
                            color: "white",
                            fontWeight: "bold",
                            height: "50px",
                            width: "150px",
                            float: "right",
                          }}
                          onClick={() => alert("Incomming กำลังทำอยู่ครับ")}
                        >
                          Delivery Here
                        </button>
                      </div>
                    </div>

                    //   <div style={{ textAlign: "start", padding: "20px 30px" }}>
                    //     <div style={{ padding: "5px 0px" }}>
                    //       ชื่อ{"   "}
                    //       {data.name}
                    //     </div>

                    //     <div style={{ padding: "5px 0px" }}>
                    //       เบอโทร {"   "}
                    //       {data.phoneNumber}
                    //     </div>

                    //     <div style={{ padding: "5px 0px" }}>
                    //       ที่อยู่ {"   "}
                    //       {data.address}
                    //     </div>
                    //   </div>
                  ))
                : null}
              {/* </div> */}
            </div>
            <div className="detail-right">2</div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default Placeorder;
