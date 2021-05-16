# ***PROYECTO FINAL*** 

## *Desarrollo a cargo de Maximiliano Picarelli*  
### CAMADA 14365 - *CODERHOUSE*  
***

![Logo EG-GUITARS](assets/logo-transp.png)

### **RESUMEN DEL PROYECTO**

Este sitio web fue desarrollado desde cero creando un ejemplo de una página de reservas que puede ser útil para un hotel o complejo de departamentos. En este caso, se le dio el nombre simbólico de **VINCAGUA**. El desarrollo del sitio es solo para el *front-end* utilizando los lenguajes y herramientas vistas en el curso de ***JAVASCRIPT*** de ***CODERHOUSE***, tales como: 

- Lenguaje Javascript  (funciones, objetos, arrays, etc)
- Uso de APIS y datos estaticos  
- JSON
- Localstorage
- Uso de librerias como Jquery, momnet.js, etc

> El sitio se encuentra desplegado en: https://vincagua.netlify.app/

***
### DESCRIPCIÓN DEL SITIO

El sitio cuenta con 2 paginas:

1. **Inicio (index)** que contiene:
    - Barra de navegación para moverse a las distintas secciones internas de la página
    - Formulario de ingreso de datos para reserva
    - Carousel de bienvenida.
    - Secciones "about us" y servicios generales.
    - Tarjetas mostrando los distintos departamentos, creados con *DOMscripting*.
    - Sección de "opiniones de nuestros huéspedes" generados con llamados AJAX desde la API **randomuser**.

2. **Reserva** que contiene:
    - Cuadro de resumen de los datos de estadia (fecha de ingreso, egreso y cantidad de huéspedes)
    - Tarjetas mostrando los departamentos disponibles segun la cantidad de huéspedes seleccionados (mayor o igual).
    - Formulario para completar datos del huésped y datos de pago.
    - Modal con fin de proceso.


***
### DESCRIPCIÓN DEL PROCESO

- El usuario podra navegar por el sitio ya sea escroleando o utilizando los links del navbar, animados con javascript. También al cliquear en las imagenes de los departamentos o en el botón de "ir a reservar" se dirigirá a la parte superior de la página dándole ídea de que allí tiene que completar los datos para continuar.
-Completar las fechas de inicio y fin de su estadia con el datepicker. Estos tienen la particularidad de restringir fechas como:
    - fecha de inicio antes del dia de hoy
    - fecha de fin antes de la fecha de inicio (evitar resultados negativos)
-Entrada de tipo número: para elegir entre 1 y 5 huéspedes (la cantidad mínima y máxima según los departamentos)
- Al dar click en el botón **DEPARTAMENTOS**, si y solo si completó todos los datos anteriores, el usuario se dirigirá a la página de reserva donde verá un resumen de sus datos de estadia y podrá seleccionar el departamento que desea cliqueando en la imagen o en el botón "ir a reservar".
- Al hacer esto se generará una sección con el totalizador del precio de su reserva y el botón de **completar reserva**
-Al hacer click en este último, el usuario deberá completar el formulario de reserva. Al completar todos los datos y dar click en "confirmar reserva" saldrá un modal indicando el final del proceso. 



***
### COMENTARIOS EXTRA

- No se incluye carpeta node_modules.
- Imágenes comprimidas con https://tinypng.com/.
- Estilo creado con SCSS. 
    - style.scss: archivo general con variables, extend, mixins e importando BS y mi archivo particular.
    - style-mods.scss: archivo particular de estilos. Cada bloque de estilos esta separado por comentarios.
- Archivos JS
    - **animaciones.js**: contiene las animiaciones de la página principal
    - **api.js**: código para generar la sección de opiniones con randomuser
    - **depto.js**: función constructora de tarjetas de departamentos con DOMscripting
    - **main.js**: contiene toda la toma de datos del formulario del header y su guardado en localstorage
    - **reservar.js**: todo el proceso necesario en la pagina reserva.html
- Archivo JSON con los datos estáticos para generar las tarjetas de los departamentos.
- Se utilizo Bootstrap para agilizar el estilizado del sitio.
- Librerias JAVASCRIPT utilizadas:
    - jquery
    - moment.js
    - pickAdate