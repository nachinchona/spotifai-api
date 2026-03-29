const express = require('express');
const routerPlaylists = express.Router();
const { obtenerPlaylistPorID, obtenerPlaylistsPaginadas, eliminarPlaylistPorID, actualizarPreviews, marcarFavorita } = require('../controllers/controllerPlaylists');
routerPlaylists
    // Añade previewUrls a todas las canciones posibles con spotify-preview-finder
    // Spotify API descontinuó esa funcionalidad en Nov de 2024
    .post('/refresh', actualizarPreviews)

    // Obtiene 3 playlists para realizar la paginación (a través de un botón 'Cargar más' se envían las faltantes)
    .get('/', obtenerPlaylistsPaginadas)

    // Obtiene playlist determinada por parámetro id
    .get('/:idPlaylist', obtenerPlaylistPorID)

    // "Elimina" una playlist, moviéndola de carpeta
    .delete('/:idPlaylist', eliminarPlaylistPorID)
    
    // Cambia el estado de favorito
    .post('/favorites', marcarFavorita)

module.exports = routerPlaylists;