var i;
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
    }, 10)
}
// preloader();

function navegacion(evt, ventana, header, activeLink){
	var ventanas = document.getElementsByClassName('ventanas');
	var links = document.getElementsByClassName('tabs');
	var i;
	for(i = 0; i < ventanas.length; i++){
		ventanas[i].style.display = 'none';
	}
	document.getElementById(ventana).style.display = 'block';
	
	for(i = 0; i < links.length; i++){
		links[i].style.borderBottom = 'none';
	}
	document.getElementById(activeLink).style.borderBottom = '1px solid #aaa';
	document.getElementById(activeLink).style.color = '#fff';
	// for(i = 0; i < links.length; i++){
		// links[i].className = links[i].className.replace(" activeMain", '');
	// }
	// evt.currentTarget.className += ' activeMain';
		
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
	
	var vent = document.querySelectorAll('.contenedorSlider .items');
	var headM = document.getElementsByClassName('contenedorSliderScroll');
	var headM1 = document.getElementsByClassName('contenedorSlider');
	if(ventana === 'Admin'){
		for(var i = 0; i < headM1.length; i++){
		headM1[i].style.background = '#101010';
		headM1[i].style.borderBottom = 'none';
			
		}
		
		vent[1].style.display = 'none';	vent[2].style.display = 'none';	vent[3].style.display = 'none';	vent[4].style.display = 'none';}
	else{
		document.getElementsByClassName('contenedorSliderScroll')[0].style.borderBottom = '1px solid #202020';
		vent[1].style.display = 'block';	vent[2].style.display = 'block';	vent[3].style.display = 'block';	vent[4].style.display = 'block';
	 }
}
function cambiosAdmin(){
		
}
document.getElementById('defaultClick').click();
// setTimeout(function(){
	// document.getElementById('buttonAdmin').click();
// }, 100);
// setTimeout(function(){
	// document.getElementById('navSesiones').click();
// }, 100);
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
function cambiarVentana3(evt, nombreVentana, opcionMenu) {
  var i, tabcontent, opcionesMovil;
  tabcontent = document.getElementsByClassName("Ventanas2");
  opcionesMovil = document.getElementsByClassName("opcionesMovil");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(nombreVentana).style.display = "block";
  
    for (i = 0; i < opcionesMovil.length; i++) {
         opcionesMovil[i].style.filter = 'grayscale(100%)'; 
         opcionesMovil[i].style.color = '#909090';	
	}
	 document.getElementById(opcionMenu).style.filter = 'grayscale(0)';	 
	 document.getElementById(opcionMenu).style.color = '#fff';	 
}
document.getElementById("defaultOpen2").click();

//mostrar navegacion al hacer scroll

