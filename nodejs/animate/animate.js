window.onload=function(){
    var box=document.getElementById("box");
    box.onclick=function(){
        animate(box,{left:500,top:300,opacity:30},function(){});
        console.log(1);
    }
    function getStyle(obj,attr){
        if(obj.currentStyle){//兼容性
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,null)[attr];
        }
    }
    function animate(obj,json,callback){
        clearInterval(obj.timmer)
          obj.timmer=setInterval(function(){
                var flag=true;//标志位
                var speed=0;//速度
                for(var attr in json){
                    if(attr=="opacity"){
                        var now = parseInt(getStyle(obj,attr))*100;//获取元素的当前位置
                    }
                    else{
                        var now = parseInt(getStyle(obj,attr));//获取元素的当前位置
                    }

                    speed=(json[attr]-now)/5
                    if(speed>0)speed=Math.ceil(speed);
                    else
                        speed=Math.floor(speed);
                    var current=now+speed;
                    if(attr=="opacity"){
                        obj.style[attr]=current/100;//不要加单位
                    }
                    else{
                        obj.style[attr]=current+"px";
                    }
                    //if(current==json[attr])clearInterval(obj.timmer);//当有多个定时器是不一定是同一时间清除
                    if(current!==json[attr])
                        flag=false;//标志位，当有一个定时器没有到达时就为false
                }
                if(flag)
                    clearInterval(obj.timmer);
        },30)
    }
}