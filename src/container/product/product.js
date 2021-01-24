import React, { useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../action/productAction";
import { Container } from "react-bootstrap";
import "./style.css";
function Product(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    console.log(props);
    dispatch(getProductBySlug(props.match.params.slug));
  }, []);
  //   if (product.product.length === 0) {
  //     return null;
  //   }
  return (
    <Layout>
      <Container className="main-page">
        <div className="list-product">
          {product.product.map((data) => (
            <div class="list-detail">
              <img
                src={"http://localhost:2000/public/" + data.picture[0].img}
                style={{ width: "100%", height: "68%" }}
                className="img-thumbnail"
              />
              <p>{data.name}</p>
              <p>{data.price}</p>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default Product;
