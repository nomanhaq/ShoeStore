import React, { Fragment } from 'react' 
import{productQuantity,clearProduct} from '../Actions/productQuantity.js';
import{ connect } from 'react-redux';

function Cart({basketProps,productQuantity,clearProduct}){
    console.log (basketProps);

    let productsInCart=[];
    
    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item]) 
        }
        console.log(productsInCart);
    });
   //const productImages=[evilminion,babygroot,traxxas,biglogo,legocar3,legocar4,legocharger,legododge,legofigure2,legoporsche,legostarwars,minecraftlego,minionlego,nerf3,nerf4,stroomtrooper
    
    const productImages=(product) => {
        if(product.tagName==='traxxas'){
            return "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1";
        }else if(product.tagName==='biglogo'){
            return "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fjordan-6-rings-unc-valor-blue-ice-white-cw7037-100-release-000.jpg?w=960&cbr=1&q=90&fit=max";
        }else if(product.tagName==='legocar3'){
            return "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1";
        }else if(product.tagName==='legocar4'){
            return "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw2c81b3b4/images/2.1/mens-shoes/dalton-1111-walnut-angle-web.jpg?sw=736&sh=736&sm=fit";
        }else if(product.tagName==='legocharger'){
            return "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwed66373b/images/2.1/mens-shoes/Dalton_3512_BrownCordovan_Angle_web.jpg?sw=736&sh=736&sm=fit";
        }else if(product.tagName==='legododge'){
            return "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw63cdeba1/images/2.1/mens-shoes/higginsmill-7562-brown-angle-web.jpg?sw=736&sh=736&sm=fit";
        }else if(product.tagName==='legofigure2'){
            return "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwf9985376/images/2.1/mens-shoes/dalton-115-oxblood-angle-web.jpg?sw=736&sh=736&sm=fit";
        }else if(product.tagName==='legoporsche'){
            return "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1";
        }else if(product.tagName==='legostarwars'){
            return "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw73cfa106/images/2.1/mens-shoes/Neumok_3353_DenimSuede_Angle_web.jpg?sw=736&sh=736&sm=fit";
        }else if(product.tagName==='minecraftlego'){
            return "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw3007117f/images/2.1/mens-shoes/BrooklynLightWingtip_3297_Walnut_Angle_web.jpg?sw=736&sh=736&sm=fit";
 
        }
    }

    productsInCart=productsInCart.map( (product,index)=>{
        console.log("My product is");
        console.log(product);
        return(
            <Fragment key={index}>
                
                 <div className="product"><ion-icon onClick={()=>clearProduct(product.tagName)}name="close-circle-outline"></ion-icon><img src={productImages(product)} alt={product.name} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon onClick={()=>productQuantity('decrease',product.tagName)}className="decrease"name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={()=>productQuantity('increase',product.tagName)}className="increase"name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });
    return (
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
            <h4 className="basketTotal">${basketProps.cartCost},00</h4>
        </div>
    </div>
    )

}
const mapStateToProps=state=>({
    basketProps:state.basketState 
});
export default connect( mapStateToProps,{productQuantity,clearProduct})(Cart);