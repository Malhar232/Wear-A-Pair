import React from 'react';
// import {Link} from 'react-router-dom';
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import '../styles/showCase.scss';
import {FaArrowRight} from 'react-icons/fa'
function Showcase(){
    
    return(
        <div className="showCase">
            <div className="showCase_container">
                <div className="card">
                        <img src={s1} alt="sneaker-1" width="150px"/>
                </div>
                <div className="card-title">
                    <h1>Nike</h1>
                    <br/>
                    <b>Shop Now <FaArrowRight size="0.5em"/></b>
                </div>
            </div>
            <div className="showCase_container">
                <div className="card">
                        <img src={s2} alt="sneaker-2" width="150px"/>
                </div>
                <div className="card-title">
                    <h1>Nike</h1>
                    <br/>
                    <b>Shop Now <FaArrowRight size="0.5em"/></b>

                </div>
            </div>
            <div className="showCase_container">
                <div className="card">
                        <img src={s3} alt="sneaker-3" width="150px"/>
                </div>
                <div className="card-title">
                    <h1>Nike</h1>
                    <br/>
                    <b>Shop Now <FaArrowRight size="0.5em"/></b>

                </div>
            </div>
           
            <div className="scroll_for_more">
            <h1>Scroll for More</h1>
            <a href="#Products">
                <div id="mouse-scroll">
                    <div>
                        <span className="down-arrow-1"></span>
                        <span className="down-arrow-2"></span>
                        <span className="down-arrow-3"></span>
                    </div>
                </div>
            </a>
    
            </div>
        </div>
       
    )
}
export default Showcase;