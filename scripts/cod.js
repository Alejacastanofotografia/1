function preloader(){
    setTimeout(function(){
		var num = 100;
		var Interval = setInterval(opacidad, 5);
		var preloader = document.getElementById('preloader');
		function opacidad(){
			if(num <= 0){
				clearInterval(Interval);
				preloader.style.display = 'none';
			} else {
				num--;
				preloader.style.height = num + '%';
			}
		}
    }, 200)
}
preloader();

function navegacion(evt, ventana, header){
	var ventanas = document.getElementsByClassName('ventanas');
	var links = document.getElementsByClassName('tabs');
	var i;
	for(i = 0; i < ventanas.length; i++){
		ventanas[i].style.display = 'none';
	}
	for(i = 0; i < links.length; i++){
		links[i].className = links[i].className.replace(" activeMain", '');
	}
	document.getElementById(ventana).style.display = 'block';
	evt.currentTarget.className += ' activeMain';
	
	if(header === 'noHead'){
		document.getElementById('imgSlider').style.display = 'none';
		document.getElementById('header').style.height = 'auto';
		for(var i = 0; i < ContendedorHMenu.length; i++){
			ContendedorHMenu[i].classList.add("contenedorSliderScroll");
		}	
		
        window.removeEventListener('scroll', mostrarScroll);
	} 
	else{
		document.getElementById('imgSlider').style.display = 'grid';
        window.addEventListener('scroll', mostrarScroll);
		
	}
}
document.getElementById('defaultClick').click();

