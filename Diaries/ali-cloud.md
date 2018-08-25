# 阿里云部署项目

## 发布前准备工作

### 必备条件

* 一台 Linux 服务器（Centos、Ubuntu）
* 一款web服务器（Nginx、Apache、Tomcat）
* 一个属于自己的独立域名

## 服务器的选择

### 服务器类型

* Linux
* windows

## 服务器的购买与配置

## 使用gitbash连接服务器

```
// 连接
ssh root@120.79.179.182

// 查看版本
uname -a
```

## web服务器的选择
* Nginx（高性能、高并发）
* Apache（多平台、安全、流行）
* Tomcat（多用于 Java 做 JSP）

### 安装 Nginx

```
// 查看版本
nginx -V

// 安装
yum install nginx
```

## 配置web服务器

### 需要注意的地方

* user nginx 改成 nginx root
* http > sever > location

```
// 找到配置文件，Linux下默认为 /etc/nginx
cd /etc/nginx

// 找到配置文件命令
nginx -t

// yum install vim 安装vim

// 创建文件夹
mkdir www

// 创建文件
touch a.txt

// 删除
rm -fr a.txt
```

## 上传网站到服务器

### 使用 scp 命令

```
scp -r local_dir user@ip:/remote_dir
```
