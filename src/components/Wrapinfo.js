import React from "react";
import iconCart from "../assets/icon-cart.svg"
import img01 from "../assets/image-product-1.jpg"
const WrapInfo = () => {
    return(
        <>
            <div className="wrapInfo-wrap">
                <div className="wrapInfo-col">
                    <figure className="product-wrapImg">
                        <img src={img01} />
                    </figure>
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
                            <button className="product-minusQuantity">-</button>
                            <div className="product-numQuantity">0</div>
                            <button className="product-minusQuantity">+</button>

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