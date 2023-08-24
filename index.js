/*const fs = require('fs');
 const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 console.log(textIn);
  fs.readFile('./txt/input.txt','utf-8',(err,data1)=>{
    console.log(data1);
    fs.readFile('./txt/start.txt','utf-8',(err,data2)=>{
      console.log(data2);
      fs.readFile('./txt/try.txt','utf-8',(err,data3)=>{
          console.log(data3);
          fs.writeFile(`./txt/${data3}.txt`, 'hello ishikaaa','utf-8' , err =>{
                console.log("written success");
                console.log(data3);       
                
          })
      });
      
    });
   
 });
console.log("hiiieee");
 const http = require("http");
const server = http.createServer((req,res)=>{
  res.end("hii from server side");

})
server.listen(8080, () => {
    console.log("hiie,listening")
})
*/
/*const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
 
    
 fs.readFile('./txt/try.txt','utf-8',(err,data3)=>{
  console.log(data3);
   fs.writeFile(`./txt/${data3}.txt`, 'hello ishikaaa','utf-8' , err =>{
       console.log("written success");     
       console.log(data3);  
       fs.readFile(`./txt/${data3}.txt`, 'utf-8',(err,data4)=>{
          console.log(data4);
                });
          });
      });
  */    
    

const fs = require("fs");
const http = require("http");
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const overview = fs.readFileSync(`${__dirname}/template/overview.html`, 'utf-8');
const data1 = JSON.parse(data);
const card = fs.readFileSync(`${__dirname}/template/card.html`, 'utf-8');


const server = http.createServer((req,res)=>{
  const pathname = req.url;
  if(pathname == '/home'){
    res.end("I m goddd");
    

  }
  else if (pathname=='/'){
    res.writeHead(200,{

      "Content-Type": "application/json",
      
    
    });
    res.end(data);
  }
  else if(pathname =='/api'){
    res.map
    res.end(overview);
  }  
  else if(pathname =='/try'){
    res.writeHead(200,{
      "Content-type" : "text/html",
    });
    res.end(card);
  }
  
  else{
  res.writeHead(404,{

  "Content-type": "text/html",
  

});
res.end('<h1>Sorry for the inconvience</h1>');
  }

});

server.listen(8080, () => {
    console.log("hiie,listening")
})