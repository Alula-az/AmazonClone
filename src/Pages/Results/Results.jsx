import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import classes from "../Results/Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors
  const { categoryName } = useParams(); // Get category name from URL params

  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    // Construct URL dynamically
    const fullUrl = `${productUrl}/products/category/${categoryName}`;

    axios
      .get(fullUrl)
      .then((res) => {
        setResults(res.data); // Update results
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false); // Stop loading on error
      });
  }, [categoryName]); // Re-run when categoryName changes

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {loading && <p>Loading...</p>} {/* Show loading message */}
        {error && <p>{error}</p>} {/* Show error message */}
        {!loading && !error && (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
