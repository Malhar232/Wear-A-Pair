import React,{useEffect,useState} from 'react'
import '../styles/ProductScreen.scss'
import '../styles/Product.scss'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'
import Product from './Product'
import productsData from './productsData.js'
function ProductScreen(){
    const [products,setproducts]=useState([...productsData.products])
    const [animationEnd,setanimationEnd]=useState(false)
    const [filterByCategory,setfilterByCategory]=useState([])
    const [filterBySearch,setfilterBySearch]=useState(null)
    const [filterByStars,setfilterByStars]=useState(null)

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

    useEffect(()=>{
      
      let fA=[...productsData.products]
      let FC=[]
      let FS=[]
      let temp=[]
      if(filterByCategory.length===0){
        if(filterByStars){
          setproducts([...productsData.products])
          temp=fA.filter((p)=>p.Rating===filterByStars)
          setproducts(temp)
          FS=[...temp]
          if(filterBySearch){
            temp=FS.filter((p)=>p.ProductName.toLowerCase().includes(filterBySearch.toLowerCase()))
            setproducts(temp)
            }else{
              setproducts(FS)
            }  
        }else{
          if(filterBySearch){
            temp=fA.filter((p)=>p.ProductName.toLowerCase().includes(filterBySearch.toLowerCase()))
            setproducts(temp)
            }else{
              setproducts([...productsData.products])
            }

        }
        
      }else{
        setproducts([...productsData.products])
        for(let i=0;i<filterByCategory.length;i++){
            temp=[...temp,...fA.filter((pf)=>pf.Category.indexOf(filterByCategory[i])!==-1)]
            setproducts([...new Set(temp)])
        }
        FC=[...new Set(temp)]

        if(filterByStars){
          setproducts([...productsData.products])
          temp=FC.filter((p)=>p.Rating===filterByStars)
          setproducts(temp)

          FS=[...temp]

          if(filterBySearch){
            temp=FS.filter((p)=>p.ProductName.toLowerCase().includes(filterBySearch.toLowerCase()))
            setproducts(temp)
          }else{
            setproducts(FS)
          }  
        }else{
          setproducts([...productsData.products])
          for(let i=0;i<filterByCategory.length;i++){
              temp=[...temp,...fA.filter((pf)=>pf.Category.indexOf(filterByCategory[i])!==-1)]
              setproducts([...new Set(temp)])
          }
          FC=[...new Set(temp)]

          if(filterBySearch){
            temp=FC.filter((p)=>p.ProductName.toLowerCase().includes(filterBySearch.toLowerCase()))
            setproducts(temp)
            }else{
              setproducts(FC)
            } 
  
        }
        

        
      }
      
    },[filterByCategory,filterBySearch,filterByStars])


   
// Category

    function filterCategory(value,bool){
      if(value && bool){
        setfilterByCategory([...filterByCategory,value])
      }else{
        setfilterByCategory(filterByCategory.filter((val)=>val !== value))
      }
    }

    function filterSearch(query){
      if(query){
        setfilterBySearch(query)
      }else{
        setfilterBySearch(null)

      }
    }

    function filterStars(stars){
      console.log(stars)
      if(stars){
        setfilterByStars(stars)
      }else{
        setfilterByStars(null)

      }
    }
    return(
        <div ref={ref} className="ProductScreen">
            <motion.div  className="product_grid"
                animate={animation}
                transition={{ ease:"easeInOut",duration: 0.1}}
                >
                <h1>Products</h1>
                <input type="text" name="SearchBar" placeholder="Search a Pair..." onChange={(e)=>{filterSearch(e.target.value.trim())}}/>
                <br/>
                <input type="radio" name="stars" value="1" id="star1" onChange={(e)=>{filterStars(e.target.value)}}/>1
                <input type="radio" name="stars" value="2" id="star2" onChange={(e)=>{filterStars(e.target.value)}}/>2
                <input type="radio" name="stars" value="3" id="star3" onChange={(e)=>{filterStars(e.target.value)}}/>3
                <input type="radio" name="stars" value="4" id="star4" onChange={(e)=>{filterStars(e.target.value)}}/>4
                <input type="radio" name="stars" value="5" id="star5" onChange={(e)=>{filterStars(e.target.value)}}/>5
                <input type="checkbox" name="Women" value="Women" id="Women" onChange={(e)=>{filterCategory(e.target.value,e.target.checked)}}/>
                <label htmlFor="Women">Women</label>
                <input type="checkbox" name="Men" value="Men" id="Men" onChange={(e)=>{filterCategory(e.target.value,e.target.checked)}}/>
                <label htmlFor="Men">Men</label>
                <br/>
                <input type="checkbox" name="Kids" value="Kids" id="Kids" onChange={(e)=>{filterCategory(e.target.value,e.target.checked)}}/>
                <label htmlFor="Kids">Kids</label>

                {animationEnd&&
                    <motion.div
                    className="product_container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    
                  >
                    {
                   
                    products.map((product,index)=>{
                      return <Product key={product.id} Category={product.Category} ProductName={product.ProductName} ProductImg={product.ProductImg} Price={product.Price} Colors={product.Colors} Rating={product.Rating} Fav={product.Fav} Id={product.id} />
                    }) 
                    
                    }
                  </motion.div>
                }

               
            </motion.div>
        </div>
    )
}
export default ProductScreen