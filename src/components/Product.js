
import React,{useEffect,useState} from 'react';
// import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import '../styles/Product.scss';
// import Grade from 'grade-js'
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {RiStarSFill} from 'react-icons/ri'
// import s2 from '../assets/s2.png'
function Product({Id,ProductName,ProductImg,Price,Colors,Rating,Fav,Category}){
    // const [rating, setrating] = useState(null)
    const [fav, setfav] = useState(false)
    // const [Hover, setHover] = useState(null)

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    
      useEffect(() => {
        
        let productImg=document.querySelector('.product_img_'+Id);
        let backdrop_product=document.querySelector('.product_backdrop_'+Id);
        
        var rgb = getAverageRGB(productImg);
        backdrop_product.style.backgroundColor = 'rgba('+rgb.r+','+rgb.g+','+rgb.b+','+0.4+')';
    
    function getAverageRGB(imgEl) {
        
        var blockSize = 20, 
            defaultRGB = {r:0,g:0,b:0}, 
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data, width, height,
            i = -4,
            length,
            rgb = {r:0,g:0,b:0},
            count = 0;
            
        if (!context) {
            return defaultRGB;
        }
        
        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
        
        context.drawImage(imgEl, 0, 0);
        
        try {
            data = context.getImageData(0, 0, width, height);
        } catch(e) {
            
            return defaultRGB;
        }
        
        length = data.data.length;
        
        while ( (i += blockSize * 4) < length ) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i+1];
            rgb.b += data.data[i+2];
        }
        
        rgb.r = ~~(rgb.r/count);
        rgb.g = ~~(rgb.g/count);
        rgb.b = ~~(rgb.b/count);
        
        return rgb;
        
    }
    
      }, [Id])
        
    
    return(
        <motion.div className="product" variants={item} >
            <div className="product_img_div">
                <div className={// eslint-disable-next-line
                `${'product_img_backdrop'+' product_backdrop_'+Id}`} >
                <p className="card-price">₹ {Price}/-</p>
                    
                    <img className={// eslint-disable-next-line
                `${'product_img'+' product_img_'+Id}`} src={ProductImg} alt={ProductImg} width="200px"/>
                </div>
            </div>

            <div className="product_name_div">
                <h2>{ProductName}</h2>
            </div>
            <div className="product_details_div">
                <h4>{Colors} Colors Available</h4>
            
                <br/>
                <div className="product_rating">
                    {/* {[...Array(5).fill()].map((star,index)=><label key={index+1}><input type="radio" name="rating" value={index+1} onClick={()=>setrating(index+1)}/><RiStarSFill color={index+1<= (rating || Hover)?"#ffc107":"gray"} className="star"  size="1.8em" onMouseEnter={()=>setHover(index+1)} onMouseLeave={()=>setHover(null)}/></label>)} */}
                    {[...Array(5).fill()].map((star,index)=><RiStarSFill key={index+1} color={index+1<= (Rating)?"#ffc107":"gray"} className="star"  size="1.8em"/>)}
                </div>
                <br/>
                <div className="product_buttons">
                    <button>Add to cart  <FaShoppingCart size="1.2em" style={{paddingBottom:"2.5px"}}/></button>
                    <button onClick={()=>setfav(!fav)}><AiFillHeart size="2em" color={fav?"rgb(189, 2, 2)":"gray"} className="Fav"/></button>
                </div>
            </div>

                {/* <img src={s2} alt={s2} width="300px"/> */}

            
        </motion.div>
       
    )
}
export default Product;
