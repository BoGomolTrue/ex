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

console.log(getFruit(arr));