# cartoon

## 前言
打算用 *bootstrap* 做一个响应式的网站，虽然以前工作中也有用到这个前端开发框架，但是感觉用得马马虎虎，所以这次想好好研究一下。

## 技术栈
``` bash
grunt-cli: Grunt 命令行。
grunt: JavaScript 世界的构建工具。
grunt-contrib-less: 将 less 编译为 css 的插件。
grunt-contrib-watch: 监测文件，当它发生改变时，执行预定义的任务。
grunt-contrib-cssmin: 压缩 css 文件的插件。
http-proxy-middleware: node.js 设置代理的中间件。
express: 快速、开放、极简的网络框架。
```

## 路由设计及功能
- Home: 首页，展示强档推荐。

## 心得体会&技术难点
1. 使用 *ajax* 发送请求时产生跨域。  
**解决办法：**  
通过 *node.js* 创建服务端代码，用设置代理的方式解决。
2. 如何监测并编译 less 文件？  
**解决办法：**  
利用 *grunt* 及其插件实现，之前用考拉进行此操作，但是看到有些公司的招聘信息中写到要会使用 grunt，所以这次就尝试一下吧。
3. bootstrap *Carousel* 插件，如何避免点击切换后自动滚动？  
**解决办法：**  
绑定 *slid.bs.carousel* 事件。
```javascript
$('#recommend').on('slid.bs.carousel', function(){
  $(this).carousel('pause');
});
```
