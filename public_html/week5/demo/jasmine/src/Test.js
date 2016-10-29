'use strict';


function reverseString(str){
    if ( typeof str !== 'string' ) return str;
    return str.split("").reverse().join("");
}


function getMaxOfArray(numArray) {
    if ( !Array.isArray(numArray) ) return numArray;
    return Math.max.apply(null, numArray);
}