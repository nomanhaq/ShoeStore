import React, { Fragment } from 'react'
import{ connect } from 'react-redux';
import evilminion from'../Images/evil-minion.jpg';
import buzzlightyear from'../Images/buzz-lightyear.jpg';
import killerrobot from'../Images/killer-robot.jpg';
import babygroot from'../Images/baby-groot.jpg';

function Cart({basketProps}){
    console.log (basketProps);

    let productsInCart=[];
    
    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        
    });
    const productImages=[evilminion,buzzlightyear,killerrobot,babygroot]
    productsInCart=productsInCart.map((product,index)=>{
        console.log("my product is");
        console.log(product);
        return(
            <Fragment>
                <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon className="decrease"name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon className="increase"name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });
    return(
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="product">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    basketProps:state.basketState
});
export default connect( mapStateToProps )(Cart);