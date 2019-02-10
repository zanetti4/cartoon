const express = require('express');
const app = express();
var proxy = require('http-proxy-middleware');

app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log('访问首页');
	res.sendFile(__dirname+'/views/cartoon.html');
});

//pc 端代理
let o = {
	target: 'https://ac.qq.com/', 
	changeOrigin: true,
	pathRewrite: {
		'^/ly': ''
	}
};

app.use('/ly', proxy(o));

//移动端代理
let oMobile = {
	target: 'https://m.ac.qq.com/', 
	changeOrigin: true,
	pathRewrite: {
		'^/lyMobile': ''
	}
};

app.use('/lyMobile', proxy(oMobile));

const port = 8088;

app.listen(port, () => {
	console.log(`我的动漫服务器启动了，访问端口为${port}`);
});