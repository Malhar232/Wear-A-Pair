import React,{useEffect,useState} from 'react'
import '../styles/ProductScreen.scss'
import '../styles/Product.scss'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'
import Product from './Product'

function ProductScreen(){
  window.addEventListener('load', function(){
  
})
    const [animationEnd,setanimationEnd]=useState(false)
    const container = {
        hidden: { opacity: 1, scale:1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            ease:"easeInOut"
          }
        }
      };
      
      
    const {ref,inView}=useInView(
        {threshold:0.3}
    )
    const animation=useAnimation()
    useEffect(() => {
      
        if(inView){
            
            animation.start({
                x:0,
                
            })
            setanimationEnd(true)
        }else{
            animation.start({
                x:'-100vw',
            }) 
            setanimationEnd(false)
        } // eslint-disable-next-line
    },[inView])
   

    return(
        <div ref={ref} className="ProductScreen">
            <motion.div  className="product_grid"
                animate={animation}
                transition={{ ease:"easeInOut",duration: 0.1}}
                >
                <h1>Products</h1>

                {animationEnd&&
                    <motion.div
                    className="product_container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    
                  >
                    {
                    
                    [0, 1, 2, 3,4,5,6,7,8,9,10,11].map((index) => (
                      <Product key={index} Id={index}/>
                    ))

                      
                    }
                  </motion.div>
                }

               
            </motion.div>
        </div>
    )
}
export default ProductScreen