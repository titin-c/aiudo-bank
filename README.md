# Prueba técnica Aiudo
## descripción del ejercicio
La prueba consistirá en realizar una pequeña aplicación web bancaria en la que, despues del registro y login pertinente, podrás hacer ingresos en tu cuenta bancaria, transferencias a otros usuarios y desamortización de tu préstamo personal.

Para la obtención de los datos de las usuarios se utilizará la API de Rick y Morty: (https://rickandmortyapi.com/)

Si funciona la API, puede verse el ejercicio  [Aquí](https://titin-c.github.io/aiudo-bank).

## Condiciones 
- Muestra avisos si intentas transferir o abonar por más cantidad de la que tienes en la cuenta.
- Se actualizan las cantidades sin refrescar la página.
- El registro de usuarios se realiza en Firebase.
- Login con usuario de Google o con email y contraseña.
- Carga los usuarios desde la api de rick y Morty.
- Utilizo una librería propia con Light y Dark mode.
- Totalmente responsibe, mobile first design.


# Aclaraciones de Titín

## `Estructura de archivos`
A continuacón explico la estructura de archivos y carpetas.


- **assets:** Carpeta de imagenes, archivos e iconos.
- **auth:** Carpeta  con todo lo relativo a la autenticación, login y registro.
    - **layaout:** Diseño de las plantillas.
    - **pages:** Diseño de las páginas.
    - **routes:** Rutas de la autenticación.
    - **styles:** Archivos de estilos de autenticación.
- **firebase:** Carpeta con configuración de firebase.
- **hooks:** Personal hooks reutilizables.
- **panel:** Carpeta con todo lo relativo al panel del banco.
    - **components:** Componentes del panel.
    - **layaout:** Diseño de las plantillas.
    - **pages:** Diseño de las páginas.
    - **routes:** Rutas del panel.
    - **styles:** Archivos de estilos del panel.
- **router:** Carpeta para el enroutamiento de urls.
- **store:** Store de redux, con sus slices por carpetas.
    -**auth:** Slices y thunk (peticiones asíncronas) del auth.
    -**panel:** Plices del panel.
- **styles:** Librería css propia creada con Sass.
- **ui:** Carpeta para archivos que no pertenecen ni al panel ni a la autenticación... en este caso el spiner del loading.


## `Pros del proyecto`
• Sin ser una gran app, he querido demostrar mis conocimientos en ux/ui y en la librería de React, aunque sea a un nivel básico, utilizando: Hooks, React-Redux, React-Router, Sass, Firebase...

• He creado toda **la estructura con HTML y el diseño con css utilizando sass**, no he utilizado ninguna biblioteca.

Podría haber utilizado alguna bibiliteca css para agilizar el trabajo... Pero he preferido hacer TODO el css desde cero, para demostrar mis conocimientos de Sass y css3.

• He realizado una estructura UX/UI, mobile first, super compacta. utilizando el número de mínimo de páginas.


## `Cosas que hubiese hecho mejor` 

• Aunque en este ejercicio demuestro usar la biblioteca de React (a un nivel Junior), hooks, Redux, Conexiones a API, router, etc. No me ha dado tiempo a crear toda la parte de base de datos (Backend), para guardar la info.