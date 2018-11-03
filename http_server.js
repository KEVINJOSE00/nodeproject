var http = require('http');
var fs = require('fs');


 var server = http.createServer(function(req,res){
	console.log('request was made:' + req.url);
	 if(req.url == '/home' || req.url == '/'){
		 res.writeHead(200,{'content-type': 'text/html'});
		 fs.createReadStream(__dirname + '/jquery_test.html').pipe(res);
	 }
	});
			server.listen(3000,"127.0.0.1");
	console.log('server is running at http://127.0.0.1:3000/');
