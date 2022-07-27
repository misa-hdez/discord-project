var nombre;
var saludo;
var frase1;
var contenido1;
nombre = prompt("Cual es tu nombre?");
contenido1 = " bienvenido a el mejor lugar para aprender de tortugas";
saludo = "Hola ";
frase1 = saludo + nombre + contenido1;
/* var frase1 = document.getElementById("frase1");
frase1.style.color = "red"; */
/* $(frase1).css("color", "red"); */
/* var frase1 = document.getElementById('frase1');
frase1.className = 'red'; */
/* document.getElementById('estilos').href = 'style.css'; */
document.write("<p id='parrafo'><script>document.write(frase1)</script></p>");
const p = document.querySelector("#parrafo")
p.style.color = 'green';
p.style.position = 'relative';
p.style.top = '20vh';
p.style.left = '30vw';
p.style.width = '50%';
