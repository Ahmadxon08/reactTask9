import { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState(products);
  const [filter, setFilterProducts] = useState("All");
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = await res.data.products;
      setProducts(data);
    } catch (error) {
      console.log("hatolik bor", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    setSearchProducts(products);
  }, [products]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.value.trim().toLowerCase();
    if (text) {
      setSearchProducts(
        products.filter(
          (product) =>
            product.category.toLowerCase().includes(text) ||
            product.brand.toLowerCase().includes(text)
        )
      );
    } else {
      setSearchProducts(products);
    }
  };
  const handleFilter = (e) => {
    setFilterProducts(e.target.value)
    const filter = e.target.value;
    if(filter==='All'){
      setSearchProducts(products)
    }else{
      setSearchProducts(products.filter(product=>product.category===filter))
    }
  
    
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home_head">
          <h1>Home Page</h1>
          <input
            type="search"
            onChange={handleSearch}
            placeholder="Searching ..."
          />
          <select
            name="filter"
            id="filter"
            value={filter}
            onChange={handleFilter}
          >
            <option value="All">All</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
        <div className="product_content">
          {searchProducts.length > 0 &&
            searchProducts.map((product) => {
              console.log(product);
              return (
                <div className="product_card" key={product.id}>
                  <img src={product.thumbnail} alt={product.name} />

                  <div className="product_body">
                    <h2>{product.category}</h2>
                    <span>{product.brand}</span>
                    <p>${product.price}</p>
                    <Link to={`/product/${product.id}`}>
                      <button className="product_btn">see more</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
