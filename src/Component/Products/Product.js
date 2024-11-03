import React from 'react'
import './_product.scss';

export default function Product() {
    const productDat = [
        {
            pName: "Jacket",
            price: 45,
            img: "Men_1.jpg"
        }, {
            pName: "Full Sleeve",
            price: 60,
            img: "Men_2.jpg"
        }, {
            pName: "Shirt",
            price: 90,
            img: "Men_3.jpg"
        }, {
            pName: "Jeans",
            price: 45,
            img: "Men_4.jpg"
        }, {
            pName: "Blazer",
            price: 100,
            img: "Men_5.jpg"
        }, {
            pName: "Coat",
            price: 120,
            img: "Men_6.jpg"
        },
    ]
    return (
        <div className='product-container'>
            {
                productDat.map((product, index) => {
                    return (
                        <div className='mx-5 p-3  product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../Assets/Images/' + product.img)} />

                            </div>
                            <div className='product-info'>
                                <h5><a href='#'>{product.pName}</a></h5>
                                <p className='product-price'>${product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
