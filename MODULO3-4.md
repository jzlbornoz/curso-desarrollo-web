# MODULO 3 y 4

- JavaScript es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web, (por ejemplo, juegos, eventos que ocurren cuando los botones son presionados o los datos son introducidos en los formularios, efectos de estilo dinámicos, animación, y mucho más). Este artículo te ayudará a comenzar con este lenguaje extraordinario y te dará una idea de qué es posible hacer con él. JavaScript es un robusto lenguaje de programación que se puede aplicar a un documento HTML y usarse para crear interactividad dinámica en los sitios web.

- Puedes hacer casi cualquier cosa con JavaScript. Puedes empezar con pequeñas cosas como carruseles, galerías de imágenes, diseños fluctuantes, y respuestas a las pulsaciones de botones. Con más experiencia, serás capaz de crear juegos, animaciones 2D y gráficos 3D, aplicaciones integradas basadas en bases de datos ¡y mucho más!

== Integracion con HTML ==

- Para integrar nuestro codigo Js con nuestro archivo html, se agrega la siguiente etiqueta al final de la etiqueta body;

```
<!DOCTYPE html>
<html>
    <head>
        <title>TITULO</title>
    </head>
    <body>
        Cuerpo del sitio Web



        <script src="scripts/main.js"></script>  <-------
    </body>
</html>
```

== Comentarios ==

Puedes escribir comentarios entre el código JavaScript, igual que puedes en CSS. El navegador ignora el texto marcado como comentario. En JavaScript, los comentarios de una sola línea se escriben así:

== Operadores ==

Un operador es básicamente un símbolo matemático que puede actuar sobre dos valores (o variables) y producir un resultado. En la tabla de abajo aparecen los operadores más simples, con algunos ejemplos para probarlos en la consola del navegador.

== Condicionales ==
Las condicionales son estructuras de código que permiten comprobar si una expresión devuelve true o no, y después ejecuta un código diferente dependiendo del resultado. La forma de condicional más común es la llamada if... else. Entonces, por ejemplo:

```
let helado = 'chocolate';
if (helado === 'chocolate') {
  alert('¡Sí, amo el helado de chocolate!');
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');
}

```

La expresión dentro de if (... ) es el criterio — este usa al operador de identidad (descrito arriba) para comparar la variable helado con la cadena chocolate para ver si las dos son iguales. Si esta comparación devuelve true, el primer bloque de código se ejecuta. Si no, ese código se omite y se ejecuta el segundo bloque de código después de la declaración else.

== Funciones ==

Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo:

```
function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
}

multiplica(4, 7);
multiplica(20, 20);
multiplica(0.5, 3)
```
