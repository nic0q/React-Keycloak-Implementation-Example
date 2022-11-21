## Implementacion de ejemplo de keycloak + springboot + React
- Explicación en mi video https://www.youtube.com/watch?v=_9E-LJZ1j_E

## Setup y Configuraciones
### Backend
1. Cada endpoint del controlador cuenta con la siguiente estructura 
```
@GetMapping
@RolesAllowed("admin")
```
- Significa que solo los usuarios que tienen el rol de admin pueden acceder.
### Frontend
#### Setup Keycloak
![image](https://user-images.githubusercontent.com/91075814/202938063-e6a022e2-d0fc-442c-8fea-a7a594c23643.png)

#### Quitar ciclo infinito
- Eliminar el <StrictMode> de *index.js*
```
<StrictMode>
</StrictMode>
```
Donde en cada ruta se tiene @RolesAllowed con el nombre del permiso asignado en Keycloak
