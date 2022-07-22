const arr = [25, 53, 48, 56, 1929]
const fruits = [];


function getFruit(arr) {
    arr.forEach(elem => {
        if(elem % 3 === 0){
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
        if(arr[i] % 3 === 0) {
            arr[i] = 'Apple'
        }else if(arr[i] % 5 === 0) {
            arr[i] = 'Orange'
        }
    }
    return arr;
}
console.log(getFruit(arr));
console.log(getFruitInReplace(arr));