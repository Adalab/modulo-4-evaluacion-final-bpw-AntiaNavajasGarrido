# API RESTful de Recetas

Esta es una API RESTful desarrollada utilizando Express.js y MySQL para gestionar recetas culinarias. La API permite realizar operaciones básicas CRUD (Crear, Leer, Actualizar, Eliminar) sobre las recetas almacenadas en una base de datos MySQL.

## Configuración del Proyecto

Antes de iniciar el proyecto, asegúrate de tener Node.js y MySQL instalados en tu sistema. Además, debes crear una base de datos MySQL y configurar las variables de entorno necesarias en un archivo `.env`.

### Instalación de Dependencias

npm install

### Ejecutar el servidor

npm start

El servidor se ejecutará en http://localhost:4000 por defecto.

Endpoints Disponibles
 - GET /api/recetas: Obtiene todas las recetas almacenadas.
 - GET /api/recetas/:id: Obtiene una receta específica por su ID.
 - POST /api/recetas: Crea una nueva receta.
 - PUT /api/recetas/:id: Actualiza una receta existente por su ID.
 - DELETE /api/recetas/:id: Elimina una receta existente por su ID.

##Contribuir

Si deseas contribuir a este proyecto, por favor crea un "pull request" con tus cambios o abre una nueva "issue" para reportar problemas o sugerir nuevas funcionalidades.
