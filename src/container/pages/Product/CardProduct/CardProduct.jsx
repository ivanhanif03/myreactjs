import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://cf.shopee.co.id/file/777c6f9850a53ab4d07089d7f5f2ef4b" alt=""/>
                </div>
                <p className="product-title">Jaket Jeans</p>
                <p className="product-price">Rp. 119.999</p>
                <Counter />
            </div> 
        );
    }
}

export default CardProduct;