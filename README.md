### Implementacion de ejemplo de keycloak + springboot + React
1) El proyecto consta de 2 carpetas por el lado del front y backend
Lo importante del backend es el controlador

Donde en cada ruta se tiene @RolesAllowed con el nombre del permiso asignado en Keycloak
@GetMapping
@RolesAllowed("admin")