/*
* @Author: Marte
* @Date:   2017-12-09 18:03:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-09 18:09:14
*/

'use strict';
    var send = document.getElementsByClassName('send')[0];
    var area = document.getElementsByClassName('area')[0];
    var warning = document.getElementsByClassName('warning')[0];
    var msgBox = document.getElementById('msgBox');
    var talkMsg = document.getElementsByClassName("talkMsg")[0];
    var hideBox = document.getElementsByClassName("hideBox")[0];
    var smile=document.getElementsByClassName('smile')[0];
    var tubiao=document.getElementsByClassName('tubiao')[1];
    var timer;
    var x=1;
    for(var i=1;i<=132;i++)
    {
        smile.innerHTML+="<img src=img/QQ/"+i+".gif>"
    }
    tubiao.onclick=function(){
        smile.style.display =smile.style.display=='block' ? 'none':'block';
        // if(x==1)
        // {
        //  smile.style.display="block";
        //  x=2;
        // }
        // if(x==2)
        // {
        //  smile.style.display="none";
        //  x=1;
        // }
    }
    talkMsg.oncontextmenu=function(e){
        e.preventDefault();
        hideBox.style.display="block";
        hideBox.style.left=e.clientX -335 + "px";
        hideBox.style.top=e.clientY -100 + "px";
    }
    document.onclick=function(){
        hideBox.style.display="none";
    }
    // 回车发送消息
    area.onkeydown = function(e){
        if(e.keyCode == 13&&e.shiftKey==false){
            send.onclick();
            e.preventDefault();
        }
    }

    // 点击发送按钮发送消息
    send.onclick = function(){
        if (area.value == '') {
            warning.style.display = 'block';
            clearTimeout(timer);
            timer = setTimeout(function(){
                warning.style.display = 'none';
            },1000)
        }else{
            var li = document.createElement('li');
            li.className = 'clearFix';
            li.innerHTML = '<p class="time">'+new Date().toLocaleString()+'</p><p class="content"><span class="conText">'+area.value+'</span><span class="myHead"></span></p>';
            msgBox.appendChild(li);
            li.scrollIntoView();
            area.value ='';
            area.focus();
        }
    }