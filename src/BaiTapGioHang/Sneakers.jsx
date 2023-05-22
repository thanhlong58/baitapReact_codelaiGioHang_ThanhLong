import React, { Component } from 'react'

export default class Sneakers extends Component {
    render() {
        const { sneak, addToCart } = this.props;
        return (
            <div className='card'>
                <img src={sneak.image} alt="..." />
                <div className='card-body'>
                    <h3>{sneak.name}</h3>
                    <p className='fs-5 fw-bold text-success'>${sneak.price}</p>


                </div>
                <div className='card-footer'>
                    <button className='btn btn-dark w-100' onClick={() => {
                        addToCart(sneak);
                    }} >
                        <i className='fa fa-cart-plus'></i>
                        Add to cart</button>



                    



                </div>

            </div>
        )
    }
}
