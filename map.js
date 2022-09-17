let words= ['these', 'words', 'need', 'capitlization']

let caps= words.map(word => word.toUpperCase())

console.log(caps)

var numbers= [1, 2, 3 , 4 ,5]
var doubled= numbers.map(function(num){
    return num*2 
});
console.log(doubled);

let numbers_1= [ 13, 22, 36, 54, 55]

let evenNumbers= numbers_1.filter(number=> number % 2 ==0)

console.log(evenNumbers)