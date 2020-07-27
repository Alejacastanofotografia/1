var c = 'console.log'; 
firebase.initializeApp({
    apiKey: "AIzaSyBq-VhsTf1ip5Le7FDIAXJA-qBpQ_91W4g",
    authDomain: "contacto-de-usuarios.firebaseapp.com",
    databaseURL: "https://contacto-de-usuarios.firebaseio.com",
    projectId: "contacto-de-usuarios",
    storageBucket: "contacto-de-usuarios.appspot.com",
    messagingSenderId: "38625858230",
    appId: "1:38625858230:web:44ad53d6d12d043d134c17",
    measurementId: "G-0GSH2MDHRG"
});
var db = firebase.firestore();
var contacto = db.collection('Contacto');
var Visitante = db.collection('Visitante');


// Extrayendo los contactos
function mostrarDatos(){
db.collection('Contacto')
    .get()
	.then((snapshot) => {
		datos(snapshot.docs)
	});
}
var datosfirebase = document.getElementById('datosfirebase');
const datos = data => {
			let nummm = 0;
	if(data.length){
		document.getElementById('totalContactosbutton').value = data.length;
		let html= '';
		data.forEach(doc => {	
			nummm++;
			const post = doc.data();
			const li = `
			    <li class="lifirebase">
				   
				   <p  class="nombreDetalles" ><input type="button" value="${post.a_nombre}" onclick="extraer(event)" class="nombreDetalles"></p>
				   <p>No: ${nummm}</p>
				   <p>Teléfono: ${post.b_teléfono}</p>
				   <p>Correo: ${post.c_correo}</p>
				   <p><i style='font-size:1rem' class='far'>&#xf073;</i> ${post.e_date}</p>
				   <p><i style='font-size:1rem' class='far'>&#xf4ad;</i><br />${post.d_mensaje}</p>
				   <button class="deleteContacto material-icons">&#xe872;</button>
			   </li>  
			`;
			html += li;
		});
		datosfirebase.innerHTML = html;	
	}
	else {
		datosfirebase.innerHTML = `<p style="color: #ff0000; font-size:1.5rem">Parce... Algo salió mal =(, Bendito sea mi Dios.</p>`;
	}
}
// extrayendo el número de visitas
function mostarDatos2(){
	db.collection('Visitante')
	.get()
	.then((snapshot) =>{
		datos2(snapshot.docs)
	});
}

var datosfirebaseVisitas = document.getElementById('datosfirebaseVisitas');
const datos2 = data => {
	let num = true;
	if(data.length){
		document.getElementById('totalVisitas').value = data.length;
			let html = '';
		data.forEach(doc => {
			const datosVisitas = doc.data();
			const li = `
			    <li class="lifirebaseVisitas">
				    <p class="nombreDetalles2"> ${datosVisitas.c_date} </p>
                    <p>No: ${datosVisitas.a_No}</p> 			   
                    <p>Dimensiones: ${datosVisitas.dimensiones}</p> 	   
			   </li>
			`;
			html += li;
		});
	    datosfirebaseVisitas.innerHTML = html;
		}
	 else {
		datosfirebaseVisitas.innerHTML = `<p style="color: #ff0000; font-size:1.5rem">Parce... Algo salió mal =(, Bendito sea mi Dios.</p>`;
	}
}

