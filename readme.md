# ***PROYECTO FINAL*** 

## *Desarrollo a cargo de Maximiliano Picarelli*  
### CAMADA 14365 - *CODERHOUSE*  
***
Desarrollado para Emanuel Gianne y su marca **EG-GUITAR**

![Logo EG-GUITARS](assets/logo-transp.png)

### **RESUMEN DEL PROYECTO**

Este sitio web fue desarrollado desde cero creando un ejemplo de una pagina de reservas que puede ser util para un hotel o complejo de departamentos. En este caso, se le dio el nombre simbolico de **VINCAGUA**. El desarrollo del sitio es solo para el *front-end* utilizando los lenguajes y herramientas vistas en el curso de ***JAVASCRIPT*** de ***CODERHOUSE***, tales como: 

- Lenguaje Javascript  (funciones, objetos, arrays, etc)
- Uso de APIS y datos estaticos  
- JSON
- Localstorage
- Uso de librerias como Jquery, momnet.js, etc

> El sitio se encuentra desplegado en: https://vincagua.netlify.app/

***
### DESCRIPCION DEL SITIO

El sitio cuenta con 2 paginas:

1. **Inicio (index)** que contiene:
    - Barra de navegacion para moverse a las distintas secciones internas de la pagina
    - Formulario de ingreso de datos para reserva
    - Carousel de bienvenida.
    - Secciones "about us" y servicios generales.
    - Tarjetas mostrando los distintos departamentos, creados con DOMscripting.
    - Seccion de "opiniones de nuestros huespedes" generados con llamados AJAX desde la API **randomuser**.

2. **Reserva** que contiene:
    - Cuadro de resumen de los datos de estadia (fecha de ingreso, egreso y cantidad de huespedes)
    - Tarjetas mostrando los departamentos disponibles segun la cantidad de huespedes seleccionados (mayor o igual).
    - Formulario para completar datos del huesped y datos de pago.
    - Modal con fin de proceso.


***
### DESCRIPCION DEL SITIO

- El usuario podra navegar por el sitio ya sea escroleando o utilizando los links del navbar, animados con javascript. Tambien al cliquear en las imagenes de los departamentos o en el boton de "ir a reservar" se dirigira a la parte superior de la pagina dandole idea de que alli tiene que completar los datos para continuar.
-Completar las fechas de inicio y fin de su estadias con el datepicker. Estos tienen la particularidad de restringir fechas como
    - fecha de inicio antes del dia de hoy
    - fecha de fin antes de la fecha de inicio (evitar resultados negativos)
-Entrada de tipo numero: para elegir entre 1 y 5 huespedes (la cantidad minima y maxima segun los departamentos)
- Al dar click en el boton **DEPARTAMENTOS**, si y solo si completo todos los datos anteriores, el usuario se dirigira a la pagina de reserva donde vera un resumen de sus datos de estadia y podra seleccionar el departamento que desea cliqueando en la imagen o en el boton "ir a reservar".
- Al hacer esto se generara una seccion con el totalizador del precio de su reserva y el boton de **completar reserva**
-Al hacer click en este ultimo, el usuario debera completar el formulario de reserva. Al completar todos los datos y dar click en "confirmar reserva" saldra un modal indicando el final del proceso. 



***
### COMENTARIOS EXTRA

- No se incluye carpeta node_modules.
- Imágenes comprimidas con https://tinypng.com/.
- Estilo creado con SCSS. 
    - style.scss: archivo general con variables, extend, mixins e importando BS y mi archivo particular.
    - style-mods.scss: archivo particular de estilos. Cada bloque de estilos esta separado por comentarios.
- Archivos JS
    - **animaciones.js**: contiene las animiaciones de la pagina principal
    - **api.js**: codigo para generar la seccion de opiniones con randomuser
    - **depto.js**: funcion constructora de tarjetas de departamentos con DOMscripting
    - **main.js**: contiene toda la toma de datos del formulario del header y su guardado en localstorage
    - **reservar.js**: todo el proceso necesario en la pagina reserva.html
- Archivo JSON con los datos estaticos para generar las tarjetas de los departamentos.
- Se utilizo Bootstrap para agilizar el estilizado del sitio.
- Librerias Utilizadas:
    - jquery
    - moment.js
    - pickAdate