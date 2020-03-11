import React from 'react';


const Word =( {word} ) =>{
    if(isNaN(word)){
        return (<h1>this word: {word}</h1>)
    }
    else{
        return (<h1>this num:{word}</h1>)
    }
}
export default Word;