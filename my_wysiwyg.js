
(function ( $ ) {
 
    $.fn.my_wysiwyg = function( options ) {

     
        $('body').prepend(" <div id='text' contenteditable='true' style='width: 800px; height: 130px;'></div>");// celle ci crée un contenteditable , guillaume nous a dit qu'en faite on travail pas sur le textarea mais sur une div comme celle ci
        $('body').prepend(" <div id='toolbar'></div>"); // div qui permet de placer les bouton

        $('#toolbar').append('<input type="button" value="G" />'); // creation de bouton
        $('#toolbar').append('<input type="button" value="I" />'); // creation de bouton
        $('#toolbar').append('<input type="button" value="S" "/>');// creation de bouton

        $( "input[value=G]" ).on( "click", function() { // permet que lorsque j'appui sur le button le text devient bold attention pour le tester il ne faut pas oublier je selectionner la parti a mettre en bold
            document.execCommand('bold'); // c'est une fonction javascript qui permet que cree une action a chaque chose que je met entre parenthese cela permet de donner l'action voulu aller voir la doc de execcommand 
        });

        var settings = $.extend({  // correspond au option
            color: "black",
            backgroundColor: "white"
        }, options );
 
        this.attr({     
            style:settings.style
        });

    };
}( jQuery ));

$( "textarea" ).my_wysiwyg({ 
    style: 'display: none;'// puisqu'on utilise la div pour ecrire alors on utilise pas le textarea mais on est obliger de garder le textarea
    
       
});