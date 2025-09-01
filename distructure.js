

const person = {
    name: "Nayan",
    id: 210091,
    district :"Barishal",
    mobiles : {
        brand : {
             name: "Redmi"
        },
        price: 20000

    }
}

const {name,id,district, mobiles} = person;
// console.log(name,id,district,mobiles.brand);


// Array Distructure

const arr = [ "nayan" , 91, "mondal" , 22 , 56, 74, 98];

const [first,second,third,fourth, ...fifth] = arr;  //sprade operation
console.log(first,second,third,fourth,fifth);

