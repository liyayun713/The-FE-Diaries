# The Front End Diaries

- 前端日记，记录前端学习过程中的哪些事儿

- 掘金每天两篇文章~

### 2018年12月29日

* [深入浅出HTTPS工作原理](https://juejin.im/post/5c1913a46fb9a049db73119a)
* [前端之函数柯里化Currying](https://juejin.im/post/5c243574518825741e7c33ed)
* [浅谈 class 私有变量](https://juejin.im/post/5c25faf3f265da61380f4b17)
* 面试题：数组转树形结构

### 2018年12月28日

* [刷 携程 地面业务 前端面试经历](https://juejin.im/post/5c237cf96fb9a049a62ca0c7)
* [函数式编程，真香](https://juejin.im/post/5c19c3ffe51d45059b632eef)
* [傻傻分不清的javascript运行机制](https://juejin.im/post/5c20526b6fb9a049b7805ff9)
* [被闭包啪啪啪的打脸了](https://juejin.im/post/5c22f13b5188252b56273a00)
* [面试官问：JS的this指向](https://juejin.im/post/5c0c87b35188252e8966c78a)

### 2018年12月27日

* [CommonJS和ES6模块循环加载处理的区别](https://juejin.im/post/5c22f5696fb9a049e412bce6)
* [深入Babel，这一篇就够了](https://juejin.im/post/5c21b584e51d4548ac6f6c99#comment)
* 面试题：请实现一个 mul 函数，使之满足：

```js
console.log(mul(2))
console.log(mul(2)(3))

// 关键点，使用 toString、valueOf
function mul(val) {
  let fn = function(num) {
    return mul(val * num)
  }
  // toString or valueOf
  fn.toString = function () {
    return val
  }
  return fn
}

```

### 2018年12月24日

* 函数式编程与面向对象编程
* 进程与线程

### 2018年12月23日

* [腾讯前端面试篇（一）](https://juejin.im/post/5c19c1b6e51d451d1e06c163)
* [腾讯前端面试篇（二）](https://juejin.im/post/5c1869ab6fb9a049f154207a)
* [腾讯面试篇（三）——终章](https://juejin.im/post/5c1eec7bf265da61477034ae)
* [成熟的 Git 分支模型](https://juejin.im/post/5c1a4d1df265da6170071422)
* [前端模块化详解(完整版)](https://juejin.im/post/5c17ad756fb9a049ff4e0a62)

### 2018年12月21日

* [一口(很长的)气了解 babel](https://juejin.im/post/5c19c5e0e51d4502a232c1c6#comment)

### 2018年12月19日

* [Vue与React两个框架的粗略区别对比](https://juejin.im/post/5c18b4adf265da61380f26ad)
* [趣讲CDN](https://juejin.im/post/5c188d06f265da615114acb0)
* [前端缓存最佳实践](https://juejin.im/post/5c136bd16fb9a049d37efc47)
* [前端埋点统计方案思考](https://juejin.im/post/5c178aaaf265da6147702108#comment)
* [你（可能）不知道的web api](https://juejin.im/post/5c1606d9f265da613d7bf7a4)

### 2018年12月18日

* [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
* [当「SPA」应用遇上了膨胀的项目](https://juejin.im/post/5c18b5f15188252dcb31072a)

### 2018年12月12日

* [移动端适配总结](https://juejin.im/post/5c0dd7ac6fb9a049c43d7edc)

### 2018年12月11日
* [年终回顾，为你汇总一份「前端技术清单」](https://juejin.im/post/5bdfb387e51d452c8e0aa902)
* [打造属于你自己的instagram! 全栈项目(react + egg.js)](https://juejin.im/post/5c0256a751882550d05cba11#comment)

### 2018年12月10日
* [不吹不黑比对下React与Vue的差异与优劣](https://juejin.im/post/5c0a92f2e51d455b3d3dc181)

### 2018年12月09日
* [2019年如何打造自己的“前端品牌”](https://juejin.im/post/5c06a3b35188257f30199529)
* [我是如何将页面加载时间从6S降到2S的？](https://juejin.im/post/5c07c6b96fb9a04a0d56a3cc#comment)
* [初探 Vue3.0 中的一大亮点——Proxy !](https://juejin.im/post/5bfcbab0518825741e7bd67f#comment)

### 2018年12月8日
* [深入理解 PWA](https://juejin.im/post/5c07493951882516cd70d213)
* [微软官方：为开发者减少开发成本，Edge 将采用 Chromium 开发](https://juejin.im/post/5c09ecf9e51d4570b57ae0b4#comment)

### 2018年12月07日
* [vue3.0 尝鲜 -- 摒弃 Object.defineProperty，基于 Proxy 的观察者机制探索](https://juejin.im/post/5bf3e632e51d452baa5f7375)

### 2018年11月20日
* 支付宝小程序
* docker
* 进程和线程

### 2018年11月09日
* defineProperty 和 proxy

### 2018年08月25日
* 阿里云部署项目

### 2018年07月23日
* 在HTTP/1.0 302 状态为 Moved Temporarily
* HTTP/1.1 302 状态为 Found

### 2018年07月18日
* 百度推广用户追踪机制
* 技能学习的app

### 2018年07月17日
* 性能优化（按需加载、cdn、defer、强缓存、协商缓存、压缩、gzip压缩）
* webpack 打包优化
* element-ui 按需加载
* echarts 按需加载、使用CDN并且defer加载

### 2018年07月16日
* from memory cache 和 from disk cache

### 2018年07月11日
* git 和 svn 区别
* npm run build 打包过慢问题优化

### 2018年07月10日
> package-lock.json 作用
1. 安装之后锁定包的版本，手动更改package.json文件安装将不会更新包，想要更新只能使用 npm install xxx@1.0.0 --save 这种方式来进行版本更新package-lock.json 文件才可以

2. 加快了npm install 的速度，因为 package-lock.json 文件中已经记录了整个 node_modules 文件夹的树状结构，甚至连模块的下载地址都记录了，再重新安装的时候只需要直接下载文件即可

### 2018年07月07日
* node_modules 中下划线开头的文件 cnpm安装
* element-ui 需修改样式文件，单独提出到 lib 文件夹下

### 2018年07月06日
* 项目色调、字体统一
* [私有 NPM 搭建](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/private-npm.md)
* [style scoped属性](https://github.com/liyayun713/The-FE-Diaries/blob/master/Diaries/scoped.md)

### 2018年07月04日
* 打包导致样式丢失
* echarts 数据异步加载和更新
* vue-router 动态路由切换与 element-ui 中的 menu 组件切换路由所遇到的坑
* vue-router 动态路由导航（如果提供了 path，params 会被忽略）

### 2018年07月03日
* Date.prototype.format
* get 请求方式 params: data 进行传值
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
