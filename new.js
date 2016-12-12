/**
 * Created by Wazowski on 2016/11/20.
 */


//window.onmousewheel=document.onmousewheel=scroll;

function scrollDown(){
    var top = $(".screen-list").position().top
    var height = $(window).height()
    var multiple = parseInt((- top)/height)
    var scrollHeight = - (multiple+1) * height + "px"
    if(multiple > 3){
        $(".screen-list").animate({
            "top": 0
        })

    }else{
        $(".screen-list").animate({
            "top": scrollHeight
        })
    }
}

function scrollUp(){
    var top = $(".screen-list").position().top
    var height = $(window).height()
    var multiple = parseInt((- top)/height)
    var scrollHeight = - (multiple - 1) * height + "px"
    if(multiple === 0){
        $(".screen-list").animate({
            "top": "-400%"
        })

    }else{
        $(".screen-list").animate({
            "top": scrollHeight
        })
    }
}



var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
            scrollUp()
            backgroundUp()
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
            scrollDown()
            backgroundDown()
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            console.log("xiangxia");
            scrollDown()
            backgroundDownFire()
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            console.log("xiangshang");
            scrollUp()
            backgroundUpFire()
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {//firefox
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法  //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;



//背景移动


function backgroundDown(){
    //$(".background-item1").css({
        //height: "500px",
        //width: "500px",
        //top: "-300px",
        //left: "-409px",
        //transform: "rotateZ(145deg)"
    //})
//    $(".background-item2").css({
//        //height: "1000px",
//        //width: "1000px",
//        top: "0px",
//        left: "335px",
//        transform: "rotateZ(100deg)"
//    })

    var top = $(".screen-list").position().top
    var height = $(window).height()
    var multiple = parseInt((- top)/height)
    if(multiple === 0){
        $(".background-item1").css({
        top: "-300px",
        left: "-409px",
        })
    }else if(multiple === 1){
        $(".background-item2").css({
            height: "3000px",
            width: "3000px",
            top: "-200px",
            left: "-400px",
            "background-size": "400%",
        })
        $(".background-item1").css({
            "z-index": "1"
        })
    }else if(multiple === 2){
        $(".background-item1").css({
            height: "500px",
            width: "500px",
            top: "-100px",
            left: "100px"
        })
        $(".background-item2").css({
            height: "2000px",
            width: "2000px",
            top: "-500px",
            left: "-512px",
            "background-size": "100%",
            transform: "rotateZ(65deg)"
        })
        $(".driftwood").animate({
            "height":"400px",
            "width":"600px"
        }, 1000)
    }else if(multiple === 3){
        $(".background-item1").css({
            height: "1000px",
            width: "1000px",
            top: "-300px",
            left: "800px",
            "z-index": "0",
            transform: "rotateZ(90deg)"
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "-550px",
            left: "700px",
            transform: "rotateZ(60deg)"
        })
    }else{
        $(".background-item1").css({
            height: "1000px",
            width: "1000px",
            top: "196px",
            left: "-589px",
            transform: "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "538px",
            left: "350px",
            transform: "rotateZ(-70deg)"
        })
    }
}

function backgroundUp(){
    var top = $(".screen-list").position().top
    var height = $(window).height()
    var multiple = parseInt((- top)/height)
    if(multiple === 2){
        $(".background-item1").css({
            top: "-300px",
            left: "-409px",
            "z-index": "1",
            height: "1000px",
            width: "1000px",
            "transform": "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "538px",
            left: "350px",
            "background-size": "400%",
            "transform": "rotateZ(-70deg)"
        })
    }else if(multiple === 3){
        $(".background-item1").css({
            top: "-300px",
            left: "-409px",
            "z-index": "1",
            height: "1000px",
            width: "1000px",
            "transform": "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "3000px",
            width: "3000px",
            top: "-200px",
            left: "-400px",
            "background-size": "400%",
            "transform": "rotateZ(-70deg)"
        })
    }else if(multiple === 4){
        $(".background-item1").css({
            height: "500px",
            width: "500px",
            top: "-100px",
            left: "100px",
            "z-index": "1",
            transform: "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "2000px",
            width: "2000px",
            top: "-500px",
            left: "-512px",
            "background-size": "100%",
            transform: "rotateZ(65deg)"
        })

    }else if(multiple === 0){
        $(".background-item1").css({
            height: "1000px",
            width: "1000px",
            top: "-300px",
            left: "800px",
            "z-index": "0",
            transform: "rotateZ(90deg)"
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "-550px",
            left: "700px",
            transform: "rotateZ(60deg)",
            "background-size": "100%",
        })
    }else{
        $(".background-item1").css({
            height: "1000px",
            width: "1000px",
            top: "196px",
            left: "-589px",
            transform: "rotateZ(20deg)",
            "z-index": "0",
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "538px",
            left: "350px",
            transform: "rotateZ(-70deg)"
        })
    }
}


function backgroundDownFire(){
    var top = $(".screen-list").position().top
    var height = $(window).height()
    var multiple = parseInt((- top)/height)
    if(multiple === 0){
        $(".background-item1").css({
            height:"1500px",
            width:"1500px",
            top: "-346px",
            left: "-693px",
        })
        $(".background-item2").css({
            height:"1500px",
            width:"1500px",
        })
    }else if(multiple === 1){
        $(".background-item2").css({
            height: "3000px",
            width: "3000px",
            top: "-200px",
            left: "-350px",
            "background-size": "200%",
        })
        $(".background-item1").css({
            "z-index": "1"
        })
    }else if(multiple === 2){
        $(".background-item1").css({
            top: "-1000px",
            left: "-407px"
        })
        $(".background-item2").css({
            top: "-0",
            left: "600px",
            "background-size": "100%",
            transform: "rotateZ(-70deg)"
        })
        $(".driftwood").animate({
            "height":"400px",
            "width":"600px"
        }, 1000)
    }else if(multiple === 3){
        $(".background-item1").css({
            top: "200px",
            left: "500px",
            "z-index": "0",
            transform: "rotateZ(90deg)"
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "-246px",
            left: "1200px",
            transform: "rotateZ(60deg)"
        })
    }else{
        $(".background-item1").css({
            top: "86px",
            left: "-850px",
            transform: "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "1500px",
            width: "1500px",
            top: "600px",
            left: "556px",
            transform: "rotateZ(-70deg)"
        })
    }
}

function backgroundUpFire(){
    var top = $(".screen-list").position().top
    var height = $(window).height()
    var multiple = parseInt((- top)/height)
    if(multiple === 2){
        $(".background-item1").css({
            top: "-346px",
            left: "-693px",
        })
        $(".background-item2").css({
            height:"1500px",
            width:"1500px",
            top: "598px",
            left: "559px",
        })
    }else if(multiple === 3){
        $(".background-item2").css({
            height: "3000px",
            width: "3000px",
            top: "-200px",
            left: "-350px",
            "background-size": "200%",
        })
        $(".background-item1").css({
            "z-index": "1",
            top: "-346px",
            left: "-693px",
        })
    }else if(multiple === 4){
        $(".background-item1").css({
            height:"1500px",
            width:"1500px",
            top: "-1000px",
            left: "-407px",
            transform: "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "3000px",
            width: "3000px",
            top: "0",
            left: "600px",
            "background-size": "100%",
            transform: "rotateZ(-70deg)"
        })
        $(".driftwood").animate({
            "height":"400px",
            "width":"600px"
        }, 1000)

    }else if(multiple === 0){
        $(".background-item1").css({
            top: "200px",
            left: "500px",
            "z-index": "0",
            transform: "rotateZ(90deg)"
        })
        $(".background-item2").css({
            height: "1000px",
            width: "1000px",
            top: "-246px",
            left: "1200px",
            transform: "rotateZ(60deg)"
        })
    }else{
        $(".background-item1").css({
            top: "86px",
            left: "-850px",
            transform: "rotateZ(20deg)"
        })
        $(".background-item2").css({
            height: "1500px",
            width: "1500px",
            top: "598px",
            left: "559px",
            transform: "rotateZ(-70deg)"
        })
    }
}

function getOs()
{
    var OsObject = "";
    if(navigator.userAgent.indexOf("MSIE")>0) {
        $(document).ready(function(){
            $(".background-item1").css({
                height: "1500px",
                width: "1500px",
                top: "86px",
                left: "-850px",
                transform: "rotateZ(20deg)"
            })
            $(".background-item2").css({
                height: "1500px",
                width: "1500px",
                top: "598px",
                left: "559px",
                transform: "rotateZ(-70deg)"
            })
        })
    }
    if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
        $(document).ready(function(){
            $(".background-item1").css({
                height: "1500px",
                width: "1500px",
                top: "86px",
                left: "-850px",
                transform: "rotateZ(20deg)"
            })
            $(".background-item2").css({
                height: "1500px",
                width: "1500px",
                top: "598px",
                left: "559px",
                transform: "rotateZ(-70deg)"
            })
        })
    }
    if(isSafari=navigator.userAgent.indexOf("Safari")>0) {
        return "Safari";
    }
    if(isCamino=navigator.userAgent.indexOf("Camino")>0){
        return "Camino";
    }
    if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){
        return "Gecko";
    }

}
getOs()

