function cambiarVentana2(evt, ventanaNombre) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("Ventanas2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }
  
  document.getElementById(ventanaNombre).style.display = "block";
  evt.currentTarget.className += " active";
       
		
  
}
function cambiarVentana3(evt, cityName) {
  var i, tabcontent, tablinks, ocultarul;
  tabcontent = document.getElementsByClassName("Ventanas2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active3", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active3";
  
   document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
	
  ocultarul = document.getElementsByClassName("1");
  for(i = 0; 1 < ocultarul.length; i++) {
	  ocultarul[i].style.display = 'none';
  }
     
}
document.getElementById("defaultOpen2").click();

function mostrarUl1(){
	document.getElementsByClassName("1")[0].style.display = 'block';
	document.getElementsByClassName("1")[1].style.display = 'none';
	document.getElementsByClassName("1")[2].style.display = 'none';
	document.getElementsByClassName("filter")[0].style.filter = 'grayscale(0%)';
	
	
}
function mostrarUl2(){
	document.getElementsByClassName("1")[1].style.display = 'block';
	document.getElementsByClassName("1")[0].style.display = 'none';
	document.getElementsByClassName("1")[2].style.display = 'none';
	document.getElementsByClassName("filter")[1].style.filter = 'grayscale(0%)';
}
function mostrarUl3(){
	document.getElementsByClassName("1")[2].style.display = 'block';
	document.getElementsByClassName("1")[0].style.display = 'none';
	document.getElementsByClassName("1")[1].style.display = 'none';
	document.getElementsByClassName("filter")[2].style.filter = 'grayscale(0%)';
}
/*navegar menu galerias movil*/
/*navegar menu galerias movil*/
function MostrarRetratos(){
    document.querySelector('#Retratosmov').style.height = 'auto';
    document.querySelector('#Retratosmov').style.opacity = '1';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
}
function MostrarQuinces(){
    document.querySelector('#Quincesmov').style.height = 'auto';
    document.querySelector('#Quincesmov').style.opacity = '1';
	document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
}
function MostrarPaisajes(){
    document.querySelector('#Paisajesmov').style.height = 'auto';
    document.querySelector('#Paisajesmov').style.opacity = '1';
	document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
}
function ocultarventanas(){
    document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
}
//**************
function cambiarVentana(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("Ventanas");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active2"; 
}
//++++++++++++++

//mostrar navegacion al hacer scroll

let contenedor = document.getElementsByClassName('contenidoScroll');
let sobreMi = document.getElementsByClassName('sobreMi');
let ContendedorHMenu = document.getElementsByClassName('contenedorSlider');
let itemsMenuMain = document.getElementsByClassName('items');
var scrollTop;
function mostrarScroll(){
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	for(var i = 0; i < contenedor.length; i++){
		let alturaAnimado = contenedor[i].offsetTop;
		if(alturaAnimado - 600 < scrollTop & screen.width > 400){
			contenedor[i].classList.add("position");
		}
		else if(screen.width < 400){
			contenedor[i].style.opacity = '1';
		}
		else{
			contenedor[i].classList.remove("position");
		}
	}
	
	
	for(var i = 0; i < sobreMi.length; i++){
		let alturaAnimado = sobreMi[i].offsetTop;
		if(alturaAnimado - 600 < scrollTop){
			sobreMi[i].classList.add("position");
		}
		else{
			sobreMi[i].classList.remove("position");
		}
	}
	
	for(var i = 0; i < ContendedorHMenu.length; i++){
		let alturaAnimado = ContendedorHMenu[i].offsetTop;
		if(alturaAnimado < scrollTop){
			ContendedorHMenu[i].classList.add("contenedorSliderScroll");
		}
		else{
			ContendedorHMenu[i].classList.remove("contenedorSliderScroll");
		}
	}
	for(var i = 0; i < ContendedorHMenu.length; i++){
		let alturaAnimado = ContendedorHMenu[i].offsetTop;
		if(scrollTop > 1000){
			ContendedorHMenu[i].classList.add("positionMenu");
		}
		else{
			ContendedorHMenu[i].classList.remove("positionMenu");
		}
	}
}

window.addEventListener('scroll', mostrarScroll);
function irArriba(){
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > 400){
		document.querySelector('#irArriba').style.display = 'block';
		
		if(scrollTop > 1)document.querySelector('#irAbajo').style.display = 'none';
	}
	else{
		document.querySelector('#irArriba').style.display = 'none';		
		document.querySelector('#irArriba').classList.add('positionBotonIrTop');
		document.querySelector('#irAbajo').style.display = 'block';		
	}
}
window.addEventListener("scroll", irArriba);
//navegacion por los books
function bookComunion(evt){
    
	document.getElementById('libroInfantil').style.display = 'none'; 
    document.getElementById('libroComunion').style.display = 'flex'; 
	
	tablinks = document.getElementsByClassName("activemedidas");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBook", "");
	
  }
	evt.currentTarget.className += " activeBook"; 
	
	var textos3 = document.getElementsByClassName('containerh');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.remove('containerhnuevo');
	}
}
function bookInfantil(evt){
    document.getElementById('libroInfantil').style.display = 'flex';
    document.getElementById('libroComunion').style.display = 'none';

    tablinks = document.getElementsByClassName("activemedidas");
     for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBook", "");
	
  }	
	evt.currentTarget.className += " activeBook"; 
	
	var textos3 = document.getElementsByClassName('containerh');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.remove('containerhnuevo');
	}
}
function bookInfantilDimensiones(evt){
    document.getElementById('libroInfantil').style.display = 'flex'; 
    document.getElementById('libroComunion').style.display = 'none'; 
   
	
	tablinks = document.getElementsByClassName("activemedidas");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBook", "");
	
  }
	evt.currentTarget.className += " activeBook"; 

	var textos3 = document.getElementsByClassName('containerh');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.add ('containerhnuevo');
	}
	
}
//parrafo automatico
/*seccion lightbox*/
//abrir y cerrar lightbox
function abrirlight(abrirgaleria){
    document.getElementById(abrirgaleria).style.display = 'block';}
function cerrarlight(cerrargaleria){
    document.getElementById(cerrargaleria).style.display = 'none';}
