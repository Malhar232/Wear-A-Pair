import React,{useEffect} from 'react';

import IntroScreen from './IntroScreen';
import ProductScreen from './ProductScreen';

function WearAPair(){

  useEffect(() => {
    const mouse = document.querySelector(".cursor");
    const mouseTxt = document.querySelector(".cursor-text");
    function cursor(e) {
      mouse.style.top = e.pageY + "px";
      mouse.style.left = e.pageX + "px";
    }
    window.addEventListener("mousemove", cursor);

    function activeCursor(e) {
      const item = e.target;
      console.log(item)

      if (item.id === "logo" || item.classList.contains("nav-logo")) {
        mouse.classList.add("nav-active");
        console.log("found")
      } else {
        mouse.classList.remove("nav-active");
      }
      if (item.classList.contains("explore")||item.classList.contains("projects")||item.classList.contains("links_pro")) {
        mouse.classList.add("explore-active");
        mouseTxt.innerText = "Tap";
      } else {
        mouse.classList.remove("explore-active");
        mouseTxt.innerText = "";
      }
    }
    window.addEventListener("mouseover", activeCursor);


  }, []);
 
  
    return(   
    <div className="main_container">
      <div className="cursor">
        <span className="cursor-text"></span>
      </div>
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
