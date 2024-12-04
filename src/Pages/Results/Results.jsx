import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import classes from "../Results/Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";



function Results() {


  const fullUrl = new URL(
    `/products/category/${categoryName}`,
    productUrl
  ).toString();
  axios
    .get(fullUrl)
    .then((res) => {
      setResults(res.data);
    })
    .catch((err) => {
      console.log("Error fetching data:", err);
    });


  const [results, setResults] = useState([])
  const {categoryName} = useParams()
  useEffect(()=>{
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    setResults(res.data)
  }).catch((err)=>{
    console.log(err)
  })
},[])





  return (
    <LayOut>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Category / {categoryName}</p>
      <hr/>
      <div className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard key={product.id}
          product={product} />
        ))}

      </div>


      </section>
    </LayOut>
  );
}

export default Results