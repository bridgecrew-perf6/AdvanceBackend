import React from 'react'

export default function productComponent({product}) {

    const {brandname, price, image_url} = product;

  return (
    <div className="Box">
        <div className="image">
            <img src={image_url} alt=""/>
        </div>
        <div className="info">
            <div className="brand">
                {brandname}
            </div>
            <div className="price">
                {price}
            </div>
        </div>
    </div>

  )
}
