

// const greeting = (name) => {
//     console.log("hello : " ,  name)
// }

// const callback = (callback) => {
//     callback(callback);
// }

// callback(greeting);

const greetings = (name) => {
    console.log(" Hello ",name);
}

const cb =(callback) => {
    callback("Nayan");
}
cb(greetings);