//tagcloud

var settings = {
    //height of sphere container
    height: 450,
    //width of sphere container
    width: 450,
    //radius of sphere
    radius: 150,
    //rotation speed
    speed: 0.5,
    //sphere rotations slower
    slower: 0.9,
    //delay between update position
    timer: 5,
    //dependence of a font size on axis Z
    fontMultiplier: 25,
    //tag css stylies on mouse over
    hoverStyle: {
        border: 'none',
        color: '#0b2e6f'
    },
    //tag css stylies on mouse out
    mouseOutStyle: {
        border: '',
        color: ''
    }
};

$(document).ready(function(){
    $('#skills-tab').tagoSphere(settings);


    $(".sub-screen4-content").on('mousemove', function(e){

        var offset = $(".sub-screen4-content").offset()

        var x = e.pageX - offset.left
        var y = e.pageY - offset.top


        var centerX = $(".sub-screen4-content").outerWidth() /2
        var centerY = $(".sub-screen4-content").outerHeight() /2

        var deltaX = x - centerX
        var deltaY = y - centerY

        var percentX = deltaX / centerX
        var percentY = deltaY / centerY

        var deg = 10



        $("#driftwood").css({
            transform: 'rotateX('+deg*-percentY + 'deg)'+
            ' rotateY('+deg*percentX+'deg)'
        })
    })

    $(".sub-screen4-content").on('mouseleave', function(){
        $("#driftwood").css({
            transform: ''
        })
    })


    $(".tag").mouseenter(function(){
        var name = $(this).find("a").attr("class")
        var _name = "li." + name
        $(_name).css("visibility", "visible")
    })
    $(".tag").mouseleave(function(){
        var name = $(this).find("a").attr("class")
        var _name = "li." + name
        $(_name).css("visibility", "hidden")
    })

});