// Dinamicas de los datos en pantalla
var detallesToggle = true;
function mostrarDetalles(ventana, item, filtroD){
	var i, elementos, nombreDetalles, nombreDetalles2, filtro, Contelementos;
	elementos = document.querySelectorAll(`.${ventana} p`);
	Contelementos = document.querySelectorAll(`.${item} .listaContacto .${ventana}`);
	ContelementosP = document.querySelectorAll(`.${item} .listaContacto .${ventana} p`);
	nombreDetalles = document.querySelectorAll('.nombreDetalles');
	nombreDetalles2 = document.querySelectorAll('.nombreDetalles2');
	
	if(filtroD === 'tres'){
		for(i = 0; i < Contelementos.length; i++){
			Contelementos[i].style.display = 'none';
			Contelementos[i].style.flexDirection = 'column';
		}
		Contelementos[Contelementos.length - 3].style.display = 'flex';
		Contelementos[Contelementos.length - 2].style.display = 'flex';
		Contelementos[Contelementos.length - 1].style.display = 'flex';
		for(i = 0; i < ContelementosP.length; i++){
			ContelementosP[i].style.display = 'block';
		}
		if(item ==='itemUsuarios'){
	    for( var i = 0; i < nombreDetalles.length; i++){
	        nombreDetalles[i].style.display = 'flex';
	        nombreDetalles[i].style.color = '#00ff00';
  	    }}else{
	    for( var i = 0; i < nombreDetalles2.length; i++){
	        nombreDetalles2[i].style.display = 'flex';
		  	nombreDetalles2[i].style.color = '#fff'}
	    }
	}
	else{
		for(i = 0; i < Contelementos.length; i++){
			Contelementos[i].style.display = 'flex';
			Contelementos[i].style.flexDirection = 'column';
		}
		if(detallesToggle){
	        for( var i = 0; i < elementos.length; i++){
	           elementos[i].style.display = 'block';		
	        }
		if(item ==='itemUsuarios'){
	    for( var i = 0; i < nombreDetalles.length; i++){
	        nombreDetalles[i].style.display = 'flex';
	        nombreDetalles[i].style.color = '#00ff00';
  	    }}else{
	    for( var i = 0; i < nombreDetalles2.length; i++){
	        nombreDetalles2[i].style.display = 'flex';
		  	nombreDetalles2[i].style.color = '#00ccff'}
	    }
	
	        detallesToggle = false;
	    } 
	    else{
	        for( var i = 0; i < elementos.length; i++){
	            elementos[i].style.display = 'none';		
	        }
		if(item ==='itemUsuarios'){
	    for( var i = 0; i < nombreDetalles.length; i++){
	        nombreDetalles[i].style.display = 'flex';
	        nombreDetalles[i].style.color = '#606060';
  	    }}else{
	    for( var i = 0; i < nombreDetalles2.length; i++){
	        nombreDetalles2[i].style.display = 'flex';
		  	nombreDetalles2[i].style.color = '#606060'}
	    }
	        detallesToggle = true;
		
	    }
	}
}

var totalVisi;
var totalVisi1;
var totalContac;
var totalContac1;
function visitas(){
	
	// consultando el total de visitas
	db.collection('Visitante')
	.get()
	.then((snapshot) => {
		let datos = snapshot.docs;
		let datosTotal = datos.length;
		 totalVisi1 = datosTotal;
		 totalVisi = totalVisi1 +1;
	});
	let f = new Date();
	let fS = f.toString();
	
	let formatoFecha = f.toLocaleDateString();
	let formatoHora = f.toLocaleTimeString();
	let fechaCompleta = formatoFecha +', ' + formatoHora;
	let width = screen.width;
	let height = screen.height;
	
	setTimeout(function(){
	let NombreFecha = f+totalVisi;	
	if(width === 360 || width === 1440){
			console.log('paila');
	}else{
	    Visitante.doc(NombreFecha).set({
			a_No : totalVisi,
			b_fecha : f,
			c_date : fS,
			dimensiones : [width , height]
		})
		.then(function(){
			console.log('Thanks');
		})
		.catch(function(error){
			console.log(error);
		});
		
		// contar el número de personas que visitan la pagina...
	    // NumeroVisitante.update({
		    // Total : firebase.firestore.FieldValue.increment(1)
	    // });
	    }
	},3000);
}
//accediendo a los elementos del formulario
var nombre = document.getElementById('name');
var telefono = document.getElementById('telefono');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');

