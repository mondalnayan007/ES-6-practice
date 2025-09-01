



// const greetings = (name) => {
//     console.log(" Hello ",name);
// }

// const cb =(callback) => {
//     callback("Nayan");
// }
// cb(greetings);


const printSum = (sum) => {
    console.log("Sum is :" , sum);
}

const sumCount = (cb) => {
    const value = (a , b) => {
        return a + b;
    }
    const result = value(60 ,40);
   
    
    cb(result);
}
const values =  sumCount(printSum);




