function sayhello() {
    //alert("Hola Mundo");
    /* vanilla
    document.getElementById("title").style.color = "red" */
    //jquery
    $("#title").css("color","green")

}

// --------- event binding --------
/*vanilla
document
    .getElementById("helloBtn")
    .addEventListener("click", sayhello)
*/
// cambio div de estado
let enabled = false;
$("#helloBtn").on("click",sayhello)

$("#toggleBtn").on("click",function() {
    if (!enabled) {
        $("#status").removeClass("fail").addClass("success")
            .text("ON")
    }else{
        $("#status").removeClass("success").addClass("fail")
            .text("OFF")
    }
    enabled = !enabled
})

// cambio imagenes
let kitty = true
$("#changeImgBtn").on("click",function() {
    if (kitty){
        $("#kitty1").attr("src","img/angrykit.jpg")
    }else{
        $("#kitty1").attr("src","img/cuidardgatito-t.jpg.webp")
    }  
    kitty = !kitty
})

$(() => $("#draggable").draggable())


/* a partir de aqui es para restaurante */

$( "#nav" ).menu({position: {at: "left bottom"}});

/* $(() => $("#datepicker").datepicker()) */

$( function() {
    $( "#datepicker" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
    });
  } );

$( function() {
    $( document ).tooltip();
} );

$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

  $( function() {
    $( "#ciudades" ).selectmenu();
  } );

