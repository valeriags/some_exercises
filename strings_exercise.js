var texto = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel
gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum,
erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque
pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna
vehicula gravida sit amet sit amet quam.phasellus et scelerisque sapien.donec
finibus ac odio ac consectetur.integer ligula eros, posuere ac mauris non,
pretium euismod elit.fusce porttitor sem quis neque varius ultricies.sed
elementum blandit faucibus.donec nisi est, tempor eu neque eget, tempus
dignissim libero.ut porttitor sapien eget placerat tristique.ut lacus sem,
pulvinar et accumsan vitae, tristique quis sem.lorem ipsum dolor sit amet,
consectetur adipiscing elit.nulla facilisi.suspendisse feugiat tempus lectus, ut
venenatis lacus.sed et urna purus.morbi tincidunt volutpat consectetur.praesent
vel diam efficitur, rhoncus lacus sit amet, feugiat mi.praesent egestas
dignissim bibendum.ut congue porta est non maximus.vivamus quis imperdiet
risus.cras vitae feugiat leo.fusce bibendum leo eu nisl cursus, quis tempor mi
pulvinar.cras vel semper ante.aliquam tristique mauris sit amet viverra
hendrerit."`
// console.log(texto);

// Cantidad de caracteres

var cantidadCaracteres = texto.length;
console.log("La cantidad de caracteres es de: " + cantidadCaracteres);



// Cantidad de parrafos tomando en cuenta el número de puntos como si fueran parrafos

var buscaParrafos = "."
var i = 0;
var contador = 0;

while (i != -1) {
  var i = texto.indexOf(buscaParrafos, i);
  if (i != -1) {
    i++;
    contador++;
  }
}
console.log("EL texto tiene: " + contador + " parrafos");


// La primer letra de cada parrafo convertirla a mayuscula y dejar un espacio luego del
// punto *


var i = 0;

var texto_final = [];

for (var i = 0; i < texto.length; i++) {
  if (texto[i] == ".") {
    var letra_sin_upper = texto[i + 1];
    texto_final.push(texto[i])
    var letra_con_upper = letra_sin_upper.toUpperCase();
    //  console.log(letra_con_upper);
    texto_final.push(" ");
    texto_final.push(letra_con_upper);
    var i = i + 1;
  } else {
    texto_final.push(texto[i])
  }
}

console.log(texto_final.join(""));


// Cantidad de espacios y puntos

var buscarEspacios = " "
var i = 0;
var contador = 0;
while (i != -1) {
  var i = texto.indexOf(buscarEspacios, i);
  if (i != -1) {
    i++;
    contador++;
  }
}
console.log("La cantidad de espacios que hay es de: " + contador)

// Cantidad de letras

var cantidadLetras = texto //Creo la variable
cantidadLetras = cantidadLetras.split(" ").join(""); //Corto con split los espacios dentro de mi string. 

console.log("La cantidad de letras es de: " + cantidadLetras.length);

//Fin del ejercicio
