var http=require("http")
var querystring=require("querystring")
var postData=querystring.stringify({     //表单信息   Form Data,下面只是
	  'content':' ',   //例   
	  'mid':' '
})

var options={
	hostname:" ",//主机地址
	port:80,//端口号
	path:"/course/docomment",//RequestURL
	method:"POST",       //发送请求的方法
	headers:{            //请求头信息    RequestHeader
		
	}
}

var req=http.request(options,function(res){
	console.log('状态码:'+res.statusCode);
	console.log('头部信息:'+JSON.stringify(res.headers));
	
	res.on("data",function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})
	
	res.on('end',function(){		
		console.log("评论成功");		
	})
	
})
req.on("error",function(e){
	console.log(e.message);
})
req.write(postData);
req.end();
