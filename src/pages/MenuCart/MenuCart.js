import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './cart.css';


class MenuCart extends Component {

    render() {
        return (
            <div className="menu-cart">
            <div className="overlay" onClick={() => this.props.handlerToggle()}></div>
                <div className="cart">
                    <p onClick={() => this.props.handlerToggle()} style={{cursor: "pointer"}}> <FontAwesomeIcon icon={faXmark} /></p>
                    <p>My Cart</p>
                   
                    <div className="summary">
                        <p>Cart Summary</p>
                    </div>
                    <div style={{display: `${this.props.statePro.price ? 'block' : 'none'}`}}>
                        <div className="product-purchased">
                            <div className="product-purchased-img">
                                <img src={this.props.statePro.imgState} alt="Img"/>
                            </div>
                            <div className="product-purchased-data">
                                <div className="product-purchased-name">
                                    <p>{this.props.statePro.name}</p>
                                </div>        
                                <div className="product-purchased-end">
                                    <div className="product-purchased-price">
                                        <p className="product-purchased-quantity">Quantity {this.props.statePro.quantity}</p>
                                        <p className="product-purchased-newprice">{this.props.statePro.price} <small>LE</small></p>
                                    </div>                           
                                    <div className="product-purchased-delete">
                                        <button>Remove</button>
                                    </div> 
                                </div>                        

                            </div>

                        </div>
                        <div className="product-purchased-check">
                            <button>Reveiw Cart</button> <button>Complete Checkout</button>
                        </div>                    
                    </div>

                    <div style={{display: `${this.props.statePro.price ? 'none' : 'block'}`}}>
                        <p>Your Cart is empty !</p>
                    </div>

                </div>

            </div>
        )
    }
}
export default MenuCart;