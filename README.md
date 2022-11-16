# Visão geral

Inside Music YouTube Edition é um aplicativo da web que usa Inteligência Artificial para separar os instrumentos de uma música do YouTube e colocá-los em uma sala virtual para ouvir as músicas em um ambiente totalmente imersivo. A edição original foi criada por [Song Exploder](http://songexploder.net/) e [Google Creative Lab](https://thefwa.com/) como um [WebVR Experiment](https://webvrexperiments.com ) que permite que você entre em uma música, dando a você uma visão mais detalhada de como a música é feita.

O áudio das músicas disponíveis não está incluído neste repositório. Para adicionar seu próprio áudio do YouTube e reproduzi-lo, use a interface para convertê-lo.

Este é um experimento, não um produto do Google.

## Demo

Tente agora! [https://3dyt.hcilab.ml](https://3dyt.hcilab.ml)

## Tecnologia

Inside Music Youtube Edition é construído com [aframe](https://aframe.io), [THREE.JS](https://threejs.org), [Tone.js](https://tonejs.github.io /) e [Spleeter](https://github.com/deezer/spleeter).

## Contribuidores

* [@hapticdata](https://github.com/hapticdata)
* [@tambien](https://github.com/tambien)
* [@ryburke](https://github.com/ryburke)
* [@alexanderchen](https://github.com/alexanderchen)
* [@toxtli](https://github.com/toxtli)

## Interação

Selecione uma música no menu. As hastes da música aparecerão em um círculo ao seu redor, cada uma representada por uma esfera. No _Browser Mode_, toque nas esferas para ativá-las ou desativá-las. No _VR Mode_, você pode usar seu controlador para alternar seu estado. No Google Cardboard, você terá um retículo (um pequeno círculo na frente do olho) que pode ser usado para ligar e desligar as hastes.

## Construir

Para criar uma versão local do Inside Music, você precisará ter Node.js e [webpack](https://webpack.github.io/) instalados (<4.0).

In the terminal, inside the project's directory, install all of the project's dependencies:

```bash
npm install
```

Then compile the source code with webpack:

```bash
webpack -p
```

You can now run a local server such as `http-server`. To install `http-server`, run `npm install -g http-server`. You can now view the site in a browser.

You can easily build the tool and expose the server by running:

```bash
npm run restart
```

## Server side (music processing)

The provided code reads the songs list from a public URL. If you want to test the tool in your local environment, you have to set the audioDirectory variable to 'audio' in the src/Config.js file.

You have to install the requirements before executing the python script:

```bash
pip install -r requirements.txt
```

The script can be executed via command line arguments:

```bash
python app.py --url [YOUTUBE_VIDEO_URL]
```

or, via web:

```bash
python app.py --web
```

```bash
curl http://localhost:4000/?url=[YOUTUBE_VIDEO_URL]
```

Examples:

```bash
python app.py --url https://www.youtube.com/watch?v=cNAdtkSjSps
```

```bash
curl http://localhost:4000/?url=https://www.youtube.com/watch?v=cNAdtkSjSps
```

After processing a song, you can play it in the web app by sending the video ID and the duration in seconds separated by comman in the URL hash as follows:

```bash
open http://localhost:8080/#[VIDEO_ID],[DURATION_IN_SECONDS]
```

Example:

```bash
open http://localhost:8080/#cNAdtkSjSps,351
``` 

## LICENSE

Copyright 2020 Carlos Toxtli

Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

This project has been modified by Carlos Toxtli to add support for YouTube songs.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
