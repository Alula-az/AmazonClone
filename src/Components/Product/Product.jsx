// import React from 'react'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "../Product/Product.module.css";


function Product() {
    const [products, setProcucts] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProcucts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <section className={classes.products_container}>
        {products.map((singleProduct) => (
             <ProductCard product={singleProduct} key={singleProduct.id}/>
        ))}
    </section>
  )
}

export default Product