//拉钩特效

//function pointTo(element, e) {
//    var elementBox = element.getBoundingClientRect();
//    return {
//        x: e.clientX - elementBox.left,
//        y: e.clientY - elementBox.top
//    };
//}
//
//function startPoint(element){
//    var x = 0,y = 0;
//    while(element != null) {
//        x += element.offsetLeft;
//        y += element.offsetTop;
//        element = element.offsetParent;
//    }
//    return {
//        x: x,
//        y: y
//    }
//}
//
///*
// options参数:
// obj: 运动的对象
// speed: 运动的持续时间(可选)
// changeStyle: 改变的属性，这里可能多个，所以采用函数的方式(可选)
// callback: 回调函数(可选)
// */
//function animation(options){
//    if(!options.obj) {
//        return false;
//    }
//    //设置默认持续时间
//    options.speed = options.speed || '.5s';
//    options.obj.style.transition = "all " + options.speed + " ease-in-out";
//
//    options.changeStyle.call(options.obj);
//
//    var flag = false;
//    options.obj.addEventListener('transitionend',function(){
//        //这里主要由于transitionend在每个属性的动画执行完多会走一遍，所以我们要让它只执行一次。
//        if(!flag) {
//
//            options.callback && options.callback();
//        }
//    },false);
//}
//
//function getDirection(element,startPoint,pagePoint){
//    var halfWidth = element.offsetWidth / 2,halfHeight = element.offsetHeight / 2;
//    //得到中心点
//    var center = {
//        x: startPoint.x + halfWidth,
//        y: startPoint.y + halfHeight
//    }
//    //得到鼠标偏离中心点的距离
//    var disX = pagePoint.x - center.x;
//    var disY = pagePoint.y - center.y;
//    if(disY < 0 && Math.abs(disY / disX) >= 1) {
//        //上方
//        return 1;
//    }
//    else if(disY > 0 && Math.abs(disY / disX) >= 1) {
//        //下
//        return 2;
//    }
//    else if(disX < 0 && Math.abs(disY / disX) < 1) {
//        //左
//        return 3;
//    }
//    else {
//        //右
//        return 4;
//    }
//}
//
///*
// options中的参数:
// 触发事件的载体: targetElement
// 执行动画的载体: animationElement
// */
//function HoverAction(options) {
//    if(!options.targetElement || !options.animationElement) {
//        return false;
//    }
//    this.targetElement = options.targetElement;
//    this.animationElement = options.animationElement;
//    this.timeId = null;
//    this.speed = "0.3s";
//}
//HoverAction.prototype.addEvent = function() {
//    //保存this的指向
//    var _this = this;
//    _this.targetElement.addEventListener('mouseenter',function(e){
//        //得到鼠标的坐标
//        var point = {
//            x: e.pageX,
//            y: e.pageY
//        }
//        console.log(point);
//        //获得方向
//        var dir = getDirection(_this.targetElement,startPoint(_this.targetElement),point);
//        clearTimeout(_this.timeId);
//        //取消过渡动画(防止重置动画载体位置时触发过渡效果)
//        _this.animationElement.style.transition = "";
//        //得到运动的方向，要确定动画载体的开始位置
//        switch(dir){
//            case 1:
//                _this.animationElement.style.top = "-100%";
//                _this.animationElement.style.left = "0";
//                break;
//            case 2:
//                _this.animationElement.style.top = "100%";
//                _this.animationElement.style.left = "0";
//                break;
//            case 3:
//                _this.animationElement.style.top = "0";
//                _this.animationElement.style.left = "-100%";
//                break;
//            case 4:
//                _this.animationElement.style.top = "0";
//                _this.animationElement.style.left = "100%";
//                break;
//        }
//        //异步执行
//        _this.timeId = setTimeout(function(){
//            animation({
//                obj: _this.animationElement,
//                speed: _this.speed,
//                changeStyle: function(){
//                    this.style.top = "0";
//                    this.style.left = "0";
//                }
//            });
//        },20);
//    },false);
//    _this.targetElement.addEventListener('mouseleave',function(e){
//        var left,top;
//        var point = {
//            x: e.pageX,
//            y: e.pageY
//        }
//        clearTimeout(_this.timeId);
//        _this.animationElement.style.transition = "";
//        var dir = getDirection(_this.targetElement,startPoint(_this.targetElement),point);
//        switch(dir) {
//            case 1:
//                top = '-100%';
//                left = '0';
//                break;
//            case 2:
//                top = '100%';
//                left = "0";
//                break;
//            case 3:
//                left = "-100%";
//                top = "0";
//                break;
//            case 4:
//                left = "100%";
//                top = "0";
//                break;
//        }
//        _this.timeId = setTimeout(function(){
//            animation({
//                obj: _this.animationElement,
//                speed: _this.speed,
//                changeStyle: function(){
//                    this.style.top = top;
//                    this.style.left = left;
//                }
//            });
//        },20);
//    },false);
//
//}

