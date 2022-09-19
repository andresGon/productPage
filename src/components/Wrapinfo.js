import React, { useState } from "react";
import iconCart from "../assets/icon-cart.svg"
import img01 from "../assets/image-product-1.jpg"
import img02 from "../assets/image-product-2.jpg"
import img03 from "../assets/image-product-3.jpg"
import img04 from "../assets/image-product-4.jpg"

import img01Xs from "../assets/image-product-1-thumbnail.jpg"
import img02Xs from "../assets/image-product-2-thumbnail.jpg"
import img03Xs from "../assets/image-product-3-thumbnail.jpg"
import img04Xs from "../assets/image-product-4-thumbnail.jpg"

const WrapInfo = () => {
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState(0);

    console.log(image)
    return(
        <>
            <div className="wrapInfo-wrap">
                <div className="wrapInfo-col">
                    <figure className="product-wrapImg">
                        <img src={img01} />
                    </figure>

                    <div className="product-rowThumbnail">
                        <div className="product-thumbnail active" onClick={()=>setImage(0)}>
                            <img src={img01Xs}/>
                        </div>
                        <div className="product-thumbnail" onClick={()=>setImage(1)}>
                            <img src={img02Xs}/>
                        </div>
                        <div className="product-thumbnail" onClick={()=>setImage(2)}>
                            <img src={img03Xs}/>
                        </div>
                        <div className="product-thumbnail" onClick={()=>setImage(3)}>
                            <img src={img04Xs}/>
                        </div>
                    </div>
                </div>
                <div className="wrapInfo-col">
                    <div className="product-brand">Sneaker company</div>
                    <h1 className="product-name">
                        Fall limited edition Sneakers
                    </h1>
                    <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="product-wrapPrice">
                        <div className="product-rowUpPrice">
                            <div className="product-price">$125.000</div>
                            <div className="product-discount">50%</div>
                        </div>
                        <div className="product-oldPrice">$250.00</div>
                    </div>


                    <div className="product-wrapBtn">
                        <div className="product-wrapQuantity">
                            <button className="product-minusQuantity" onClick={()=>setQuantity(quantity - 1)}>-</button>
                            <div className="product-numQuantity">{quantity}</div>
                            <button className="product-minusQuantity" onClick={()=>{setQuantity(quantity + 1)}}>+</button>

                        </div>
                        <button className="product-btn">
                            <img src={iconCart} alt="Icon cart"/>
                            <span>Add to cart</span>
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default WrapInfo;