let contenedor = document.getElementsByClassName('contenidoScroll');
let ContendedorHMenu = document.getElementsByClassName('contenedorSlider');
let itemsMenuMain = document.getElementsByClassName('items');
var scrollTop;
let scrollMain = window.pageYOffset;
window.onscroll = function(){
	let desplazamiento_actual = window.pageYOffset;
		if(scrollMain >= desplazamiento_actual){
	      	ContendedorHMenu[0].style.transform = 'translate(0, 0)';
	    }else {
	     	ContendedorHMenu[0].style.transform = 'translate(0, -100%)';
	    }	
	    scrollMain = desplazamiento_actual;		
	
} 
function mostrarScroll(){
	
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	for(var i = 0; i < contenedor.length; i++){
		let alturaAnimado = contenedor[i].offsetTop;
		if(alturaAnimado - 600 < scrollTop){
			contenedor[i].classList.add("position");
		}
		else{
			contenedor[i].classList.remove("position");
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
}

window.addEventListener('scroll', mostrarScroll);
function irArriba(){
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > 400){
		document.querySelector('#irArriba').style.opacity = '1';
		
	}
	else{
		document.querySelector('#irArriba').style.opacity = '0';		
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
var numAnim = 0;
function next(cambiar, numeroT, numerofoto, carpeta) {
    num++;
	var carpetafotos = document.getElementById(carpeta).value; 
	var indexMain = document.getElementById(numeroT).value; 
	if(num > indexMain) { //valor del ultimo elemento
	    num = 1}
		var fotos = document.getElementById(cambiar);
		    fotos.src =carpetafotos+'/img'+num+'.jpg';
			document.getElementById(numerofoto).innerHTML= num ;
		
		if(screen.width > 450){
			numAnim = 100;
			var intervalAnimacion = setInterval(moviendo, 5);
			function moviendo(){
				if(numAnim <= 0){
					clearInterval(intervalAnimacion);
					fotos.style.transform = 'translate(0px)';
				}
				else{
					numAnim--;
					fotos.style.transform = 'translate(-' + numAnim + 'px)';
				}
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
}

//cambiaticamente
var automatico; //para controlar que las imagenes ar foto automcambien automaticamente.
var barraestado; // para controlar la barra de estado.
var playy = document.getElementsByClassName('activeFotos');
var stopp = document.getElementsByClassName('activeFotos2');
function playfotos(totalfotos, cambiar){
   var total= document.getElementById(totalfotos).value;
   var num = 0;
   
        for(var i = 0; i < playy.length; i++){
            playy[i].style.display = 'none'; 
        }
		for(var i = 0; i < stopp.length; i++){
            stopp[i].style.display = 'block'; 
        }
   automatico = setInterval(cambiarSola, 2500);
  
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
    var defatulbarra =  document.getElementsByClassName('barrausuario');
    for(var i = 0; i < playy.length; i++){
        playy[i].style.display = 'block'; 
    }
	for(var i = 0; i < stopp.length; i++){
        stopp[i].style.display = 'none'; 
        }
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

        var frase1 = ' “Hoy todo existe para culminar en una fotografía”. Susan Sontag                                             ';
        var frase2 = ' “La fotografía es el único medio de expresión que fija siempre el instante preciso y fugitivo”. Cartier Bresson                                      '; 
        var frase3 = ' "Si pudiera decirlo con palabras, no iría todos los días cargado con mi cámara”. Lewis Hine                                        ';
        var frase4 = ' “La fotografía es el único lenguaje que puede ser entendido y comprendido en todo el mundo”. Bruno Barbey                                 ';
        var frase5 = ' “El corazón y la mente son la verdadera lente de la cámara”. Yousuf Karsh                                            ';
        var frase6 = ' “La fotografía ayuda a las personas a ver”. Berenice Abbott                                              ';
        var frase7 = ' “La tierra es arte, el fotógrafo es solo un testigo". Arthus-Bertrand                                                   ';
        var write1 = document.getElementById('write1');
        var write2 = document.getElementById('write2');
        var write3 = document.getElementById('write3');
        var write4 = document.getElementById('write4');
        var write5 = document.getElementById('write5');
        var write6 = document.getElementById('write6');
        var write7 = document.getElementById('write7');
        var writeuser = document.getElementsByClassName('writeuser');
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
				for (i = 0; i < writeuser.length; i++){
					writeuser[i].innerHTML = ' ';				
				}
		    }
		    else{
				++num7;
				write7.innerHTML += frase7[num7];
				for (var i = 0; i < writeuser.length; i++){
					writeuser[i].innerHTML += frase7[num7];			
				}	
		    }
		}
}
frases();
// login

var cerrar = true;		
function abrirMenuLogin(){
	let menuLogin = document.getElementsByClassName('menuLogin');
	if(cerrar){
		menuLogin[0].style.top = '0';
		cerrar = false;
	}
	else{
		menuLogin[0].style.top = '-150%';
		cerrar = true;
	}
}
var menuGalerias = document.getElementById('navSesiones');
var usuario = document.getElementById('usuario');
var documento= document.getElementById('documento');
var login = document.getElementById('formularioLogin');
var nombreUsuariomenuInner = document.getElementById('nombreUsuariomenu');
var nombreUsuariomenu = document.getElementsByClassName('nombreUsuariomenu');


var	nombreUsuario = document.getElementsByClassName('nameUser');
var mensaje;
var nombre;
login.addEventListener('submit', function(evt){
	evt.preventDefault();
	// formulario
	var documentoUsuario = documento.value;
	var usuarioLogin = usuario.value;
	// mensajes
	var mensajeError = document.getElementById('mensajesFormularioLogin');
	var mensajeExitoso = document.getElementById('mensajeBienvenida');
	var nombreUsuarioTitulo = document.getElementById('nombreUsuarioTitulo');
		mensajeError.style.display = "block";
		mensajeExitoso.style.display = "block";
	
	if(documentoUsuario === '1' & usuarioLogin ==='1'){
		nombre = ['Violeta', 'Violeta Golosa',  '10'];
		loginExitoso(nombre);		
	}
	else if(documentoUsuario === '2'& usuarioLogin ==='2'){
		nombre = ['Gaby', 'Gaby Yurfary','11'];
		loginExitoso(nombre);		
	}
	else if(documentoUsuario === '123456'& usuarioLogin ==='123456'){
		nombre = ['Alejandra','Alejandra Castaño',  '11'];		
	    loginExitoso(nombre);		
	}
	else if(documentoUsuario === 'Aleja2020'){
            document.getElementsByClassName('menuLogout')[0].style.display = 'block';
			login.style.display = 'none';
            nombreUsuarioTitulo.innerHTML = 	'Administrador';	
			nombreUsuariomenu[0].style.display = 'flex';
			nombreUsuariomenuInner.innerHTML = 'Administrador';	
            document.getElementById('buttonAdmin').style.display = 'block';			
            document.getElementsByClassName('enlaceDescargar')[0].style.display = 'none';			
	}
	else{
		mensajeError.innerHTML = 'El número de documento ingresado no existe en nuestra base de datos, por favor verificalo o contactanos para más información.' ;
	    mensajeError.style.background = "#ff0000";	
        mensajeError.style.color = "#fff";	
        documento.value = '';	
	}
	function loginExitoso(nombre, mensaje){
		let userSesion= document.getElementsByClassName('userSesion');
		    for(i = 0 ; i < userSesion.length; i++){
			userSesion[i].click();
			userSesion[i].style.display = 'flex';
		    }				
			for(i = 0; i < nombreUsuario.length; i++){nombreUsuario[i].value = nombre[0]}
			menuGalerias.click();
            document.getElementsByClassName('menuLogout')[0].style.display = 'block';
			// login.style.display = 'none';
			mensajeExitoso.style.display = "none";
	     	mensajeExitoso.style.display = "block";	
	     	mensajeExitoso.innerHTML = `Hola ${nombre[0]}, tus fotografías se encuentran publicadas en la pestaña Sesiones/Retratos`;	
            nombreUsuarioTitulo.innerHTML = nombre[1];	
			nombreUsuariomenu[0].style.display = 'flex';
			nombreUsuariomenuInner.innerHTML = nombre[1];
			
	        document.getElementById('usuariosTotal').value = `${nombre[2]}`;
            setTimeout(function(){
		    // abrirMen	uLogin();
			mostrarGaleriaUser();
			},1000);			
	}
});


function mostrarGaleriaUser(){ 
	let folderTotal = document.getElementById('usuariosTotal').value;
	let folderName = document.getElementsByClassName('nameUser')[0].value;
	let listaFotosUser = document.getElementById('listaFotosUser');
	// document.getElementById('usuariosTotal').value = `${folderTotal}`;
	document.getElementById('carpetausuarios').value = `Imagenes/Galerias/usuarios/${folderName}`;
	let html = '';
	let html2 = '';
    for(var i = 1; i <= 10; i++){
		
	    const contenedor = `
	            <li>
			        <a href="#" onclick="abrirlight('lightusuarios');document.getElementById('imgusuarios').src = 'Imagenes/Galerias/usuarios/${folderName}/img${i}.jpg'">							
		                <img class="lazyload" data-src="Imagenes/Galerias/usuarios/${folderName}/img${i}.jpg" >
			        </a>
		        </li>
	    `;
	    html += contenedor;
    }
	listaFotosUser.innerHTML = html;
}











