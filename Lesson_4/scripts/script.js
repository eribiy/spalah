$( document ).ready(function() {
    $(".switch_btn").click(function(){
       $(".switch_btn").toggleClass("active");
       $(".j-click").toggleClass("collapps");
        return false;
    });
});