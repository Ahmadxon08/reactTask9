import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Product.scss";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        const data = res.data;
        setProduct(data);
      } catch (error) {
        console.log("Error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product">
      <div className="container">
        <div className="pro_head">
          <Link to="../home" className="btn_back">
            go back
          </Link>
          <h1>Details of Product</h1>
        </div>

        <div className="pro_content">
          {loading ? (
            <div className="loading">
              <div className="   loadingio-spinner-spinner-6198pfzjivt">
                <div className="ldio-g5sxjzkryea">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          ) : (
            product && (
              <div className="pro_card">
                <div className="pro_img">
                  <img src={product.images[1]} alt={product.name} />
                  <span>-{product.discountPercentage}$</span>
                </div>
                <div className="pro_texts">
                  <h3>{product.title}</h3>
                  <h1>{product.category}</h1>
                  <span>{product.brand}</span>
                  <p>{product.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
