////---Built-in Modules
//1. os module
//2. path module
//3. FS = file system module
//4. HTTP module

//--http module
const http = require('http');
//both paraments, req = request(incoming request by clint) and res = response(what we are sending back to clint) are objects
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('welcome to about page');
    }
    res.end(` 
    <h1>Oops!</h1> 
    <p>we can't seem to find that page you are looking for.</p> 
    <a href="/">back to home page</a> 
    `)
// response.write(`welcome to our home page`)
// response.end()
})
//port server is = 5000
server.listen(5000)

