var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "white"
pincel.fillRect(600,20,200,300); 

var img = new Image();
img.src = "./img/logo alura.png";
pincel.drawImage(img, 0, 0);


img.onload = function(){
    pincel.drawImage(img, 25, 25);
  }

function dibuja() {

    error_mono++;

    if (error_mono == 1) {  // linea base
        horca(530, 250, 180, 10,"blue" )
    }
    else if (error_mono == 2) {//barra vertical
        horca(550, 50, 5, 200, "blue" )
    }
    else if (error_mono == 3) { 
        horca(550, 50, 80, 10, "blue" )
    }
    else if (error_mono == 4) { 
        horca(625, 60, 5, 30, "blue" )
    }
    else if (error_mono == 5) {  // cabeza mono  
        pincel.fillStyle = "#0A3871"; 
        pincel.beginPath();
        pincel.arc(628,110,20,0,2*3.14)
        pincel.fill()
    }
    else if (error_mono == 6) { 
        horca(625, 130, 5, 70, "#0A3871" )
    }
    else if (error_mono == 7) { 
        // brazo izquierdo
        figura(630, 135, 630, 150, 600, 155, "#0A3871");
    }
    else if (error_mono == 8) { 
        // brazo derecho
        figura(630, 138, 630, 150, 660, 155, "#0A3871");
    }
    else if (error_mono == 9) { 
        //PIERNA DERECHA
        figura2(5,628,195,645,232, "#0A3871");
    }
    else if (error_mono == 10) { 
        //PIERNA IZQUIERDA
        figura2(5,628,195,600,230, "#0A3871");
    }
}

function horca(x, y, w, h, color){
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(x,y) 
    pincel.fillRect(x,y,w,h) //base
    pincel.fill()
}

function figura(a, b, c, d, e, f, color){
    pincel.fillStyle = color;
    pincel.beginPath(); //nos abre un nuevo camino, para seguir creando instrucciones.
    pincel.moveTo(a, b);
    pincel.lineTo(c, d);
    pincel.lineTo(e, f);
    pincel.fill();
}

function figura2(a, b, c, d, e, color){
    pincel.strokeStyle = color;
    pincel.lineWidth = a;
    pincel.beginPath();
    pincel.moveTo(b, c);
    pincel.lineTo(d, e);
    pincel.stroke();
}