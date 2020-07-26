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
                
                console.log(doc.id, " => ", doc.data());
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
	     	console.log('eliminado: ' + consulta);
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