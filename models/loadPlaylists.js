const path = require('path');
const fs = require('fs');

function cargarPlaylists() {
    const rutaJsons = path.join(__dirname, '../public/playlists');
    const files = fs.readdirSync(rutaJsons);
    console.log(files);
    return files.map(file => {
        const filePath = path.join(rutaJsons, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    });
}

// en realidad lo mueve de carpeta
function eliminarPlaylist(id) {
    const source = path.join(__dirname, `../public/playlists/playlist-${id}.json`);
    const ignoredDir = path.join(__dirname, `../public/ignored`);
    const destination = path.join(__dirname, `../public/ignored/playlist-${id}.json`);

    if (!fs.existsSync(ignoredDir)) {
        fs.mkdirSync(ignoredDir, { recursive: true });
    }

    fs.renameSync(source, destination);
}

function modificarFavorito(id, isFavorite) {
    const filePath = path.join(__dirname, `../public/playlists/playlist-${id}.json`);

    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const playlist = JSON.parse(content);
        
        playlist.isFavorite = isFavorite;
        
        fs.writeFileSync(filePath, JSON.stringify(playlist, null, 2), 'utf-8');

        console.log(`Playlist ${id} actualizada. isFavorite: ${isFavorite}`);
        return playlist; 

    } catch (error) {
        console.error(`Error al modificar la playlist ${id}:`, error);
        throw new Error('No se pudo modificar el archivo de la playlist');
    }
}

module.exports = { cargarPlaylists, eliminarPlaylist, modificarFavorito };