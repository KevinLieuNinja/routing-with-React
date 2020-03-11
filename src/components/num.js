import React from 'react';


const Number =( {str,color,colorText} ) =>{
    const style ={
        backgroundColor: color,
        color: colorText
    }
    return(
        <div style = {style}>
            <h1> word is {str}</h1>
            
        </div>
    )
}
export default Number;