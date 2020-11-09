import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';
import {connect} from 'react-redux';

class Product extends Component {
    // state = {
    //     order: 4 
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState ({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Logo-compass.svg/800px-Logo-compass.svg.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                        <div className="count">{0}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

// export default connect(mapStateToProps)(Product);
export default Product;