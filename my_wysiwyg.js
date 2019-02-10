
(function ( $ ) {
    
    $.fn.my_wysiwyg = function( options ) {
        
        
        $('body').prepend(" <div id='text' contenteditable='true' style='width: 800px; height: 130px; border: 2px solid black'></div>");
        $('body').prepend(" <div id='toolbar'></div>"); 
        
        var bouttons = ['bold','italic','souligner','center','gauche','droite','barré','police','color','indent','outdent','select'];
        
        for(var button = 0 ; bouttons.length > button; button++){
            if(bouttons[button] == 'select'){
                $('#toolbar').append('<select></select>');
                for(var i=1; i<8; i++){
                    $('select').append("<option selected='selected'value="+i+">size "+i+"</option>");
                }
            }  
            else{
                $('#toolbar').append("<input type='button' value="+bouttons[button]+">");
            }
        }
        
        $( "input[value=bold]" ).on( "click", function() { 
            document.execCommand('bold'); 
        });
        
        $( "input[value=italic]" ).on( "click", function() { 
            document.execCommand('italic'); 
        });
        
        $( "input[value=souligner]" ).on( "click", function() { 
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
        
        $( "input[value=police]" ).on( "click", function() { 
            var x = prompt('entrer le nom de votre police?');
            document.execCommand('fontName',true ,x); 
        });
        
        $( "input[value=color]" ).on( "click", function() { 
            var y = prompt('entrer une couleur?');
            document.execCommand('foreColor',true ,y); 
        });
        
        $( "input[value=indent]" ).on( "click", function() { 
            document.execCommand('indent',true ,null); 
        });
        
        $( "input[value=outdent]" ).on( "click", function() { 
            document.execCommand('outdent',true ,null); 
        });
        
        $( "select" ).change(function() { 
            var str = "";
            $( "select option:selected" ).each(function() {
                str += $( this ).val() + " ";
            });  
            document.execCommand('fontSize',true, str);    
        });
        
        
        var settings = $.extend({  
            
        }, options );
        
        this.attr({     
            style:settings.style
        });
        
    };
}( jQuery ));

$( "textarea" ).my_wysiwyg({ 
    style: 'display: none;' 

});