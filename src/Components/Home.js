import React from 'react';
import{ connect } from 'react-redux';
import{addBasket} from '../Actions/addActions';         

const Home=(props)=> {
    console.log(props);  
    return(
        <div className="container">

           
          <div className="image">
                <img src={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"} alt="VALOUR BLUE" title='VALOUR BLUE'/>
                <h3>VALOUR BLUE</h3>
                <h3>$400</h3>
                <button onClick={() =>props.addBasket('legocar3')} className="addToCart cart1" >Add to Cart</button>
                
           </div>
           <div className="image">
                <img src={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"} alt="JORDAN MARS 270 LONDON" title='JORDAN MARS 270 LONDON'/>
                <h3>JORDAN MARS 270 LONDON</h3>
                <h3>$450</h3>
                <button onClick={() =>props.addBasket('legoporsche')} className="addToCart cart2" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"} alt="RACER BLUE" title='RACER BLUE'/>
                <h3>RACER BLUE</h3>
                <h3>$380</h3>
                <button onClick={() =>props.addBasket('traxxas')} className="addToCart cart3" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fjordan-6-rings-unc-valor-blue-ice-white-cw7037-100-release-000.jpg?w=960&cbr=1&q=90&fit=max"} alt="AIR JORDON 3 UNC" title='AIR JORDON 3 UNC'/>
                <h3>AIR JORDON 3 UNC</h3>
                <h3>$460</h3>
                <button onClick={() =>props.addBasket('biglogo')} className="addToCart cart4" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw2c81b3b4/images/2.1/mens-shoes/dalton-1111-walnut-angle-web.jpg?sw=736&sh=736&sm=fit"} alt="Dalton Wingtip Dress Boots" title='Dalton Wingtip Dress Boots'/>
                <h3>Dalton Wingtip Dress Boots</h3>
                <h3>$390</h3>
                <button onClick={() =>props.addBasket('legocar4')} className="addToCart cart5" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwed66373b/images/2.1/mens-shoes/Dalton_3512_BrownCordovan_Angle_web.jpg?sw=736&sh=736&sm=fit"} alt="Dalton Shell Cordovan Dress Boots" title='Dalton Shell Cordovan Dress Boots'/>
                <h3>Dalton Shell Cordovan Dress Boots</h3>
                <h3>$410</h3>
                <button onClick={() =>props.addBasket('legocharger')} className="addToCart cart6" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw63cdeba1/images/2.1/mens-shoes/higginsmill-7562-brown-angle-web.jpg?sw=736&sh=736&sm=fit"} alt="Higgins Mill Boot with Chromexcel Leather" title='Higgins Mill Boot with Chromexcel Leather'/>
                <h3>Higgins Mill Boot with Chromexcel Leather</h3>
                <h3>$430</h3>
                <button onClick={() =>props.addBasket('legododge')} className="addToCart cart7" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwf9985376/images/2.1/mens-shoes/dalton-115-oxblood-angle-web.jpg?sw=736&sh=736&sm=fit"} alt="Dalton Wingtip Dress Boots" title='Dalton Wingtip Dress Boots'/>
                <h3>Dalton Wingtip Dress Boots</h3>
                <h3>$480</h3>
                <button onClick={() =>props.addBasket('legofigure2')} className="addToCart cart8" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw73cfa106/images/2.1/mens-shoes/Neumok_3353_DenimSuede_Angle_web.jpg?sw=736&sh=736&sm=fit"} alt="Neumok Suede Wingtip Oxford" title='Neumok Suede Wingtip Oxford'/>
                <h3>Neumok Suede Wingtip Oxford</h3>
                <h3>$390</h3>
                <button onClick={() =>props.addBasket('legostarwars')} className="addToCart cart9" >Add to Cart</button>
            </div>
            <div className="image">
                <img src={"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw3007117f/images/2.1/mens-shoes/BrooklynLightWingtip_3297_Walnut_Angle_web.jpg?sw=736&sh=736&sm=fit"} alt="Brooklyn Light Wingtip Derby" title='Brooklyn Light Wingtip Derby'/>
                <h3>Brooklyn Light Wingtip Derby</h3>
                <h3>$296</h3>
                <button onClick={() =>props.addBasket('minecraftlego')} className="addToCart cart10" >Add to Cart</button>
            </div>


           
        </div>
    );
}
export default connect(null, {addBasket})(Home);