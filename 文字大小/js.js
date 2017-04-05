
//parseInt()取整数  parseFloat() 浮点数 Math.round() 四舍五入  吗Math.random() 随机数
//slideToggle
$(function(){
    $("#max").click(function(){
        var pText=$("p").css("fontSize"),
            a=parseInt(pText)+2+"px";
        $("p").css("fontSize",a);
    })

    $("#min").click(function(){
        var pText=$("p").css("fontSize"),
            a=parseInt(pText)-2+"px";
        $("p").css("fontSize",a);
    })


    /*对象.animate({
            "width" : "100px",
            "height" : "200px"
        },timer)*/

    $('.box').click(function(){  
        $(this).animate({
            "width" :"100px",
            "height" : "200px",
            "border-radius" : "50px"
        },1000);
    })
})
//当字体大小为9时，fontsize不发生变化