/*seccion lightbox*/
/*seccion lightbox*/
var num = 1;
function next(cambiar, numeroT, numerofoto, carpeta) {
    num++;
	var carpetafotos = document.getElementById(carpeta).value; 
	var indexMain = document.getElementById(numeroT).value; 
	if(num > indexMain) { //valor del ultimo elemento
	    num = 1}
		var fotos = document.getElementById(cambiar);
		    fotos.src =carpetafotos+'/img'+num+'.jpg';
			document.getElementById(numerofoto).innerHTML= num ;
	var numopaci = 60;
	var opacidadFoto = setInterval(opacidad, 10);
	function opacidad(){
	    if(numopaci == 100){
		    clearInterval(opacidadFoto);
		}
		else{
		   numopaci++;
		   document.getElementById(cambiar).style.opacity =  numopaci+'%';
		}
	}
}
//**************************************//
function prev(cambiar, numeroT, numerofoto, carpeta){
    num--;
	var carpetafotos = document.getElementById(carpeta).value; 
	var indexMain = document.getElementById(numeroT).value; 
	if(num < 1) { //valor del ultimo elemento
	    num = indexMain}
		var fotos = document.getElementById(cambiar);
		    fotos.src = carpetafotos+'/img'+num+'.jpg';
			document.getElementById(numerofoto).innerHTML= num;
    var numopaci = 60;
	var opacidadFoto = setInterval(opacidad, 10);
	function opacidad(){
	    if(numopaci == 100){
		    clearInterval(opacidadFoto);
			document.getElementById(cambiar).style.opacity =  numopaci+'%'
		}
		else{
		   numopaci++;
		   document.getElementById(cambiar).style.opacity =  numopaci+'%';
		}
	}
}

//cambiar foto automaticamente
var automatico; //para controlar que las imagenes cambien automaticamente.
var barraestado; // para controlar la barra de estado.
function playfotos(totalfotos, cambiar){
   var total= document.getElementById(totalfotos).value;
   var num = 0;
   var activecambiar;
    
   automatico = setInterval(cambiarSola, 2500);
   
   activecambiar =  document.getElementsByClassName('activeFotos');
   for(var i = 0; i < activecambiar.length; i++){
       activecambiar[i].classList.add("playplay");
   }
   var activecambiar2 =  document.getElementsByClassName('activeFotos2');
   for(var i = 0; i < activecambiar2.length; i++){
       activecambiar2[i].classList.remove("playplay");
   }
   function cambiarSola(){
       if( num == total){
	      clearInterval(automatico);
		  activecambiar =  document.getElementsByClassName('cambiarsola2');
		      for(var i = 0; i < activecambiar.length; i++){
				 activecambiar[i].click(); 
			  }
		  var cerrarautomatico = document.getElementsByClassName('cerrarLight');
		      for(var i = 0; i < cerrarautomatico.length; i++){
				 cerrarautomatico[i].click(); 
			  }
              for(var i = 0; i < activecambiar.length; i++){
                 activecambiar[i].classList.remove("playplay");
              }
		  var porcentajedebarra =  document.getElementsByClassName('barrausuario');
              for(var i = 0; i < porcentajedebarra.length; i++){
                 porcentajedebarra[i].style.width = '0%'; 
   			}	
	   }
	   else{
	   num++;
	   document.getElementById(cambiar).click();
	   }
   }
/*  funcion para completar la barra de estado de 0 a 100 */ 
   var porcentaje = total * 2500;
   var porcentaje2 =  porcentaje / 1000; //para que le tiempo de intervalo sea menor y la barra avance con mas normalidad
   var numPorcentaje = 0; 
   barraestado = setInterval(estadodelabarra, porcentaje2);
   
   function estadodelabarra(){
       if(numPorcentaje == 100){
		   clearInterval(automatico); 
	    }
	   else{
	        numPorcentaje = numPorcentaje+ 0.1;
	       
			var porcentajedebarra =  document.getElementsByClassName('barrausuario');
            for(var i = 0; i < porcentajedebarra.length; i++){
            porcentajedebarra[i].style.width = numPorcentaje+'%'; 
            }
	    }
   }
 /*    */ 
   
   
  
}
function Stopfotos(){  
    clearInterval(barraestado); 
    clearInterval(automatico);
	var activecambiar =  document.getElementsByClassName('activeFotos');
   for(var i = 0; i < activecambiar.length; i++){
       activecambiar[i].classList.remove("playplay");
   }
   var activecambiar2 =  document.getElementsByClassName('activeFotos2');
   for(var i = 0; i < activecambiar2.length; i++){
       activecambiar2[i].classList.add("playplay");
   }
   var defatulbarra =  document.getElementsByClassName('barrausuario');
   for(var i = 0; i < defatulbarra.length; i++){
       defatulbarra[i].style.width = '1px';
   }
  
}

