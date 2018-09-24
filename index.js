var ws = require("ws");
var express = require("express");
var Store = require("data-store");
var user = new Store("user");
var calendar = new Store("calendar");
var http = require("http");
var path = require("path");
var app = express();
var server = http.createServer(app);
var wss = new ws.Server({server});
app.use(express.static(path.join(__dirname,"static")));
wss.on("connection",(ws)=>{//ws from computer or android phone
	ws.on("ping",function(){
		ws.emit("pong");
	});
	ws.on("message",(data)=>{
		var msg = JSON.parse(data);
		switch (msg.op){
			case "user":
				
		}
	})
});
server.listen(80);