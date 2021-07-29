////---Built-in Modules
//1. os module
//2. path module
//3. FS = file system module
//4. HTTP module

//--FS Async
const {readFile, writeFile} = require('fs');
console.log("stated async(sequence not nessary )");

// filename then encoding(utf8) then callback function
readFile('./content/first.txt', 'utf8', (err,result) =>{
  if(err){
      console.log(err);
      return
  }
  const firstText = result;
  console.log(firstText);
  //again for second txt
  readFile('./content/second.txt', 'utf8', (err,result) =>{
    if(err){
      console.log(err);
      return
  }
  const secondText = result;
  console.log(secondText);
  //for writing if file not exits node will create
  writeFile('./content/result-async.txt', `      this text is added using async FS`,
  (err,result)=>{
   if(err){
       console.log(err);
       return
   }
   console.log(result);
   console.log("done with it");
  })
  })
})

