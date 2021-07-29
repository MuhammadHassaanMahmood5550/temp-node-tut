////---Node uses library CommonJS.
////---CommonJS, every file is module (by default)
////---Modules - Encapsulated code (only share minimum)

////--using global require
// const {jhon, peter} = require('./4-firstModule');
// console.log(`${jhon} ${peter}`);

// const sayHi = require("./5-secondModule");
// sayHi("hassaan");
// sayHi(jhon);
// sayHi(peter);

////--alternative way to use modules in 6-alternativeModiule.js 

// const data = require("./6-alternativeModule");
// console.log(data.items);
// console.log(data.person);

////-- 7-mind-granade
require('./7-mind-grenade');
