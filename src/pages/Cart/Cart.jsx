import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { DataContext } from '../../components/DataProvider/DataProvider'
import LayOut from '../../components/LayOut/LayOut'
import ProductCard from '../../components/Product/ProductCard'
import { Type } from '../../utility/action.type'
import classes from './Cart.module.css'
import { LuPackageMinus } from "react-icons/lu";
import { MdOutlineAddShoppingCart } from "react-icons/md";



function Cart() {
     
    const[{basket,user},dispatch] = useContext(DataContext)
    console.log(basket)
     const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)
  const increment =(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item
  })
}
const decrement =(id)=>{
  dispatch({
    type :Type.REMOVE_FROM_BASKET,
    id
  })
}
  return (
    <LayOut>
        <section className={classes.container} >
      <div className={classes.cart__container}>
      <h2>Hello</h2>
          <h3>Your shopping basket </h3>
          <hr />
          {
            basket?.length==0?(<p>Theres no item in your cart</p>):(
              basket?.map((item,i)=>{
               return <section className={classes.cart_product}>
           <ProductCard
                   key={i}
             product={item}
             renderDesc={true}
                 renderAdd={false}
                 flex={true}
               />
                  <div className={classes.btn_container} >
                    <button className={classes.btn} onClick={()=>increment(item)}>
<MdOutlineAddShoppingCart size={20}/>
                    </button>
                    <span>{item.amount} </span>
                    
                    <button className={classes.btn} onClick={()=>decrement(item.id)}>
<LuPackageMinus size={20}/>
                    </button>
                    </div>
               </section>
              })
            )
          }

      </div>

{basket?.length !==0&&(
   <div className={classes.subtotal}>
    <div>
      <p>Subtotal ({basket?.length} items)</p>
      <CurrencyFormat amount={total}/>
    {
        console.log(total.length)
    }
    </div>
    <span>
      <input type="checkbox" />
      <small>This order contains a gift</small>
    </span>
    <Link to="/Payments">Continue to checkout</Link>
   </div>

)}
     </section>
    </LayOut>
  )
}

export default Cart