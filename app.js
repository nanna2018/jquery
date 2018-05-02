
$( document ).ready(function() { 
  
  $('#miboton1').on('click',function(){ //se da al 1 se activa el 3 y te cambia el boton y nombre.Y si das el 3 se oculta img
    $('#miboton3').removeClass().addClass('btn btn-success');//
    $('#miboton3').text('Activado');
    $('#miboton3').on('click',function(){
       $('img').hide()
    });
  });
    $('#miboton2').on('click',function(){
      $('#miboton3').on('click');
    
   });

 /* $('#miboton1').on('click',function(){
    $('#miboton3').on('click',function(){ //
       $('img').hide()
    });
  });
    $('#miboton2').on('click',function(){
      $('#miboton3').on('click');
    
   });
*/















  });





 /*cuando hago clik en el 1 y 2 activo el 3
 $('#miboton1,#miboton2').on('click',function(){
   $('#miboton3').on('click',function(){
      $('img').hide()
   });
 
  });
 


 
 
 
 
 /* $('img').on('mousedown',function(){  //
    $(this).height(300);
     
  });
     $('img').on('mouseup mousemove',function(){ 
      $(this).height(200);
      
   });
 
  $('img').on('mouseover',function(){  //se hara de esta menera siempre//
    $(this).height(300);
     
  });
     $('img').on('mouseout',function(){ 
      $(this).height(200);
      
   });
 
  });
  $('img').mouseover(function(){  //lo hace solo de una en una.con estas dos funciones//
     $(this).height(200);
      $(this).off('mouseover');

  });
  $('img').mouseout(function(){
    $(this).height(500);
 });
 
 $('img').off('mouseover');  //apago definitivamente el boton//al final no me hace nada
 $('img').on('mouseover');  //activo de nuevo
});
 




  $('img').mouseup(function(){    //se cambia los dos imagenes a la vez. pro
     $('img').height(200);

  });
  $('img').mouseout(function(){
    $('img').height(500);

 });
  
  
});
Es obligatorio poner esta línea//
    
    $( 'button' ).click(function() {

       // $('#mitexto').text("Has pinchado en mi boton");
         
       // $("#mitexto").css('color','red');
        //$('img').height ('200px');

        //$('img').hide();  // que desaparezca//
       // $('img').show();  //que aparezca//
       // $('img').toggle();// interruptor//
       // $('img').fadeOut(4000,300);
       // function completado(){
       //     $('img').fadeOut(1600,completado);   
        //}

      //$('#mitexto').removeClass("miestilo");

     // $('#micapa').css('background-color','green');  //click sobre un boton-> un div se ponga con fondo verde
  
     $('#micapa').css(
      {
         'font-size':'20px',
         'background-color':'rgba(0, 89, 255, 0.356',
         'color':'white'

       }
      );
    });
      $('button').removeClass('btn-primary').addClass('btn-success');

      $('#miboton1').mouseover(function(){
        $('#micapa').append('<p>este es el nuevo texto</p>');  //para poner texto al pasar por un boton
      });
        $('#miboton2').mouseover(function(){
          $('#micapa > p:last-child').remove();   //para borrar texto al pasar por el boton segundo
        });
        
        $('#miboton3').click(function(){                
           console.log( $('#micapa > p:first-child').text());  

          if($('#micapa > p:first-child').text()=='Hoy'){
            $('#micapa > p:first-child').text('ja,ja,ja');  //si el parrafo tiene Hola , quitarlo.
          }                                                 //si pongo renove en vez de text cambio la palabra
           
        });


*/
    