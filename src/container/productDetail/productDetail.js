import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailByid } from "../../action/productAction";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

import ImageGallery from "react-image-gallery";
import { Link, NavLink, Redirect } from "react-router-dom";
import { AddToCart, getCart } from "../../action/cartAction";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  const [value, setValue] = useState(1);
  // const [linksignin, setLinksignin] = useState(false);

  useEffect(() => {
    const { match } = props;
    // console.log(match);
    dispatch(getProductDetailByid(match.params.productId));
  }, []);

  const handleAddToCart = () => {
    if (product.productDetail.quantity > 0) {
      const payload = {
        product: product.productDetail._id,
        quantity: value,
        price: product.productDetail.price * value,
      };

      dispatch(AddToCart(payload)).then(() => {
        dispatch(getCart());
      });
    } else {
      alert("No product left");
    }
  };

  const renderPicture = (product) => {
    const img = [];
    product.picture.map((data) => {
      img.push({
        original: "http://localhost:2000/public/" + data.img,
        thumbnail: "http://localhost:2000/public/" + data.img,
      });
    });
    return (
      <ImageGallery
        items={img}
        showPlayButton={false}
        showIndex={true}
        showFullscreenButton={false}
      />
    );
  };

  return (
    <div>
      <Layout menubar>
        <Container className="product-detail">
          <div className="main-detail">
            <div className="zone-left">
              {product.productDetail.picture
                ? renderPicture(product.productDetail)
                : null}
            </div>
            <div className="zone-right">
              <div className="zone-right-top">
                <h1>{product.productDetail.name}</h1>
                <br />
                <p>
                  <img src="/img/thailand-baht.png" width="45px" />
                  {product.productDetail.price}
                </p>
              </div>
              <div className="zone-right-middle">
                <p>{product.productDetail.description}</p>
              </div>
              <div className="zone-right-bottom">
                <p className="button-add">
                  <p style={{ marginTop: "6px" }}> จำนวน</p>
                  <button
                    className="btndecrese"
                    onClick={() =>
                      value > 1 ? setValue(parseInt(value) - 1) : null
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    placeholder={value}
                    className="count-value"
                    value={value}
                    onChange={(e) =>
                      e.target.value < product.productDetail.quantity
                        ? setValue(e.target.value)
                        : setValue(product.productDetail.quantity)
                    }
                    disabled
                  />
                  <button
                    className="btnincrese"
                    onClick={() =>
                      value < product.productDetail.quantity
                        ? setValue(parseInt(value) + 1)
                        : null
                    }
                  >
                    +
                  </button>
                  <p style={{ marginTop: "8px", marginLeft: "30px" }}>
                    มีสินค้าทั้งหมด {product.productDetail.quantity} ชิ้น
                  </p>
                </p>

                <p className="button-right">
                  <button
                    className="btn1"
                    onClick={
                      () =>
                        auth.authenticate
                          ? handleAddToCart()
                          : (window.location.href = "/signin")
                      // props.history.push("/signin")
                    }
                  >
                    Add To Cart
                  </button>
                  <button className="btn2">BuyNow</button>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default ProductDetail;
