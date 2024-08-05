import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
function Header() {
  return (
    <section className={classes.fixed}>
        <section >
             <div className={classes.header__container}>
            <div  className={classes.logo__container}>
                {/* logo part */}
                <a href="">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone logo"  />
                </a>
                <div className={classes.delivery}>
                <span>
                    <SlLocationPin />
                </span>
            <div>
                <p>Deleverd To</p>
                <span>Ethiopia</span>
            </div>
            </div>
            </div>
            <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={33} />
          </div>

          {/* right side div */}
            <div className={classes.order__container}>
                <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
<select name ="" id=''>
                <option value="">EN</option>
              </select>

                </a>
                <a href="">
                <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
                </div>
            </a>
            {/* orders */}
            <a href="">
                <p>returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a href=""  className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
            </a>
              
            </div>
  
            
            </div>
        </section>
    </section>
  )
}

export default Header