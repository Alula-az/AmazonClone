import React from "react";
import { categoryInfo } from "./categoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "../Category/Category.module.css"

function Category() {
  return (
    <div className={classes.category_container}>
      {categoryInfo.map((info) => (
        <CategoryCard data={info} key={info.id} />
      ))}
    </div>
  );
}

export default Category;
