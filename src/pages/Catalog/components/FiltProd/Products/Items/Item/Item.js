import React from 'react'

export default function Item({id,prod}) {
    const addOnCart = (id) => {
        var cart = JSON.parse(localStorage.getItem('carts'))
        cart.quantity++
        let item = [
            {
                id: id,
                quantity: 1
            }
        ]
        cart.product.push(item)
        localStorage.setItem('carts',JSON.stringify(cart))
        console.log(cart.product)
    }
    return (
        <div className="col-sm-6 col-md-4 product">
            <a href="#favorites" className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline" /></a>
            <a href="./"><img src={prod.image} alt={prod.description} /></a>
            <div className="content">
                <h1 className="h4">{prod.name}</h1>
                <p className="price">${prod.price}</p>
                <label>{prod.category}</label>
                <a href="../catalog/product.html" className="btn btn-link"> Details</a>
                <button className="btn btn-primary btn-rounded btn-sm" onClick={() => addOnCart(id)}>
                    <i className="ion-bag" />
                    Add to cart
                </button>
            </div>
        </div>
    )
}
