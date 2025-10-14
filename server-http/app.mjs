import http,{IncomingMessage,ServerResponse} from "http";

const server = http.createServer((req,res) => {
    res.end();
});

server.listen(3000,() => {
    console.log("server listen on http://0.0.0.0:3000");
    
})

