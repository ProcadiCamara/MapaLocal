window.onload = function(){

$("#pop").css("display","none");

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var circles = [];

var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, textalignVer, fonttype, filltext) {
   
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = fillcolor;
    context.fill();
    context.lineWidth = linewidth;
    context.strokeStyle = strokestyle;
    context.stroke();
    
    context.fillStyle = fontcolor;
    context.textAlign = textalign;
    context.font = fonttype;

    //centrar verticalmente
    context.textBaseline = textalignVer;
    
    context.fillText(filltext, x, y);    
};
var Circle = function(x, y, radius) {
    this.left = x - radius;
    this.top = y - radius;
    this.right = x + radius;
    this.bottom = y + radius;
};
var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, textalignVer, fonttype, filltext, circles) {
    draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, textalignVer, fonttype, filltext);
    var circle = new Circle(x, y, radius);
    circles.push(circle);  
};
function definirCirculo(i){
    if (i==0){
      setTimeout(mostrar("fachada1.jpg","rgb(0, 102, 0)", "EDIFICIO A", "Salon de Sesiones/Mesa Directiva 2do Piso/Grupos Parlamentarios/Servicio Medico"),100);
    }
    else if(i==1){
      setTimeout(mostrar("edificiob.jpg", "rgb(112, 48, 160)", "EDIFICIO B","Grupos Parlamentarios"),100);
    }
    else if(i==2){
      setTimeout(mostrar("museo1.jpg", "rgb(254, 0, 0)","EDIFICIO C","Grupos Parlamentarios/Comisiones/Museo Legislativo/Biblioteca, Hemeroteca y Mapoteca/Salon de Protocolo"),100);
    }
    else if(i==3){
      setTimeout(mostrar("edificiod.jpg", "rgb(149, 55, 53)","EDIFICIO D","Comisiones/Comites/Canal del Congreso"),100);
    }
    else if(i==4){
      setTimeout(mostrar("edificioe.jpg", "rgb(228, 108, 10)","EDIFICIO E","Comite de Administracion/Comisiones/Areas Administrativas/Auditorio/Bancos/Agencias de Viajes"),100);
    }
    else if(i==5){
      setTimeout(mostrar("edificiof.jpg", "rgb(74, 69, 42)","EDIFICIO F","Grupos Parlamentarios/Comisiones/Centro de Capacitacion"),100);
    }
    else if(i==6){
      setTimeout(mostrar("edificiog.jpg", "rgb(49, 133, 156)","EDIFICIO G","Grupos Parlamentarios/Comites/Unidad de Evaluacion y Control <br> de la Auditoria Superior de la Federacion/Restaurante y Cafeteria"),100);
    }
    else if(i==7){
      setTimeout(mostrar("edificiod.jpg", "rgb(214, 0, 147)","EDIFICIO H","Junta de Coordinacion Politica/Grupos Parlamentarios"),100);
    }
    else if(i==8){
      setTimeout(mostrar("edificiod.jpg", "rgb(64, 64, 64)","EDIFICIO I","Centros de Estudio"),100);
    }

}

drawCircle(context, 310, 207, "rgb(0, 102, 0)", 25, 4, "#003300", "white", "center", "middle", "bold 20px Arial", "A", circles);
drawCircle(context, 227, canvas.height / 3, "rgb(112, 48, 160)", 25, 4, "#003300", "white", "center", "middle", "bold 20px Arial", "B", circles);
drawCircle(context, 227, 290, "rgb(254,0,0)", 25, 4, "#003300", "white", "center", "middle", "bold 20px Arial", "C", circles);
drawCircle(context, 227, 390, "rgba(149, 55, 53, 1)", 25, 4, "#003300", "white", "center", "middle", "bold 20px Arial", "D", circles);
drawCircle(context, 310, 390, "rgb(228, 108, 10)", 25, 4, "#003300", "white", "center", "middle", "bold 20px Arial", "E", circles);
drawCircle(context, 390, 390, "rgb(74, 69, 42)", 25, 4, "#003300", "white", "center","middle", "bold 20px Arial", "F", circles);
drawCircle(context, 390, 290, "rgb(49, 133, 156)", 25, 4, "#003300", "white", "center","middle", "bold 20px Arial", "G", circles);
drawCircle(context, 390, canvas.height / 3, "rgb(214, 0, 147)", 25, 4, "#003300", "white", "center", "middle","bold 20px Arial", "H", circles);
drawCircle(context, 140, 390, "rgb(64, 64, 64)", 15, 4, "#003300", "white", "center", "middle", "bold 15px Arial", "I", circles);


$('#myCanvas').click(function (e) {

    var clickedX = e.pageX - this.offsetLeft;
    var clickedY = e.pageY - this.offsetTop;
    for (var i = 0; i < circles.length; i++) {
        if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
            borrar();
            definirCirculo(i);                  
        }
        else
          $("#pop").hide();
    }
});


function borrar(){
  $("#titulo").empty();
  $("#edificios").empty();
}

function mostrar(imagen,color,texto,edificios) {
  $("#titulo").css("background-color",color);
  $("#imagen").css("background-image","url("+imagen+")");

  var edificios=edificios;
  var elem=edificios.split('/');

  for(i=0; i<elem.length; i++){
      $("#edificios").append('<li>'+elem[i]+'</li>');
  }

  $("#pop").fadeIn('fast');

  //Conseguir valores de la img
   var img_w = $("#pop img").width() + 10;
   var img_h = $("#pop img").height() + 28;
   
  //Consigue valores de la ventana del navegador
  var w = $('#myCanvas').width();
  var h = $('#myCanvas').height();
   
  //Centra el popup   
  h=0;
  $("#pop").css("left",w + "px");
  $("#pop").css("top",h + "px");   
  
  $("#titulo").append('<strong>'+texto+'</strong>');
 
}
}
