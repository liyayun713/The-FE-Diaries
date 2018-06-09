# 项目上线流程

### 服务器购买以及配置
* Linux、Centos
* 端口
* 密码

### 连接到远程服务器
* Gitbash
* ssh root@47.94.255.230

### web服务器的选择
* Nginx：高性能、高并发
* Apache：多平台、安全、流行
* Tomcat：多用于 java 做 jsp 的解析
* yum install epel-release
* yum install nginx

### 配置web服务器
* user nginx 改为 user root
* http > server > location

### 上传网站到服务器
* scp
* scp -r ./demo/* root@47.94.255.230:/root/www

### 域名购买以及解析
* 阿里云域名注册
* www、@

### 结合HTTP协议
* 三次握手
