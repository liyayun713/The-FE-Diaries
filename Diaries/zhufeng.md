# 珠峰前端架构师培训课程大纲

## 基础部分

1. ES6/ES7语法和原理实现

2. 异步发展过程：callback、promise、generator、co、async/await等异步流程控制(async和await的实现原理)

3. JavaScript模块化发展的演进历史 CommonJS、AMD、CMD、ES6模块的演进历史

3. promise设计模式原理及在es6中的应用，手写一个符合promise A+规范的promise实现

4. Nodes核心原理，手写Stream的源码

5. Node事件原理和发布定阅设计模式

6. 文件系统遍历算法(同步、异步、深度、广度、先序、中序、后序)

7. 用TCP实现HTTP和Websocket协议

8. 手写一款HTTP服务命令行工具，包括压缩、缓存、断点续传、文件上传等功能

9. Cookie和Session原理

## 前段工程化构建工具

1. webpack4实战

2. webpack优化(resolve、模块热替换、压缩、代码分割、可视化工具)

3. Webpack4源码分析

4. 编写自定义Loader、编写自定义Plugin

5. Webpack的事件机制tapable和AST抽象语法树

6. 如何编写Babel插件

7. 手写一款简易Webpack

## React 全家桶

### react

1. 为什么采用组件化的方式
2. react环境搭建
3. JSX语法的使用(createElement,render的原理实现)
4. JSX表达式的用法
5. JSX的属性(className,htmlFor,style,dangerouslyInnerHTML)
6. 组件使用(类声明,函数声明)
7. 组件的属性和状态(属性的检验以及setState详解)
8. 复合组件
9. 组件的声明周期
10. 受控组件 非受控组件
11. children属性的使用
12. 项目实战留言板

### redux
1.手写redux库(getState,createStore,dispatch,subscribe,applyMiddlewar e,combineReducer,compose,bindActionCreators)

### react­redux
1.高阶组件的原理和使用
2.react高级属性context上下文
3.react-redux实现todoList
4.手写react-redux(Provider和connect原理解析)

### 中间件
1.手写applyMiddle和compose(中间件原理)
2.手写redux-logger,redux-thunk,redux-promise
3.手写自定义本地缓存中间件
4.redux-saga
5.redux-immutable
6.dva
7.antdesign

### react路由
1.HashRouter,BrowserRouter的区别
2.Link,NavLink的使用(extact绝对匹配,state带参数跳转)
3.Route组件三种渲染方式(component,render,children)
4.路由参数以及子路由的使用(params)
5.withRouter,PrivateRouter的用法
6.Prompt组件阻止跳转
7.重定向(Redirect组件)
8.手写HashRouter Route等组件

### React­Transition­group
1.react动画的实现原理
2.使用React-Transition-group库开发todo动画应用

### 项目实战React珠峰课堂
1.webpack环境搭建
2.底部页签导航
3.动画
4.redux改变课程分类
5.实现头部轮播图
6.课程列表列表
7.下拉刷新
8.上拉加载
9.记录滚动条位置
10.课程详情页面
11.用户注册
12.用户登录
13.受保护的我的课程页面
14.Redux开发插件

### 源码级Vue+React深度解析与实现
1.手写Vue双向绑定实现
2.Vue虚拟DOM和React虚拟DOM的区别
3.如何实现一个 Virtual DOM 算法
4.通过源码彻底搞明白setState的更新机制
5.手写包含虚拟DOM、事件监听、基本组件生命周期等功能的React库

## Node 高级
1.http深入和tcp详解
1.七层网络协议分析
2.TCP连接和Nagle算法
3.使用`wireshark`学习七层网络协议
4.DNS服务器详解
5.Node静态服务器实现与缓存机制的实现
6.HTTP常用报文的实际应用
7.Node Stream的应用与文件分片上传策略
8.RestfulAPI设计和使用
9.CDN和OSS的使用
10.HTTPS安全通信过程分析
2.Express
1.手写express框架
2.中间件的实现原理、bodyParser、cookie-parser、static、模板原理
3.Koa
1.手写Koa框架
2.中间件的实现原理、bodyParser、cookie-parser、static、模板原理
4.egg.js
1.egg.js+antdesign开发前后端分离应用
5.Linux
1.Linux介绍
2.Linux文件和目录
3.Linux用户和组权限
4.Linux命令
5.Shell脚本
6.Mongodb
1.Mongodb安装和使用
2.Mongodb的系统架构
3.Mongodb高级查询
4.Mongodb索引
5.Mongodb安全与权限
6.mongoose模块之Schema
7.mongoose模块之Model
8.使用Model对文档进行增删改查
7.珠峰博客(express+mongodb+mongodb)
基于bootstrap+express+mongodb实现一个包括用户管理、文章管理、多看留言、分页查询、 搜索、文件上传、pv留言统计等功能完整的博客系统。使用了express的路由、ejs模板和serve-favicon、 morgan、cookie-parser、body-parser、express-session、connect-mongo、connect-flash、uuid、 async等内置各种中间件以及其它发路径保护等自定义中间件，并扩展了富文本编辑器、markdown和heroku云布署等功能。
1.项目初始化
2.用户管理
3.文章管理
4.分页查询
5.搜索
6.文件上传
7.PV留言统计
8.珠峰聊天室项目实战(react+socket.io+mongodb)
1.什么是实时通信
2.什么是Websocket
3.websocket和http的对比
4.使用socket.io实现聊天室
5.匿名聊天
6.有用户名的聊天和用户列表
7.用户私聊
8.划分不同的聊天房间
9.消息持久化
10.支持QQ表情
9.MySQL
1.MYSQL安装与使用
2.MYSQL系统架构
3.数据处理之增删改查
4.数据类型和约束分页
5.索引和慢查询性能分析
6.数据库安全之防止SQL注入
10.珠峰爬虫(cheerio+request+mysql)
1.发出HTTP请求获取指定URL中的内容
2.使用cheerio的语法操作网页元素，提取需要的元素
3.将数据保存到mysql数据库中
4.建立web服务器显示这些数据
5.使用计划任务自动执行更新任务
6.布署项目到阿里云中并配置反向代理
11.Redis
1.Redis安装和使用
2.5种数据结构及使用场景
3.API的理解和使用
4.Redis客户端
12.Nginx
1.nginx的安装和使用
2.模块和基本配置
3.正向反向代理等应用场景
13.Docker
1.Docker介绍和安装
2.Dockerfile
3.存储和镜像仓库
4.Dock实战
14.单元测试
1.测试用例和需求分析
2.单元测试框架mocha/ava
3.自动化测试之selenium
15.集群和负载均衡
1.cluster的工作原理和负载均衡算法
2.pm2工具
16.前端性能监控与性能优化、行为监控与安全防范
1.针对重绘重排的优化策略
2.如何发现性能短板与各个短板的优化
3.前端埋点上报
4.前端错误上报
5.前端性能上报
6.前端行为监控上报
7.前端恢复上线与A/B测试
8.网络缓存技术分析
9.浏览器渲染过程分析(DOM树、RenderObject、绘图上下文)
17.项目部署
1.npm script工作流
2.shell脚本布署
18.安全
1.XSS的原理与代码实战
2.CSRF的原理与代码实战
19.功能测试与性能测试
1.测试用例和需求分析
2.常用功能测试框架基础使用(mocha/ava)
3.常用性能测试框架基础使用(Benchmark)
20.全链路优化
1.DNS优化
2.请求速度优化
3.渲染优化之 JS css image html
4.缓存优化
5.服务器优化
6.数据库优化

## 综合项目实战

## 前端设计模式

## 算法 & 数据结构
