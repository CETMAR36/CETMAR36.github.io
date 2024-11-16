jQuery.fn.fadeToggle = function(speed, easing, callback) {
return this.animate({opacity: 'toggle'}, speed, easing, callback);  
};


$(document).ready(function(){

$(".oculto").hide();


$(".mostrar").click(function(){
		$(this).next(".oculto").slideToggle("slow");
		$(this).toggleClass("activo");

}); }); 

