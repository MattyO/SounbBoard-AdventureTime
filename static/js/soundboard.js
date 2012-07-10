$(document).ready(function(){
    $(".boardItem").click(function(){
       $(this).parent().find(".progress .bar").css("width", '0%'); 
       if($(this).find(".soundFile").length > 0){
           $(this).find(".soundFile").get(0).play();
       }else if( $(this).find(".videoFile").length > 0) {
           $(this).find(".videoFile").get(0).play();
       }
       //$(this).find(".progress .bar").css("width", '50%'); 
    });
    
    $(".boardItem .soundFile").bind('timeupdate', function(){
       //alert("test")
       var progress = ( $(this).get(0).currentTime / $(this).get(0).duration) * 100;
       $(this).parent().find(".progress .bar").css("width", progress+'%'); 
    });

    $(".boardItem .videoFile").bind('timeupdate', function(){
       var progress = ( $(this).get(0).currentTime / $(this).get(0).duration) * 100;
       $(this).parent().find(".progress .bar").css("width", progress+'%'); 
       //$(this).parent().find(".progress .bar").css("width", '30%'); 
    });

    $(".boardItem .soundFile").bind('ended', function(){
        var progressBar =$(this).parent().find(".progress .bar");
        setTimeout(function(){
            progressBar.css("width", '0%'); 
        },1000);
    });

    $(".boardItem .videoFile").bind('ended', function(){
        var progressBar =$(this).parent().find(".progress .bar");
        var mediaObject = $(this).get(0);
        setTimeout(function(){
            progressBar.css("width", '0%'); 
            mediaObject.pause();
            mediaObject.currentTime = 0;
        },1000);
    });

    $(".container").css("height", '800px');
    $(".container").css("background-image","url('static/img/background3.png')" );
    $(".container").css("background-repeat","no-repeat" );

    //$(".boardItem").css("position", "absolute");
    var positions = new Array()
    $(".boardItem").each(function(){
        positions.push([$(this).position().left, $(this).position().top]);
    });

    $(".boardItem").css("position", "absolute");
    $(".boardItem").each(function(index){
     //   alert(positions[index][0] + ", " + positions[index][0]);
        var newLeft = 0, newTop=0;
        while(!(Math.abs(newLeft) >= 1000 || Math.abs(newTop) >= 1000)){
            newLeft = randomPosition(positions[index][0]);
            newTop = randomPosition(positions[index][1]);
        }
        $(this).offset({left: newLeft, top: newTop});
        $(this).animate({left: positions[index][0], top: positions[index][1]}, 'slow');
    });

    function randomPosition(number){
        return posOrNeg(sameOrBig(number));
    }
    
    function posOrNeg(number){
        if(Math.random() > .5){
            return number * -1;
        }else{
            return number; 
        }
    }
    
    function sameOrBig(number){
        if(Math.random() > .5){
            return 1000;
        }else{
            return number; 
        }
    }

});

