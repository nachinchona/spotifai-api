
# SpotiFAI API

API que provee información y manipulación de playlists y canciones a SpotiFAI (https://github.com/nachinchona/spotifai-mobile)


## Ejecución

Para correr la API, ejecutar lo siguiente:

```bash
  node server.js
```

En caso de necesitar agregar playlists procesadas (es decir, con vista previa de audio), se necesita crear un archivo `.env` con las credenciales de tu aplicación en Spotify para Desarrolladores, siguiendo el ejemplo de `.env.example`. Luego, dentro del script `generar_json.py`, se modifica la variable de `PLAYLIST_ID` a la ID de la playlist a descargar. Finalmente se ejecuta el siguiente comando:

```bash
  python generar_json.py
```
