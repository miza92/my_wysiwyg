function gras() {
    var x = $('#textzone');
    if (x.css("font-weight") !== "bold") {
        x.css("font-weight", "bold");
    } else {
        x.css("font-weight", "normal");
    }
   }