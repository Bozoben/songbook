# SongBook
Gestionnaire de chansons, dans le but d'illustrer une application de workflow.

L'application permet aux utilisateurs de s'enregistrer et de poster des partitions.
Chaque partition postée est validée par un modérateur.

Le workflow est constitué de quelques états (brouillon , soumis, publié) et de deux rôles (utilisateur, moderateur).
Bonus : Les autres utilisateurs peuvent proposer des modifications à la partition avc nouveau workflow.

## Installation
Il vous faudra une base de données postgresql (cf infos de connexion dans server.js).

Par défaut on s'attend à avoir une base de données baptisée @songbook@.

En base, on s'appuie sur plusieurs tables : UTILISATEURS / SONG.
/A suivre..../

## Build & run
<pre>npm run build
npm start</pre>
