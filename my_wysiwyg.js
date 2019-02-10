
(function ( $ ) {
 
    $.fn.my_wysiwyg = function( options ) {

     
        $('body').prepend(" <div id='text' contenteditable='true' style='width: 800px; height: 130px;'></div>");
        $('body').prepend(" <div id='toolbar'></div>"); 

        $('#toolbar').append('<input type="button" value="G" />'); 
        $('#toolbar').append('<input type="button" value="I" />'); 
        $('#toolbar').append('<input type="button" value="S" "/>');
        $('#toolbar').append('<input type="button" value="center" "/>');
        $('#toolbar').append('<input type="button" value="gauche" "/>');
        $('#toolbar').append('<input type="button" value="droite" "/>');
        $('#toolbar').append('<input type="button" value="barré" "/>');


        $( "input[value=G]" ).on( "click", function() { 
            document.execCommand('bold'); 
        });

        $( "input[value=I]" ).on( "click", function() { 
            document.execCommand('italic'); 
        });

        $( "input[value=S]" ).on( "click", function() { 
            document.execCommand('underline'); 
        });

        $( "input[value=center]" ).on( "click", function() { 
            document.execCommand('justifyCenter'); 
        });

        $( "input[value=gauche]" ).on( "click", function() { 
            document.execCommand('justifyLeft');
        });

        $( "input[value=droite]" ).on( "click", function() { 
            document.execCommand('justifyRight'); 
        });

        $( "input[value=barré]" ).on( "click", function() { 
            document.execCommand('strikeThrough');  
        });
        
        var settings = $.extend({  
            color: "black",
            backgroundColor: "white"
        }, options );
 
        this.attr({     
            style:settings.style
        });

    };
}( jQuery ));

$( "textarea" ).my_wysiwyg({ 
    style: 'display: none;'
    
       
});