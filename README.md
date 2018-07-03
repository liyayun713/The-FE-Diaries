# The Front End Diaries

前端日记，记录前端学习过程中的哪些事儿

```js
new Date    // 开始时间 Mon Jun 04 2018 21:36:29 GMT+0800 (CST)
```

### 2018年07月03日
* 跨域问题，浏览器会先发送options预请求，通过后才发送真正的post请求

> 在跨域请求中，分为简单请求（get和部分post，post时content-type属于application/x-www-form-urlencoded，multipart/form-data，text/plain中的一种）和复杂请求。而复杂请求发出之前，就会出现一次options请求

* style -> scoped属性
* Vue全局filters
* Electron  


### 2018年07月02日
* 可视化埋点
* Flutter
* 移动端适配

### 2018年06月28日
* [珠峰前端架构师课程大纲](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/zhufeng.md)
* dist目录提交失败 ---> .gitignore文件配置
* 一个发现自己缺点的项目

### 2018年06月27日
* 设置 height: 100% 以及 min-height: 100% 失效的问题

### 2018年06月26日
* SVG 矢量图
* vue-svg-icon 的坑（subNode -> node）

### 2018年06月25日
* fetch 请求

* Math.pow(x, y) 函数返回基数（x）的指数（y）次幂

* Math.round(x) 函数返回一个数字四舍五入后最接近的整数。
```js
Math.round(20.49)   // 20
Math.round(20.5)   // 21
Math.round(-20.5)   // -20
Math.round(-20.51)   // -21
```

### 2018年06月22日
* CDN
* Nginx反向代理跨域
* 项目部署发布

> echarts常用组件

> element-ui常用组件



### 2018年06月22日
* 数组深拷贝
```js
this.funnelInfo.step = [].concat(JSON.parse(JSON.stringify(this.stepList)))
```
* eslint
* 路由子组件

### 2018年06月21日
* [Chrome 浏览器 Performance & 任务管理器性能分析](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/chrome-performance.md)

### 2018年06月20日
* [Promise](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/promise.md)
* [async await generator](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/async-await-generator.md)
* [Babel：babel-polyfill, babel-preset-env, babel-runtime 以及 preset、plugin 的使用指南](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/babel.md)

### 2018年06月19日
* [SSL/TLS 握手过程详解](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/ssl-tls.md)
* [this原理](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/this.md)
* [Event Loop](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/event-loop.md)
* [Nginx的安装与启动](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/nginx.md)

### 2018年06月15日
* [js常用设计模式](https://github.com/liyayun713/Front-End/blob/master/js/DesignPatterns.md)

### 2018年06月14日
* IP v3 和 IP v4

### 2018年06月13日
* 前端埋点SDK包

### 2018年06月12日
* Vue + vue-router + vuex + element-ui + echarts + ES6/7/8
* 异步组件 require.ensure

### 2018年06月11日
* DMP前端架构

### 2018年06月09日
* [koa2框架学习](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/koa.md)
* [埋点SDK包](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/sdk.js)

### 2018年06月08日
* [项目上线流程](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/deploy.md)

### 2018年06月07日
* 前端国际化（i18n）(vue + vue-i18n + element-ui国际化)

### 2018年06月06日
* 单页面 or 多页面
* ui 框架选型（element、cube）
* 预处理器选型（stylus、less、sass）
* 前端多语言解决方案
* [DMP、DSP、SSP](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/dmp.md)
* [埋点架构](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/event-tracking.md)

### 2018年06月05日

* Vue SSR 在 php 环境下的使用
* 技术选型（Vue、React、Angular）

### 2018年06月04日

* [掘金每日一文：前端的焦虑，你想过30岁以后的前端路怎么走吗？](https://juejin.im/post/5b124fdd5188257d6c0465da)
* [工作日常 Git 命令](https://mp.weixin.qq.com/s/-siW5-Zem84AJlEsnW8WZw)
* 站外埋点攻略