var formulario = document.getElementById('formularioContacto');
var mensajeError = document.getElementById('mensajesFormulario');
var mensajeErrorGrave = document.getElementById('mensajesFormularioGrave');
var mensajeErrorExitoso = document.getElementById('mensajeExitoso');
var contactoNumero;
formulario.addEventListener('submit', function(evt){
		mensajeError.style.display = 'flex';
		mensajeErrorExitoso.style.display = 'flex';
		mensajeErrorGrave.style.display = 'flex';
	
	evt.preventDefault();
	
	db.collection('Contacto')
	.get()
	.then((snapshot) => {
		let datos = snapshot.docs;
		let datosTotal = datos.length;
		 totalContac1 = datosTotal;
		 totalContac = totalContac1 +1;
	});	
	let nombreUsuario = nombre.value;
	let telefonoUsuario = telefono.value;
	let emailUsuario = email.value;
	let mensajeUsuario = mensaje.value;
	let width = screen.width;
	let height = screen.height;
	//acomodando los formatos
	let f = new Date();
	let fS = f.toString();
	let NombreFecha = f+nombreUsuario;
	// validar datos del formulario
	setTimeout(function(){
	   contactoNumero = totalContac; 
	if(nombreUsuario === null || nombreUsuario === ''){
		mensajeError.classList.add('error');
		mensajeError.innerHTML = '¡Ups! El campo "Nombre" es requerido.';
		nombre.style.border = '2px solid #ff0000';
	}
	else if(telefonoUsuario === null || telefonoUsuario === ''){
		mensajeError.classList.add('error');
		mensajeError.innerHTML = '¡Ups! El campo "Télefono" es requerido.';
		telefono.style.border = '2px solid #ff0000';
		nombre.style.border = 'none';
	}
	else if(isNaN(telefonoUsuario)){
		mensajeError.classList.add('error');
		mensajeError.innerHTML = '¡Ups! El campo "Télefono" debe contener un número.';
		telefono.style.border = '2px solid #ff0000';
		nombre.style.border = 'none';
	}
	else{	
	    contacto.doc(NombreFecha).set({
			a_nombre : nombreUsuario,
			a_contactoNo : contactoNumero,
			b_teléfono : telefonoUsuario,
			c_correo : emailUsuario,
			d_mensaje : mensajeUsuario,
			e_date : fS,
			e_fechaMensaje : f,
		    f_Dimensiones :[width, height],
		})
		.then(function(){
			// resetando los campos...// Confirmacion de registro
		        mensajeError.classList.add('EnvioExitoso');
		        mensajeError.style.color = '#202020'; 
				mensajeErrorExitoso.innerHTML = '&#10004;'; 
				mensajeError.innerHTML = '¡Gracias ' + nombreUsuario + 
		                         '! me pondré en contacto contigo en el menor tiempo posible al número ' + 
								 telefonoUsuario + ' .' + ' Si este número no es correcto ingresalo de nuevo.';
	        nombre.value = '';
	        telefono.value = '';
	        email.value = '';
	        mensaje.value = '';
		    nombre.style.border = 'none';
		    telefono.style.border = 'none';
		})
		.catch(function(error){
			console.log(error);
		        mensajeError.classList.add('error');
				mensajeErrorGrave.innerHTML = '&#9888; '; 
				mensajeError.innerHTML = '¡Oh ' + nombreUsuario + 
		                         '! Se ha presentado un inconveniente inesperado, '+
								 ' por favor escribeme al whatsapp 3148582037 o '+
								 'al correo alejacastanofotografia@gmail.com, '+
								 'anexa tus datos y te contactaré en el menor tiempo posible.';
	        nombre.value = '';
	        telefono.value = '';
	        email.value = '';
	        mensaje.value = '';
		    nombre.style.border = 'none';
		    telefono.style.border = 'none';
		});

    setTimeout(function(){
		mensajeError.style.display = 'none';
		mensajeErrorExitoso.style.display = 'none';
		mensajeErrorGrave.style.display = 'none';
	    }, 8000);
	}
	},1000);
		
});

// Elimiar un documento
var delll = true;
function showdelete(){
	var Contelementos = document.querySelectorAll('.deleteContacto');
	if(delll){
		for(i = 0; i < Contelementos.length; i++){
			Contelementos[i].style.display = 'block';
		}
		
		delll= false;
	}else{
		for(i = 0; i < Contelementos.length; i++){
			Contelementos[i].style.display = 'none';
		    document.getElementById('AlertaEliminar').style.display = 'none';
		}
		delll= true;
		validar = true
	}
		
	
}
var idconsulta;
var validar = true;
var valorIdEliminar;
var valorIdEliminarFinal;
function extraer(e){
	    valorIdEliminar = e.currentTarget.value;
    if(validar){
		    document.getElementById('AlertaEliminar').style.display = 'flex';
	    	document.getElementById('archivoEliminar').value = valorIdEliminar;
	    	let elimartemporal= document.getElementById('archivoEliminar');
	    	valorIdEliminarFinal = elimartemporal.value;
	    	validar = false;
	}
	else{
	
	    db.collection("Contacto").where('a_nombre', '==', valorIdEliminarFinal)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
	    		idconsulta = doc.id;
		});
        })
       .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
	setTimeout(function(){
		
	    let consulta = idconsulta;	
	
	    db.collection('Contacto').doc(consulta)
	    .delete()
	    .then(function(){
	     	console.log('eliminado: ');
	    })
	    .catch(function(error){
	     	console.log(error);
	    });
	    
		
		mostrarDatos();
	    }, 1000);
		showdelete();
		validar = true
    }  
}

