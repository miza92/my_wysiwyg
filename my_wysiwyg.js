
(function ( $ ) {
 
    $.fn.my_wysiwyg = function( options ) {

        $.fn.italique = function(name){
            this.append('<button>'+ name +'</button>');
        } 
        $('body').prepend('<div></div>');
        $('div').italique('i');
        $('div').italique('G');
 
        var settings = $.extend({
            color: "black",
            backgroundColor: "white"
        }, options );
 
       /* this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });*/
        this.attr({
            style:settings.style
        });

    };
    
 
}( jQuery ));

$( "textarea" ).my_wysiwyg({ 
    style: 'width:800px; height:100px;'
    
       
});