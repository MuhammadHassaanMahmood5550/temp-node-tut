////---Built-in Modules
//1. os module
//2. path module
//3. FS module
//4. HTTP module
//--path module

const path = require('path');
//path separater
console.log(path.sep);

const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);