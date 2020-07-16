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
function cambiarVentana2(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("Ventanas2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }
  
  document.getElementById(cityName).style.display = "block";
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

let contenedor = document.getElementsByClassName('contenidoScroll');;
let sobreMi = document.getElementsByClassName('sobreMi');;
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