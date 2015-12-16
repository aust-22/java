jQuery(document).ready(function() {
jQuery(".button").toggle(function(){
    jQuery(this).text("show less..").siblings(".complete").show();    
}, function(){
    jQuery(this).text("show more..").siblings(".complete").hide();   
})
});