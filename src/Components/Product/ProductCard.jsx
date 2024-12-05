import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "../Product/Product.module.css";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader"; 

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product || {};

  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/product/${id}`}>
        <img 
          src={image || "https://via.placeholder.com/150"} 
          alt={title || "Product Title"} 
        /> 
      </Link>
      <div>
        <h3>{title || "Product Title"}</h3>
        <div className={classes.rating}>
          {rating ? (
            <>
              <Rating value={rating?.rate || 0} precision={0.1} />{" "}
              <small>{rating?.count || 0}</small>{" "}
            </>
          ) : (
            <p>No rating available</p>
          )}
        </div>
        <div>
          {price ? (
            <CurrencyFormat amount={price} />
          ) : (
            <p>Price not available</p>
          )}{" "}
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