/*seccion lightbox*/
/*seccion lightbox*/
var interval;
var elementoP;
var elementoP2;
	var i;
function parrafosi(){
	var num = 0;
	interval = setInterval(functionInterval, 300);	
	
	function functionInterval(){
		if(num >= 13){
			clearInterval(interval);
            stop();
		}
		else{
			num++;
	    elementoP = document.querySelector('.frasehomeP i:nth-child('+num+')');
	    elementoP.style.color = '#bbb';
		}
	}
}
function stop(){
	var num = 14;
	interval2 = setInterval(functionInterval2, 300)
	
	function functionInterval2(){
		if(num <= 1){
			clearInterval(interval2);
            parrafosi();	
		}
		else{
			num--;
	    elementoP = document.querySelector('.frasehomeP i:nth-child('+num+')');
	    elementoP.style.color = 'transparent';
		}
	}
}
parrafosi();

function frases(){	

        var frase1 = ' “Hoy todo existe para culminar en una fotografía”.Susan Sontag                  ';
        var frase2 = ' “La fotografía es el único medio de expresión que fija siempre el instante preciso y fugitivo”. Cartier Bresson              '; 
        var frase3 = ' "Si pudiera decirlo con palabras, no iría todos los días cargado con mi cámara”. Lewis Hine           ';
        var frase4 = ' “La fotografía es el único lenguaje que puede ser entendido y comprendido en todo el mundo”. Bruno Barbey                 ';
        var frase5 = ' “El corazón y la mente son la verdadera lente de la cámara”. Yousuf Karsh                   ';
        var frase6 = ' “La fotografía ayuda a las personas a ver”. Berenice Abbott              ';
        var frase7 = ' “La tierra es arte, el fotógrafo es solo un testigo". Arthus-Bertrand              ';
        var write1 = document.getElementById('write1');
        var write2 = document.getElementById('write2');
        var write3 = document.getElementById('write3');
        var write4 = document.getElementById('write4');
        var write5 = document.getElementById('write5');
        var write6 = document.getElementById('write6');
        var write7 = document.getElementById('write7');
			num1 = 0; num2 = 0; num3 = 0; num4 = 0; num5 = 0; num6 = 0; num7 = 0;
		var interval = setInterval(escribir, 100);
		var interval2 = setInterval(escribir2, 100);
		var interval3 = setInterval(escribir3, 100);
		var interval4 = setInterval(escribir4, 100);
		var interval5 = setInterval(escribir5, 100);
		var interval6 = setInterval(escribir6, 100);
		var interval7 = setInterval(escribir7, 100);
		function escribir(){
		    if(num1 >= frase1.length - 1){
				num1 = 0;
				write1.innerHTML = ' ';
		    }
		    else{
				++num1;
				write1.innerHTML += frase1[num1];	
		    }
		}		
		function escribir2(){
		    if(num2 >= frase2.length - 1){
				num2 = 0;
				write2.innerHTML = ' ';
		    }
		    else{
				++num2;
				write2.innerHTML += frase2[num2];	
		    }
		}		
		function escribir3(){
		    if(num3 >= frase3.length - 1){
				num3 = 0;
				write3.innerHTML = ' ';
		    }
		    else{
				++num3;
				write3.innerHTML += frase3[num3];	
		    }
		}		
		function escribir4(){
		    if(num4 >= frase4.length - 1){
				num4 = 0;
				write4.innerHTML = ' ';
		    }
		    else{
				++num4;
				write4.innerHTML += frase4[num4];	
		    }
		}		
		function escribir5(){
		    if(num5 >= frase5.length - 1){
				num5 = 0;
				write5.innerHTML = ' ';
		    }
		    else{
				++num5;
				write5.innerHTML += frase5[num5];	
		    }
		}		
		function escribir6(){
		    if(num6 >= frase6.length - 1){
				num6 = 0;
				write6.innerHTML = ' ';
		    }
		    else{
				++num6;
				write6.innerHTML += frase6[num6];	
		    }
		}		
		function escribir7(){
		    if(num7 >= frase7.length - 1){
				num7 = 0;
				write7.innerHTML = ' ';
		    }
		    else{
				++num7;
				write7.innerHTML += frase7[num7];	
		    }
		}
}
frases();