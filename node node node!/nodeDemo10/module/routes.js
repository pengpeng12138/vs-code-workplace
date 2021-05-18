/**
 * Created by Administrator on 2017/7/2 0002.
 */
var fs = require("fs")
//path模块
var path=require('path');  /*nodejs自带的模块*/
//url模块
var url=require('url');

// exports.getFileMime = function(extname){
//     return new Promise((resolve,reject)=>{
//         fs.readFile("./data/mime.json",(err,data)=>{
//             if(err){
//                 console.log(err)
//                 reject(err)
//                 return
//             }
//             let mimeObj = JSON.parse(data.toString())
//             resolve(mimeObj[extname])
//         })
//     }) 
// }
//私有方法
function getFileMime(extname){
    var data = fs.readFileSync('./data/mime.json');//同步的方法
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname]
}
exports.static = function(req,res,staticPath){
    //1.获取地址
    var pathname=url.parse(req.url).pathname;
    pathname = pathname=="/"?'/index.html':pathname
    let extname=path.extname(pathname);
	//获取文件的后缀名
	if(pathname!='/favicon.ico'){  /*过滤请求favicon.ico*/
		//console.log(pathname);
		//文件操作获取 static下面的index.html
		fs.readFile('./'+staticPath+pathname,(err,data)=>{
			if(err){  /*么有这个文件*/
				console.log('404');
				fs.readFile('static/404.html',function(error,data404){
					if(error){
						
					}
					res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
					res.write(data404);
					res.end(); /*结束响应*/
				})
			}else{ /*返回这个文件*/
				let  mime=getFileMime(extname);  /*获取文件类型*/
				res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
				res.end(data); /*结束响应*/
			}
		})
	}
}