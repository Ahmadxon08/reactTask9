import { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageSize = 6;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = await res.data.products;
      setTotalPages(Math.ceil(res.data.totalCount / pageSize));
      setProducts(data);
    } catch (error) {
      console.log("Error occurred while fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    setSearchProducts(products);
  }, [products]);

  const handleSearch = (e) => {
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
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    if (selectedFilter === "All") {
      setSearchProducts(products);
    } else {
      setSearchProducts(
        products.filter((product) => product.category === selectedFilter)
      );
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
            placeholder="Search..."
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
            searchProducts.length > 0 &&
            searchProducts.map((product) => (
              <div className="product_card" key={product.id}>
                <img src={product.thumbnail} alt={product.name} />
                <div className="product_body">
                  <h2>{product.category}</h2>
                  <span>{product.brand}</span>
                  <p>${product.price}</p>
                  <Link to={`/product/${product.id}`}>
                    <button className="product_btn">See more</button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