var loginDeUusarios = db.collection('LoginDeUsuarios');
function reemplazardatos(){
	loginDeUusarios.doc('Administrador')
	.update({
		'c_id' : 2020
	})
	.then(function(){
		console.log('actualizado')
	});
}
function crearUsuario(){
	let fecha = new Date().toString();
	let nameUserShort = 'Alejacastanofotografia';
	let nameUserLong = 'Administrador';
	let id = 2020;
	let totalFotos = '1';
	loginDeUusarios.doc(nameUserLong)
	    .set({
			a_name : nameUserLong,
            b_folder : nameUserShort,	
			c_id : id, 
            d_folderTotal : totalFotos,  
            e_fecha_creación : fecha,			
		})
		.then(function(){
			console.log('usuario creado con Id: ' + nameUserLong)
		})
		.catch(function(error){
			console.log(error)
		});
}
var nombreuserLog,	nombreCarpeta, idUsuarios, totalFotografias, n, nC, id, fT;  
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
var login = document.getElementById('formularioLogin');
var nombreUsuariomenuInner = document.getElementById('nombreUsuariomenu');
var nombreUsuariomenu = document.getElementsByClassName('nombreUsuariomenu');
var	nombreUsuario = document.getElementsByClassName('nameUser');
var documento = document.getElementById('documento');
var documentoUsuario2, documentoUsuario3, mensaje, nombreArr, nombreUsuario2, usuarioLogin;
login.addEventListener('submit', ValidacionLogin);
function ValidacionLogin(evt){
	evt.preventDefault();
	// var documentoUsuario = document.getElementById('documento').value;
	usuarioLogin = usuario.value;
	nombreUsuario2 = parseInt(usuarioLogin);
    documentoUsuario2 = documento.value;
    documentoUsuario3 = parseInt(documentoUsuario2);
	// mensajes
	var mensajeError = document.getElementById('mensajesFormularioLogin');
	var mensajeExitoso = document.getElementById('mensajeBienvenida');
	var nombreUsuarioTitulo = document.getElementById('nombreUsuarioTitulo');
		mensajeError.style.display = "block";
		mensajeExitoso.style.display = "block";
	//buscando el usuario en Firebase
	db.collection("LoginDeUsuarios").where('c_id', '==', documentoUsuario3)
	.get()
	.then(function(querySnapshot){
		querySnapshot.forEach(function(doc){
			let datos = doc.data();
			n = datos.a_name; 
			nC = datos.b_folder; 
			id = datos.c_id; 
			fT = datos.d_folderTotal;
		});
	})
	.catch(function(error){
		console.log(error)
	});
	setTimeout(function(){
			nombre = n;
			nombreCarpeta = nC;
			idUsuarios = id;
			totalFotografias = fT; 
	
	
	if(documentoUsuario3 === idUsuarios & nombreUsuario2 === idUsuarios & nombreCarpeta  === 'Violeta'){
		nombreArr = [nombreCarpeta, nombre,  totalFotografias];
		loginExitoso(nombreArr);		
	}
	else if(documentoUsuario3 === idUsuarios & nombreUsuario2 === idUsuarios & nombreCarpeta  === 'Alejandra'){
		nombreArr = [nombreCarpeta, nombre,  totalFotografias];		
	    loginExitoso(nombreArr);		
	}
	else if(documentoUsuario3 === idUsuarios & nombreUsuario2 === idUsuarios & nombreCarpeta  === 'Alejacastanofotografia'){
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
	    function loginExitoso(nombreArr, mensaje){
		    let userSesion= document.getElementsByClassName('userSesion');
		    for(i = 0 ; i < userSesion.length; i++){
			userSesion[i].click();
			userSesion[i].style.display = 'flex';
		    }				
			for(i = 0; i < nombreUsuario.length; i++){nombreUsuario[i].value = nombreArr[0]}
			menuGalerias.click();
            document.getElementsByClassName('menuLogout')[0].style.display = 'block';
login.style.display = 'none';
			mensajeExitoso.style.display = "none";
	     	mensajeExitoso.style.display = "block";	
	     	mensajeExitoso.innerHTML = `Hola ${nombreArr[0]}, tus fotografías se encuentran publicadas en la pestaña Sesiones/Retratos`;	
            nombreUsuarioTitulo.innerHTML = nombreArr[1];	
			nombreUsuariomenu[0].style.display = 'flex';
			nombreUsuariomenuInner.innerHTML = nombreArr[1];
			
	        document.getElementById('usuariosTotal').value = `${nombreArr[2]}`;
            setTimeout(function(){
abrirMenuLogin();
			mostrarGaleriaUser();
			},500);			
	    }
    	
	},500);
}


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

