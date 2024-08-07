import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext} from '../DataProvider/DataProvider';
function Header() {
    const [{basket},dispatch] = useContext(DataContext)
    console.log(basket.length)
  return (
    <section className={classes.fixed}>
        <section >
             <div className={classes.header__container}>
            <div  className={classes.logo__container}>
                {/* logo part */}
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone logo"  />
                </Link>
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
                <Link to="/auth">
    <div>
               <p>Sign In</p>
                <span>Account & Lists</span>
                </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart"  className={classes.cart}>
                <BiCart size={35} />
                <span>{basket.length}</span>
            </Link>
              
            </div>
  
            
            </div>
        </section>
         <LowerHeader />
    </section>
  )
}

export default Header