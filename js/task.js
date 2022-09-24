'use strict';

//1. indexOf
const arrIndexOf = [1,4,32,4,2,2,2];
const indexOf = (arrIndexOf, item) => {
    for(let i = 0; i < arrIndexOf.length; i += 1){
        if(arrIndexOf[i] === item){
            return  console.log(i);
        }
    }
    return -1;
}
indexOf(arrIndexOf,2);

//2. lastIndexOf
const arrLastIndexOf = ['red','blue','green','yellow'];
const lastIndexOf = ( arrLastIndexOf, item) => {
    for ( let i = arrLastIndexOf.length; i > -1; i--) {
        if ( arrLastIndexOf[i] === item) {
            return console.log(i);
        }
    }
    return -1;
}

lastIndexOf(arrLastIndexOf, 'yellow');

//3.find
const arrFind = [ 1, 2, 3, 4, 5, 6];
const find = (arr , item) => {
    for ( let i = 0; i < arr.length; i++) {
        if ( item(arr[i]) ) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(find(arrFind, (item) => {
    return item === 3 ;
}));

//4.findIndex
const arrFindIndex = [ 1, 2, 3, 4, 'number 5', 6, 7, 8, 9,10];
const findIndex = (arr, index) => {
    for(let i = 0; i < arr.length; i += 1){
        if( index(arr[i]) ){
            return i;
        }
    }
    return -1;
}
console.log(findIndex(arrFindIndex, (index) => {
    return index === 4;
}));

//5.includes
const arrIncludes = [ 1, 2, "8", 4,'boom',10];
const includes = (arr, element) => {
    for(let i = 0; i < arr.length; i += 1){
        if(arr[i] === element){
            return true;
        }
    }
    return false;
}

console.log(includes(arrIncludes,"boom"));

//6.every
const arrEvery = [ 1, 2, 4, 6, 7, 8,10];
const every = (arr, callbackFunk) => {
    for(let i = 0; i < arr.length; i += 1){
        if( !callbackFunk(arr[i]) ){
            return false;
        }
    }
    return true;
}

console.log(every(arrEvery, (condition) => {
    return condition > 0;
}));

//7.some
const arrSome = [ 7,3,43,2,9, '300'];
const some = (arr, callbackFunk) => {
    for(let i = 0; i < arr.length; i += 1){
        if( callbackFunk(arr[i].length) ){
            return true;
        }
    }
    return false;
}

console.log(some(arrSome, (condition) => {
    return condition > 3;
}));