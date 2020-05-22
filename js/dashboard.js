
var i=0;
$('.menu').click(function(){
    // $('#menu-bar').toggle("slow");
    $("#menu-bar").animate({
        width: "toggle",
    });
    // if(i==0){
    //     $("#dashboard-area").width("100%");
    //     i=1;
    // }
    // else{
    //     $("#dashboard-area").width("80%");
    //     i=0;
    // }

})

var flag=true;
$(document).ready(function(){
$(".click-toggle").click(function(){
    $(this).next(".slide-bar").slideToggle("slow");
    if(flag){
        $(".rotate-icon").css({
            "transform": "rotate(-90deg)"
        });
        flag=false;
    }else{
        $(".rotate-icon").css({
            "transform": "rotate(180deg)"
        }); 
        flag=true;
    }
    
})
});

