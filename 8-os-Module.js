////---Built-in Modules
//1. os module
//2. path module
//3. FS module
//4. HTTP module
//--os
const os = require('os');
// info about current user
const user = os.userInfo()
console.log(user);
// method return the system uptime in seconds
console.log(`the system running time is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release:os.release(),
    //total memory
    totalMem: os.totalmem(),
    freeMen: os.freemem()
}
console.log(currentOS);