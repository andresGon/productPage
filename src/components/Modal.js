import React from "react";

import img01 from "../assets/image-product-1.jpg"
import img02 from "../assets/image-product-2.jpg"
import img03 from "../assets/image-product-3.jpg"
import img04 from "../assets/image-product-4.jpg"

import img01Xs from "../assets/image-product-1-thumbnail.jpg"
import img02Xs from "../assets/image-product-2-thumbnail.jpg"
import img03Xs from "../assets/image-product-3-thumbnail.jpg"
import img04Xs from "../assets/image-product-4-thumbnail.jpg"


const Modal = ()=>{
    return(
        <div className="modal-wrap">
            <div className="modal-inner">
                <div className="modal-wrapImg">
                    <div className="modal-close"></div>
                    <button className="modal-btn modal-btn__prev"></button>
                    <img src={img01} className="modal-imgMain" />
                    <button className="modal-btn modal-btn__next"></button>
                </div>
                <div className="modal-rowImg">
                    <img src={img01Xs} />
                    <img src={img02Xs} />
                    <img src={img03Xs} />
                    <img src={img04Xs} />

                </div>
            </div>
        </div>
    )
}

export default Modal