//马赛克
//
//function getRandomColor() {
//    var letters = '0123456789ABCDEF';
//    var color = '#';
//    for (var i = 0; i < 6; i++ ) {
//        color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//}
//
//// min for min is 0, max for max is 256
//function getRandomColorValue(min, max){
//    if (min < 0) min = 0
//    if (max > 256) max = 256
//    if (min > max)
//    {
//        min = 0
//        max = 256
//    }
//
//    var c = parseInt(Math.random() * (max - min) + min)
//    //console.log('return ' + c)
//    return c
//}
//
//function formatHexString(str){
//    if (str.length == 1) {return '0' + str}
//    return str
//}
//
//function getRandomColorX(r_min, r_max, g_min, g_max, b_min, b_max) {
//    redHexString = formatHexString(getRandomColorValue(r_min, r_max).toString(16))
//    greenHexString = formatHexString(getRandomColorValue(g_min, g_max).toString(16))
//    blueHexString = formatHexString(getRandomColorValue(b_min, b_max).toString(16))
//    var finalString = '#' + redHexString + greenHexString + blueHexString
//    //console.log('final: ' + finalString)
//    return finalString
//}
//
//function demo() {
//    var arr = []
//    for (var i = 0; i < 100; i++) {
//        var available = "<div class='mosaic' style='background-color:" + getRandomColorX(183,185,180,256,180,256)+"'"+"></div>"
//        $("div .mosaic").append("<div class='mosaic' style='background-color:" + getRandomColorX(183,185,180,256,180,256)+"'"+"></div>")
//        arr.push(available)
//    }
//    $("div .mosaic").append(arr)
//    console.log(arr)
//}
//demo();