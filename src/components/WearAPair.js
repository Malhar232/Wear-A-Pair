import React from 'react';

import IntroScreen from './IntroScreen';
import ProductScreen from './ProductScreen';

function WearAPair(){
    return(   
    <div className="main_container">
      <section className="Home" >
        <IntroScreen/>
      </section>
      <section className="Products" id="Products">
        <ProductScreen />
      </section>
      
      

    </div>
    
    )
}
export default WearAPair;
