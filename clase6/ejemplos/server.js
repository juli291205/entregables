const http=require('http');
const server =http.createServer((request,response)=> {
    response.end ("mi primer servidor con node js")
});

server.listen(8080,()=>{
    console.log("server listening on port 8080");
});