const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30]
const fruits = [];

function getFruit(fruits,arr) {
    fruits = fruits.splice(0, fruits.length)
    arr.forEach(elem => {
        if(elem % 3 === 0 && elem % 5 === 0){
            fruits.push('Apple Orange')
        }
        else if(elem % 3 === 0){
            fruits.push('Apple')
        }else if(elem % 5 === 0){
            fruits.push('Orange')
        }else{
            fruits.push(elem)
        }
    })
    return fruits;
}

function getFruitInReplace(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = 'Apple Orange'
        }else if(arr[i] % 3 === 0) {
            arr[i] = 'Apple'
        }else if(arr[i] % 5 === 0) {
            arr[i] = 'Orange'
        }
    }
    return arr;
}
console.log(getFruit(fruits, arr));
console.log(getFruitInReplace(arr));