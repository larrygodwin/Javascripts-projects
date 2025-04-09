function reverseArrayInPlace(arry){
    for(let i = 0; i < arrayValue.length / 2; i++){
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        old = array[array.length - 1 - i];
    }
    return array;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);