import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import classes from '../Header/Header.module.css'

const Header = () => {
  return (
    <section>
      <div className={classes.header_container}>
        {/* logo section */}
        <div className={classes.logo_container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              {/* icon */}
              <GrLocation />
            </span>
            <div>
              <p>Deliverd to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          {/* icon */}
          <FaSearch size={25}/>
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png"
              alt="US flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          {/* three components */}
          <a href="">
            
              <p>Sign In</p>
              <span>Account & Lists</span>
            
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& orders</span>
          </a>
          {/* cart */}
          <a href="" className={classes.cart}>
            {/* icon */}
            <HiOutlineShoppingCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
