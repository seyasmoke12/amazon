import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { productUrl } from '../../Api/endPoints'
import LayOut from '../../components/LayOut/LayOut';
import ProductCard from '../../components/Product/ProductCard';
import classes from "./Results.module.css"
function Results() {
    const [results, setResults] = useState([]);
    const {categoryName} = useParams()


    useEffect(() => {

    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
        setResults(res.data)
        // console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
    
    }, [])
    console.log(results)


    
   
  return (
    <LayOut>
         <section>
<h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
       <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
           key={product.id}
            product={product}
          renderDesc={false}
                renderAdd={true}
              />
          ))}
        </div>
      </section>
    </LayOut>
  )
}

export default Results