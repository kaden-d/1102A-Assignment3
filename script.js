$(document).ready(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
});

$(document).ready(function() {
  var autoOptions = [
    "Jump", "Lazy", "Dog", "Quick",
    "Fox", "Brazil", "Glyph", "Vex",
    "Wind", "Squirm", "Text" ]; 
  $( "#autoComplete" ).autocomplete({
    source: autoOptions
  });
});

$(document).ready(function() {
    $( "#datePicker" ).datepicker();
});

$(document).ready(function() {
  $( "#slider" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 50,
    slide: function( event, ui ) {
      $( "#volume" ).val( ui.value );
    }
  });
  $( "#volume" ).val( $( "#slider" ).slider( "value" ) );
});


$(document).ready(function() {
  $( "#draggable1" ).draggable({ axis: "y", revert: true });
  $( "#draggable2" ).draggable({ axis: "x", revert: true });
  $( "#draggable3" ).draggable({ containment: "#trapped", scroll: false, revert: true });
} );

$(document).ready(function() {
  $( "#draggable4" ).draggable({ revert: "valid" });
  $( "#draggable5" ).draggable({ revert: "invalid" });

  $( "#droppable" ).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Goal!" );
    }
  });
} );

$(document).ready(function() {
  $( "#resizable" ).resizable();
} );

$(document).ready(function() {
  $( "#selectable" ).selectable();
} );

$(document).ready(function() {
  var imLazy = 0;
  function hideShow() {
    if (imLazy == 0) {
      $( "#hide1" ).hide("blind");
      imLazy = 1;
    }
    else{
      $( "#hide1" ).show("blind");
      imLazy = 0;
    };} 
  $( "#hideButton" ).on( "click", function() {
    hideShow();
  });
} );

$(document).ready(function() {
  var imLazy = 0;
  function exploded() {
    if (imLazy == 0) {
      $( "#hide2" ).hide("explode");
      imLazy = 1;
    }
    else{
      $( "#hide2" ).show("explode");
      imLazy = 0;
    };} 
  $( "#explodeButton" ).on( "click", function() {
    exploded();
  });
} );

$(document).ready(function() {
  var imLazy = 0;
  function faded() {
    if (imLazy == 0) {
      $( "#hide3" ).hide("fade");
      imLazy = 1;
    }
    else{
      $( "#hide3" ).show("fade");
      imLazy = 0;
    };} 
  $( "#fadeButton" ).on( "click", function() {
    faded();
  });
} );

$(document).ready(function() {
  var imLazy = 0;
  function color() {
    if (imLazy == 0) {
      $( "#hide4" ).animate({
        backgroundColor: "#000000",
        color: "#d3ffd3"});
      imLazy = 1;
    }
    else{
      $( "#hide4" ).animate({
        backgroundColor: "#d3ffd3",
        color: "#000000"});;
      imLazy = 0;
    };} 
  $( "#colorButton" ).on( "click", function() {
    color();
  });
} );