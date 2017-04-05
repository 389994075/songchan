// 要求：
    // 1、5个红色，1个蓝色，圆形
    // 2、整数  时间<500 
    // 3、红色的1-30，蓝色的1-10
    // 4、开始、停止、清空
$(function(){
    $("span:last").css("background","blue");

    var i = $("span").length-1
    function start(){
        for(var j=0;j<i;j++){
            $("span").eq(j).text(Math.floor(Math.random()*30+1));
        }
        $("span:last").text(Math.ceil(Math.random()*10));
    }
    //点击开始按钮  
        var flag = true;      
            $(".start").click(function(){
                if(flag){
                    timer = setInterval(start,10);    
                    flag = false; 
                }       
            })

    //点击停止按钮
    $(".stop").click(function(){
         clearInterval(timer);
         flag = true; 
    })

    //点击清空按钮
    $(".clear").live("click",function(){            
        clearInterval(timer);
        $("span").text(" ");
       // $("span").empty();
       flag = true; 
    })
})