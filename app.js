$(document).ready(function() {   
    
    $("#about").on("click", function(){
        $("#about-page").removeClass("hidden");
        $("#projects-page").addClass("hidden");
        $("#contact-page").addClass("hidden");
    });

    $("#projects").on("click", function(){
        $("#about-page").addClass("hidden");
        $("#projects-page").removeClass("hidden");
        $("#contact-page").addClass("hidden");
    }); 
    
    $("#contact").on("click", function(){
        $("#about-page").addClass("hidden");
        $("#projects-page").addClass("hidden");
        $("#contact-page").removeClass("hidden");
    });

       
    $(".carousel .carousel-item").each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
          next.children(":first-child").clone().appendTo($(this));
          
        for (var i=0; i<minPerSlide; i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(":first");
            }              
            next.children(":first-child").clone().appendTo($(this));
        }
    });

});