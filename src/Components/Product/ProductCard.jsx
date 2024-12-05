import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "../Product/Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // Safely destructure the product object, ensure defaults in case of undefined
  const { image, title, id, rating, price } = product || {};

  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/product/${id}`}>
        <img src={image || "default-image.jpg"} alt={title || "Product"} />{" "}
        {/* Use default image if missing */}
      </Link>
      <div>
        <h3>{title || "Product Title"}</h3> {/* Fallback title if missing */}
        <div className={classes.rating}>
          {/* Conditional rendering for rating */}
          {rating ? (
            <>
              <Rating value={rating?.rate || 0} precision={0.1} />{" "}
              {/* Safe check for rating.rate */}
              <small>{rating?.count || 0}</small>{" "}
              {/* Safe check for rating.count */}
            </>
          ) : (
            <p>No rating available</p> // Fallback if rating is missing
          )}
        </div>
        <div>
          {/* Conditional rendering for price */}
          {price ? (
            <CurrencyFormat amount={price} />
          ) : (
            <p>Price not available</p>
          )}{" "}
          {/* Fallback if price is missing */}
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
