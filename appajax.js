
$( document ).ready(function() { 
  

  $('#miboton').on('click',function(){ //peticion a ajax a la pag https(pag gratis)con un formato -Json-(con un tipo de datos)
     var aux= $("#numpersonas").val();
    
    $.ajax({
          url: 'https://randomuser.me/api/?results='+ aux,
          dataType: 'json',
          success: function(datos) {  //cuando tenga exito 
              $('#personas').empty();       
            $.each(datos.results,function(k, v){  //k=posicion
              $('#personas').append(v.name.first+ " "+v.name.last+" "+v.phone+ " " +v.email);//v=datos.results[k]
              $('#personas').append('<img class="rounded-circle" src="'+v.picture.large +'" alt="">');
             
              $('#personas').append('<br>'); //
            });
          }
      });
  });
  
});
  
  
  
  
  
  
  
  
  
  