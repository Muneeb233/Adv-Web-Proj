import React from 'react'
import BtnRender from './BtnRender'
import { Link } from 'react-router-dom'
import Loading from '../loading/Loading'

function ProductItem({product }) {

    return (
        
        <div className="product_card">
           <img src={product.images.url} alt=""/>

          <div className="product_box">
            <h2 title={product.title}>{product.title}</h2>
            <span>{product.price} pkr</span>
            <p>{product.description}</p>
          </div>
          <BtnRender product={product} />
        </div>
        
    )
}

export default ProductItem