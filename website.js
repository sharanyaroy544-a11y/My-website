const http = require('http');
const fs = require('fs');
const server=
http.createServer((req,resp)=>{
   if(req.url==="/style.css"){
    resp.writeHead(200,{"content-type":"text/css"});
    return resp.end(fs.readFileSync("html/style.css"));
  }
       let file=
       "html/hom.html"; 
 if (req.url === "/about")file= "html/about.html";

 if (req.url ==="/services")file="html/service.html";
 
  if(req.url==="/contact")file="html/contact.html";
 
    resp.writeHead(200,{"content-type":"text/html"})
    resp.end(fs.readFileSync(file));
});
    

server.listen(3200)
