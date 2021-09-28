import React from 'react';
import loader from '../assets/loader.gif';
function LoadingScreen(){
    return(
        <img src={loader} alt="loader" style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-60%)'}}></img>
    )
}
export default LoadingScreen;