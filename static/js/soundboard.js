$(document).ready(function(){
    $(".boardItem").click(function(){
       $(this).parent().find(".progress .bar").css("width", '0%'); 
       $(this).find(".soundFile").get(0).play();
       //$(this).find(".progress .bar").css("width", '50%'); 
    });
    
    $(".boardItem .soundFile").bind('timeupdate', function(){
       //alert("test")
       var progress = ( $(this).get(0).currentTime / $(this).get(0).duration) * 100;
       $(this).parent().find(".progress .bar").css("width", progress+'%'); 
    });

    $(".boardItem .soundFile").bind('ended', function(){
        var progressBar =$(this).parent().find(".progress .bar");
        setTimeout(function(){
            progressBar.css("width", '0%'); 
        },1000);
    });

    $(".container").css("height", '800px');
    $(".container").css("background-image","url('static/img/background3.png')" );
    $(".container").css("background-repeat","no-repeat" );

    //$("body").css("background-image","url('static/img/background3.png')" );
});

