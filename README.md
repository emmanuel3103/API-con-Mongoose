<a name="readme-top"></a>

# Api de red social con mongoose

> Esta es una Api para una red social con CRUD basico para manipular la Api.

## Construido con

- Mongoose
- JavaScript
-  Node.js
-  Express
-  MongoDB


## Para Comenzar 
obtener una copia local en ejecución, siga estos pasos de ejemplo

### Prerequisitos

--Node 
--Npm 
--MongoDB
--Editor de codigo (VsCode)

### Instalación


1. Install NPM packages
   sh
   npm install
   
   sh
   npm i express mongoose dotenv cors
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Inicializar

1.Run project

sh
node src/server.js

### Como usar
- Crear Usuarios
--  {
    "nombre": "Emmanuel Chavez",
    "email": "emmanuel.chavezz@gmail.com",
    "password": "123456",
    "grupos": []
}
- Crear Grupos
  {
  "nombre": "Equipo para EDI301",
  "descripcion": "Desarrolladores para EDI301",
  "usuarios": ["67cde8ecec98d056d8a3acb0", "67cde69cec98d056d8a3aca5"]
}
- Crear Evento
  {
  "nombre": "Expo-Proyectos 2025",
  "fecha": "2025-03-09",
  "ubicacion": "Universidad Linda Vista",
  "grupo": ["67cdea78ec98d056d8a3acb4", "67cded89ec98d056d8a3acbd"],
  "participantes": ["67cde69cec98d056d8a3aca5", "67cde72eec98d056d8a3aca7", "67cde771ec98d056d8a3aca9", "67cde8ecec98d056d8a3acb0"]
}
## Authors

👤 Emmanuel Chavez

- GitHub: [@user](https://github.com/emmanuel3103)
