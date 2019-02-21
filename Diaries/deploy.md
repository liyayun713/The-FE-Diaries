# 项目上线流程

1. 服务器购买配置
2. 连接服务器 => ssh root@47.94.255.230
3. web服务器，nginx -V 查看版本，没有的话安装

```
// 先安装 epel
yum install epel-release
// 安装 nginx
yum install nginx
```

4. 配置web服务器

```
cd /etc/nginx
// vim查看修改
yum install vim
vim nginx.conf
// 修改成 user root;
// root /root/www
// 去掉 proxy_pass
```

5. 上传代码到服务器
```
// 使用scp
// 当前文件夹下的所有文件上传
scp -r ./* root@39.98.181.204:root/www
```

6. 重启Nginx服务器
```
// 查看nginx进程
ps -ef | grep nginx
// 停止
nginx -s stop
nginx
// 查看 nginx.conf
cat /etc/nginx/nginx.conf
```

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
