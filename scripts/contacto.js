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
var NumeroVisitante = db.collection('Visitante').doc('Total_Visitantes');
var NumeroContactoForm = db.collection('Contacto_total').doc('Total');


// consultando el formulario de contacto desde firebase
function mostrarDatos(){
db.collection('Contacto')
    .get()
	.then((snapshot) => {
		datos(snapshot.docs)
	});
}
mostrarDatos();	
var datosfirebase = document.getElementById('datosfirebase');
const datos = data => {
	if(data.length){
		document.getElementById('totalContactosbutton').value = data.length;
		let html= '';
		data.forEach(doc => {
			const post = doc.data();
			const li = `
			<div class="afterList">
			    <li class="lifirebase">
				   <p>Nombre: <span class="resaltar">${post.a_nombre}</span></p>
				   <p>Teléfono: ${post.b_teléfono}</p>
				   <p>Correo: ${post.c_correo}</p>
				   <p>Fecha: ${post.e_fechaMensaje}</p>
				   <p>Mensaje:<br />${post.d_mensaje}</p>
			   </li>
			</div>   
			`;
			html += li;
		});
		datosfirebase.innerHTML = html;	
	}
	else {
		datosfirebase.innerHTML = '<p>No existe nada</p>'; 
	}
}

// consultando el numero total contactos
// function DatosPrueba(){
// db.collection('Contacto_total')
    // .get()
	// .then((snapshot) => {
		// console.log(snapshot.docs);
		// contadorContacto(snapshot.docs)
	// });
// }
// DatosPrueba();
// const contadorContacto = data => {
	// if(data.length){ 
	// var total;
		// data.forEach(doc => {
			// const post = doc.data();
			// console.log(post);
			// const li = `${post.Total_Contactos}`;
			// total= li;
			// console.log(total);
		// });
		// document.getElementById('totalContactosbutton').value = total;	
	// }
	// else {
		// document.getElementById('totalContactosbutton').value = 'Error realizando la consulta'; 
	// }
// }
//accediendo a los elementos del formulario
var nombre = document.getElementById('name');
var telefono = document.getElementById('telefono');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');

var formulario = document.getElementById('formularioContacto');
var mensajeError = document.getElementById('mensajesFormulario');
var mensajeErrorGrave = document.getElementById('mensajesFormularioGrave');
var mensajeErrorExitoso = document.getElementById('mensajeExitoso');
var contator = document.getElementById('totalContactosbutton');
formulario.addEventListener('submit', function(evt){
	evt.preventDefault();	
	let nombreUsuario = nombre.value;
	console.log(nombreUsuario);
	let telefonoUsuario = telefono.value;
	let emailUsuario = email.value;
	let mensajeUsuario = mensaje.value;
	let width = screen.width;
	let height = screen.height;
	// para ordenar la lista en la base
	let contactoNumero = parseInt(contator.value) + 1;
	let usuarioNumero = contactoNumero + nombreUsuario;
	//acomodando los formatos
	let f = new Date();
	let formatoFecha = f.toLocaleDateString();
	let formatoHora = f.toLocaleTimeString();
	let fechaCompleta = formatoFecha +', ' + formatoHora;
	console.log(f);
	console.log(formatoFecha);
	console.log(formatoHora);
	console.log(fechaCompleta);
	// validar datos del formulario
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
	    contacto.doc(usuarioNumero).set({
			a_nombre : nombreUsuario,
			b_teléfono : telefonoUsuario,
			c_correo : emailUsuario,
			d_mensaje : mensajeUsuario,
			e_fechaMensaje : fechaCompleta,
			e_fechaMensajeLarga : f,
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

    // contar el número de personas que visitan la pagina...
	    NumeroContactoForm.update({
		    Total_Contactos : firebase.firestore.FieldValue.increment(1)  
        });
	}
		
});
	   

function nuevoVisitante(){
	//acomodando los formatos
	let f = new Date();
	let formatoFecha = f.toLocaleDateString();
	let formatoHora = f.toLocaleTimeString();
	let fechaCompleta = formatoFecha +', ' + formatoHora;
	console.log(f);
	console.log(formatoFecha);
	console.log(formatoHora);
	console.log(fechaCompleta);
	let width = screen.width;
	let height = screen.height;
	
	if(width === 360 || width === 1440){
			// alert('welcome Ed');
			console.log('welcome Ed');
	}else{
	    Visitante.doc().set({
			a_fecha : fechaCompleta,
			dimensiones : [width , height]
		})
		.then(function(){
			console.log('guardada ');
		})
		.catch(function(error){
			console.log(error);
		});
		
		// contar el número de personas que visitan la pagina...
	    NumeroVisitante.update({
		    Total : firebase.firestore.FieldValue.increment(1)
	    });
	}
}



//*******agregando coleccion desde cero
// db.collection("nombreDeColeccion").add({
    // first: "Ada",
    // last: "Lovelace",
    // born: 1815
// })
// .then(function(docRef) {
    // console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
    // console.error("Error adding document: ", error);
// }); 

//***** enviado con variable
// var contacto = db.collection('contactoprueba'); //global
// contacto.doc().set({
			// name : 'laila',
			// age : '20',
		// })
		// .then(function(){
			// console.log('guardada ');
		// })
		// .catch(function(error){
			// console.log(error);
		// });
		

//******especificando el nombre del id de documento
// var contacto = db.collection('contactoprueba'); //global
// contacto.doc('idDocumento').set({
			// name : 'laila',
			// age : '20',
		// })
		// .then(function(){
			// console.log('guardada ');
		// })
		// .catch(function(error){
			// console.log(error);
		// });