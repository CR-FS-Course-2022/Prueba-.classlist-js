// SECUENCIA JS 

let enlace = document.getElementById("enlace");

// FUNCIONES

function agrandar() {
	let imagen = document.getElementById("imagen1");
	// imagen.style.width="400px";
	// imagen.style.height="400px";
	// imagen.style.borderColor="red";
	// imagen.style.borderWidth="2px";
	imagen.classList.remove("encoger");
	imagen.classList.add("agrandar");
}
function encoger() {
	let imagen = document.getElementById("imagen1");
	// imagen.style.width="50px";
	// imagen.style.height="50px";
    // imagen.style.borderColor="#A0A";
    // let anchoCorto=imagen.style.borderWidth="10px";
	imagen.classList.remove("agrandar");
    imagen.classList.add("encoger");
	let anchoCorto=imagen.style.borderWidth;
	console.log("Grosor del borde: " + anchoCorto);
	console.log(imagen.classList)	
}





