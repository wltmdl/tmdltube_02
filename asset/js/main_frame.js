//const theWidth = window.innerWidth;

//$("#id이름을 누르면").submit(function(event){alert("dd")});

$(window).resize(function(){
    var winWidth = $(window).width();
    var boxWidth = $('.video').width();
    
    
    
 
    if(winWidth <= 1600 && winWidth > 1000 ){
        $('.video').width(winWidth/5);
        $('.video').height(winWidth/6);

    }
});


