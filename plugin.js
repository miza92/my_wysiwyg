(function($) {
	var shade = "#556b2f"; 
    $.fn.my_wysiwyg = function( options ) {
    	//test
        $('h2').css( "color", shade );
        
        //autofocus ça (marche pas) 
        this.click(function() {
        	$("textarea").focus();
        	return $("textarea");
        });
        //taille de textarea
        //on recupere la taille

        //je donne une taille initiale
        $("textarea").attr('style','width:300px; height:300px;');
       //$("textarea").attr('style','height:3000px');

        
    };
}( jQuery ));