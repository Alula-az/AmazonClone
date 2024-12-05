import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams(); // Extract productId from the URL
  const [product, setProduct] = useState({}); // Initialize product as an empty object

  useEffect(() => {
    // Corrected API endpoint to fetch a single product
    axios
      .get(`${productUrl}/products/${productId}`) // Added 'products' to match API convention
      .then((res) => {
        setProduct(res.data); // Set the fetched product data
      })
      .catch((err) => {
        console.log("Error fetching product:", err); // Log error for debugging
      });
  }, [productId]); // Added productId as a dependency for useEffect

  return (
    <LayOut>
      <ProductCard product={product} />{" "}
      {/* Pass fetched product to ProductCard */}
    </LayOut>
  );
}

export default ProductDetail;
