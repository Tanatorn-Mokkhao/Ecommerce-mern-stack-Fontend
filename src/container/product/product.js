import React, { useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../action/productAction";
import { Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
function Product(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductBySlug(props.match.params.slug));
  }, []);
  if (!product.product) {
    return null;
  }
  return (
    <Layout menubar>
      <Container className="main-page">
        <div className="list-product">
          {product.product.map((data) => (
            <div className="list-detail" key={data._id}>
              <a href={`${props.match.params.slug}/${data._id}`}>
                <img
                  src={"http://localhost:2000/public/" + data.picture[0].img}
                  style={{ width: "200px", height: "200px" }}
                  className="img-thumbnail"
                />
                <p>{data.name}</p>
                <p>{data.price}</p>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default Product;
