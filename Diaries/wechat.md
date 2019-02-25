# 微信公众号开发相关

### Keywords

* AppId
* 秘钥
* 微信服务器、开发服务器
* openId
* unionId
* 微信网页授权、OAuth2.0鉴权
* 静态授权

```
// 微信授权
const AppId = 'wx451e204730c5cbd3'
const getUrlParam = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
const code = getUrlParam('code')
if (!code) {
  location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + AppId + '&redirect_uri=' + encodeURIComponent('http://mid.guduokeji.cn/wechat') + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
}

```
