$(function(){  
    $(".num li").on("mouseover",function(){
        var idx = $(this).index();
        console.log(idx);
        $(this).css("background","red").siblings().css("background","#666")
               .stop().parents(".box").find("p img").hide()
               .stop().parents(".box").find("p img").eq(idx).show();
    })
})