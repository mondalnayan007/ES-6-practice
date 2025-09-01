
const arr = [ 20, 34, 67, 45, 19 , 15, 90]

// reduce

const sum = arr.reduce((acc,curr) => {
  return acc + curr ;
},0)
// console.log(sum);


// filter method 


const adult = arr.filter((num) => num >= 20)
// console.log(adult);

// find method 

const adult2 = arr.find((num) => num >= 40)
console.log(adult2);