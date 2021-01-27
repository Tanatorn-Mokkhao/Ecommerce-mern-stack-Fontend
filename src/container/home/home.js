import React, { useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../action/productAction";
import { Container } from "react-bootstrap";

function Home() {
  const dipatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dipatch(getAllProduct());
  }, []);

  if (!product.allproduct) {
    return null;
  }

  return (
    <div>
      <Layout menubar>
        <Container className="main-page">
          <div className="list-product">
            {product.allproduct.map((data) => (
              <div className="list-detail" key={data._id}>
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
    </div>
  );
}

export default Home;
