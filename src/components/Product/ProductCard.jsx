import React from 'react'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'


function ProductCard({product,flex,renderDesc,renderAdd}) {
    const { image, title, id, rating, price,description  } = product;
  return (
    <div  className={`${classes.card__container} ${flex?classes.product__flexed : ''}`}>
        <a herf={`/products/${id}`}>
            <img src={image} alt="" className={classes.img_container}/>
        </a>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
            <div className={classes.rating}>
                
                  <small>{rating?.count}</small>
            </div>
            <div>
                
                <CurrencyFormat amount={price}/>
            </div>

        </div>

    </div>
  )
}

export default ProductCard