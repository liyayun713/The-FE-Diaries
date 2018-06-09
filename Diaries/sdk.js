(function () {
    var collect = {
        devicerUrl: '/users/upinfo',
        eventUrl: 'https://affiliate.rosewholesale.com/logsss/1.gif?',
        isuploadUrl: '',
        timer: 0,
        parmas: {},
        device: {},//设备信息
        ac: {}, //用户行为
        el: { allA: [], imgs: [] } //保存图片和链接对象
    }

    var $ = {
        "getclass": function (className, parent) {
            var eles = this.gettag("*", parent);
            var reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
            var arr = [];
            for (var i = 0, len = eles.length; i < len; i++) {
                if (reg.test(eles[i].className)) {
                    arr.push(eles[i]);
                }
            }
            return arr;
        },
        "gettag": function (tag, parent) {
            return (parent || document).getElementsByTagName(tag);
        },
        "getid": function (id, parent) {
            return (parent || document).getElementById(id);
        },
        "find": function (selector, parent) {
            var parent = parent || document;
            //去除空行
            var selector = selector.replace(/(^\s*)|(\s*$)/g, "");
            var parts = selector.split(/\s+/);
            //这次需要查找的元素 它的形式可能是 .class #id div 这种形式
            var eles = parts[0];
            switch (eles.charAt(0)) {
                case ".":
                    eles = this.getclass(eles.substring(1), parent);
                    break;
                case "#":
                    var str = eles;
                    eles = [];
                    eles[0] = this.getid(str.substring(1));
                    break;
                default:
                    eles = this.gettag(eles, parent);
                    break;
            }
            // 截取第二个元素之后的数组 并转成字符串
            // var test = test.splice(1).join(" ");
            var test = "";
            for (var i = 1; i < parts.length; i++) {
                test += parts[i] + " ";
            }
            // 承接数组
            var arr = [];
            for (var i = 0, len = eles.length; i < len; i++) {
                if (test) {
                    var arr1 = this.find(test, eles[i]);
                    arr = arr.concat(arr1);
                } else {
                    arr.push(eles[i]);
                }
            }
            return arr;
        },
    }
    //设置埋点配置
    collect.setParames = function () { }
    //更新访问路径以及页面信息
    collect.updatePageInfo = function () { }
    // 获取事件参数
    collect.getPartames = function (parmas) {
        console.log(parmas)
        console.log('获取采集信息')
    }
    //获取设备信息
    collect.getDevice = function () {
        console.log('获取设备信息')
        //Window对象数据
        if (window && window.screen) {
            this.device.sh = window.screen.height || 0; //返回屏幕的高度
            this.device.sw = window.screen.width || 0; //返回屏幕的宽度
            // this.device.cd = window.screen.colorDepth || 0; //属性返回目标设备或缓冲器上的调色板的比特深度。
        }
        //navigator对象数据
        if (navigator) {
            this.device.lang = navigator.language
            // this.device.langs = navigator.languages
            this.device.platform = navigator.platform
            this.device.explore = _getExploreName()
        }

        return this.device
    }
    // 事件采集
    collect.send = function () {
        var args = ''
        var params = Object.assign({}, this.device, this.ac)
        console.log('params', params)
        console.log('this.ac', this.ac)
        for (var key in params) {
            if (args != '') {
                args += '&';
            }
            args += key + '=' + params[key];
        }

        var img = new Image(1, 1);
        // img.src = `${this.devicerUrl}?${args}`;
        img.src = this.devicerUrl + '?' + args;

        return false;
    }
    //获取元素
    collect.getEl = function () {
        var tempElList = {},
            _self = this,
            alEl = [].slice.call(document.getElementsByTagName('a')),
            // alEl = Array.prototype.slice.call(document.getElementsByTagName('a')),
            // alEl = $.gettag('a'),
            reg = /lkid=[0-9]{8}/;

        alEl = alEl.filter(filterEl)
        //拿到当前页面所有我们自己的推广链接
        // if (Array.prototype.hasOwnProperty('filter')) alEl = alEl.filter(filterEl)
        // else {
        //   var arr = [], node;
        //   console.log(alEl)
        //   for (var i =0; i < alEl.length; i++) {
        //     node = arr[i]
        //     if(filterEl(node))  arr.push(node)
        //   }

        //   alEl = arr;
        //   arr = node = null
        // }

        _self.el.allA = alEl
        //拿到当前页面所有我们的广告图片
        alEl.forEach(function (el) {
            var img = $.find('img', el)[0]
            img.isShow = false
            _self.el.imgs.push(img)
        })

        // 从当前页面所有的链接里过滤出我们的链接
        function filterEl(node) {
            console.log('node', node)
            if (!node) return '';
            var src = node.href || node.getAttribute('href')
            return reg.test(src)
        }
    }
    //设备采集
    collect.sendDevice = function () { }
    // 判断是否采集， 埋点采集的开关
    collect.isupload = function () {
        // 1. 判断是否采集，不采集就注销事件监听（项目中区分游客身份和用户身份的采集情况，这个方法会被判断两次）
        // 2. 采集则判断是否已经采集过
        //        a.已经采集过不做任何操作
        //        b.没有采集过添加事件监听
        //    3. 判断是 混合应用还是纯 web 应用
        //        a.如果是web 应用，调用 collect.setIframe 设置 iframe
        //        b.如果是混合应用 将开始加载和加载完成事件传输给 app
        // this.timer = new Date().getTime()
        if (!!document) {
            this.ac.referrer = document.referrer ? encodeURIComponent(document.referrer) : ''
            this.ac.pageTitle = document.title ? encodeURIComponent(document.title) : ''
            this.ac.url = document.URL ? encodeURIComponent(document.URL) : ''
        }
        this.getEl()
        //检测图片是否进入展示区域
        this.checkImgIsShow()
    }
    //点击事件处理
    collect.clickHandler = function (e) { }
    //离开页面的事件处理函数
    collect.beforeUnloadHandler = function () {

        // 用户关闭页面的时候清空停留记录值
        localStorage.setItem('user_pv_stay', 0)
        this.send()
    }

    //页面回退事件处理函数
    collect.onPopStateHandle = function () { }
    //系统事件初始化， 注册离开事件， 浏览器后退事件
    collect.event = function (e) {
        console.log('e', e)

    }
    collect.stay = function () {
        console.log('onload')
        var _self = this
        function record() {
            var user_pv_stay = window.localStorage.getItem('user_pv_stay') ? window.localStorage.getItem('user_pv_stay') : 0
            user_pv_stay = user_pv_stay - 0 + 1
            window.localStorage.setItem('user_pv_stay', user_pv_stay)

            _self.ac.user_pv_stay = user_pv_stay

            return setTimeout(record, 1000)
        }
        record()
    }
    //获取记录开始加载数据信息
    collect.getBeforeload = function () { }
    //获取ip地址
    collect.getIp = function () {
        // console.log('获取ip地址')
        // 要判断不同的协议 http || https
        var script = document.createElement('script')
        script.src = "http://pv.sohu.com/cityjson?ie=utf-8"
        document.body.appendChild(script)
        var _self = this
        _on(script, 'load', function () {
            _self.device.ip = returnCitySN["cip"]
            _self.device.addr = returnCitySN["cname"]

            // _self.send()
        })
        // script.addEventListener('load', function () {
        //   _self.device.ip = returnCitySN["cip"]
        //   _self.device.addr = returnCitySN["cname"]

        //   // _self.send()
        // })
        return this.device
    }
    // 存储加载完成，读取设备类型，记录加载完成信息
    collect.onload = function () {
        // console.log('页面加载完毕')
        // 1. 判断cookie是否有存设备类型信息，有表示混合应用
        //     2. 采集加载完成时间等信息
        //     3. 调用 collect.isupload 判断是否进行采集
        this.stay()//记录用户在当前页面停留的时间
        this.getIp() //获取ip地址
        this.getDevice() //获取设备信息
        this.isupload() //页面加载完毕

    }

    //web 应用 通过嵌入iframe进行跨域cookie通讯，设置设备id
    collect.setIframe = function () { }
    //将userID存入sessionstroage
    collect.storeUserId = function () { }
    // 函数节流
    collect.throttle = function throttle(fn, context, duration, delay) {
        var timer = null,
            // 记录下开始执行函数的时间
            begin = new Date();
        return function () {
            var _context = context,
                args = arguments;
            // 记录下当前时间
            current = new Date();
            // 函数节流里的思路
            clearTimeout(timer)

            // 记录下的两个时间相减再与duration进行比较
            if (current - begin >= duration) {
                fn.apply(_context, args)
                begin = current;
            } else {
                timer = setTimeout(function () {
                    fn.apply(_context, args)
                }, delay)
            }
        }
    }
    // 检测图片是否在可是区域
    collect.checkImgIsShow = function () {
        console.log('检测图片是否在可是区域')
        var imgs = this.el.imgs,
            flag = 0;

        imgs.forEach(check)
        // 拿到win的端都和高度，以及滚动的位置，后边做边际检测
        var wW = window.innerWidth
        var wH = window.innerHeight
        var sH = window.scrollY || window.pageYOffset
        var sW = window.scrollX || window.pageXOffset
        function check(img) {
            if (img.isShow) return '' //如果如片已经进入过可视区域，直接返回
            if (!img.width) return '' //如果图面还没有加载完毕，直接返回
            var res = false
            // 边际检测 左 -> 右 -> 上 -> 下 的顺序

            if (img.offsetLeft >= sW
                && img.offsetLeft + img.width <= wW + sW
                && img.offsetTop >= sH
                && img.offsetTop + img.height <= wH + sH) {
                res = true
                // img.isShow = true
            } else res = false
            console.log('img', img.width, img.height, img.offsetTop, img.offsetLeft)
            console.log('win', wW, wH, sW, sH)
            console.log(res)
        }

        setInterval(function () {
            imgs.forEach(check)
        }, 3000)
    }

    //页面初始化调用方法
    collect.init = function () {
        // 1. 获取开始加载的采集信息
        // this.getPartames()
        // 2. 获取 SDK 配置信息，设备信息
        // 3. 改写 history 两个方法，单页面应用页面跳转前调用我们自己的方法
        // 4. 页面加载完成，调用 collect.onload 方法
        // 5.页面关闭之前的处理
        // _on(window, 'load', function () {
        //页面加载完成，调用 collect.onload 方法
        collect.onload()
        // })
        _on(window, 'beforeunload', function (e) {
            //页面关闭之前的处理
            collect.beforeUnloadHandler()
        })
        _on(window, 'click', function (e) {
            // 监听页面点击事件
            var e = e || window.event
            collect.event(e)
        })

        //监听DOM变化
        // var observer = new MutationObserver(function (mutations, observer) {
        //          mutations.forEach(function(mutation) {
        //            console.log(mutation);
        //          });
        //        });

        //  var article = document.querySelector('body');

        //  var  options = {
        //    'childList': true,
        //    'attributes':true,
        //    'subtree': true
        //  } ;

        //  observer.observe(article, options)

        // console.log('采集数据初始化')
    }

    collect.init() //初始化
    /**
     * @desc 判断浏览器版本
     * @return {[type]} [description]
     */
    function _getExploreName() {
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            return 'Opera';
        } else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
            return 'IE';
        } else if (userAgent.indexOf("Edge") > -1) {
            return 'Edge';
        } else if (userAgent.indexOf("Firefox") > -1) {
            return 'Firefox';
        } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1) {
            return 'Safari';
        } else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
            return 'Chrome';
        } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
            return 'IE>=11';
        } else {
            return 'Unkonwn';
        }
    }
    // 绑定事件方法
    function _on(curEl, eventType, fn) {
        /*
        * on：处理DOM2级事件绑定的兼容性问题（绑定方法）
        * @parameter：
        * curEl：要绑定事件的元素
        * eventType：要绑定事件的类型（click, mouseover....）
        * fn: 绑定的方法
        *
        * 解决this指向，执行顺序，兼容性检查问题的实现思路
        * 1.在对象上自顶一个事件池(数组：使用myEvent+eventType命名)，用来保存我们要绑定的事件
        * 2.绑定一个事件默认执行函数run
        * 3.执行run方法的时候的时候，遍历事件池，执行事件并修改this指向，
         */
        // 判断浏览器是否支持addEventListener绑定事件
        if (window.addEventListener) {
            curEl.addEventListener(eventType, fn, false)
            return;
        }
        // 自定义事件池
        if (!curEl['myBind' + eventType]) {//如果没有就执行创建
            curEl['myBind' + eventType] = [];

            // 不支持addEventListener，我们手动写兼容
            curEl.attachEvent('on' + eventType, run)
        }
        // 防止给一个事件绑定多次同样的方法
        var ary = curEl['myBind' + eventType],
            i = 0,
            len = ary.length;
        for (; i < len; i++) {
            var curFn = ary[i];
            if (curFn == fn) {
                // 已经有相同的事件  不在进行重复绑定
                return;
            }
        }

        // 将事件放入事件池
        ary.push(fn)
        // tempFn.
        //定义一个run方法 里边处理兼容和解决this，执行顺序的问题
        function run(e) {
            var e = e || window.event;
            var flag = e.target ? true : false;// ie6-8不支持e.tatget
            if (!flag) {
                // 如果是非标准浏览器 进行兼容处理
                e.target = e.target || e.srcElement;
                e.pageX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
                e.pageY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
                e.preventDefault = function () {
                    e.returnValue = false;
                }
                e.stopPropagation = function () {
                    e.cancelBubble = true;
                }
            }
            // 获取事件类型 然后调用
            var ary = curEl['myBind' + e.type],
                i = 0,
                len = ary.length;
            for (; i < len; i++) {
                var curFn = ary[i];
                curFn.call(curEl, e)
            }
        }
    }
    // 解除事件方法
    function _off(curEl, eventType, fn) {
        /*
        * off：处理DOM2级事件绑定的兼容性问题（解除方法）
        * @parameter：
        * curEl：要绑定事件的元素
        * eventType：要绑定事件的类型（click, mouseover....）
        * fn: 绑定的方法
        *
        * 移除事件思路
        * 1.通过curEl['myBing'+eventType] 得到事件池
        * 2.遍历事件池，和传入的fn作对比，如果相同，则移除当前函数，跳出循环
         */
        if (window.addEventListener) {
            curEl.removeEventListener(eventType, fn, false)
            return;
        }
        // 兼容处理移除事件
        if (!curEl['myBind' + eventType]) return;//如果没有 直接返回

        var ary = curEl['myBind' + eventType],//得到事件池
            i = 0,
            len = ary.length;
        for (; i < len; i++) {
            var curFn = ary[i];
            if (curFn == fn) {//如果两个函数相同 则移除事件，退出循环
                ary.splice(i, 1);
                curEl.detachEvent('on' + eventType, curFn)
                break;
            }
        }
    }
}())


