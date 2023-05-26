# desafio-MiRepertorio

Desarrollar un servidor con Express que utilice el módulo File System para agregar, modificar y eliminar canciones almacenadas en un JSON local llamado
repertorio.json.

Para esto se disponibilizaron las siguientes rutas:

● POST /canciones : Recibe los datos correspondientes a una canción y la agrega al
repertorio.
● GET /canciones : Devuelve un JSON con las canciones registradas en el repertorio
● PUT /canciones/:id : Recibe los datos de una canción que se desea editar y la
actualiza manipulando el JSON local.
● DELETE /canciones/:id : Recibe por queryString el id de una canción y la elimina del
repertorio.
