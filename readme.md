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

Pour l'init de la base, exécuter le fichier sql workhome.out.

Ou utiliser le poor-man's script ci-dessous:
<pre>
CREATE TABLE matieres (
    id integer NOT NULL,
    libelle character varying(60)
);
CREATE TABLE seances (
    id SERIAL NOT NULL,
    idsequence integer,
    libelle character varying(60),
    done boolean
);
CREATE TABLE sequences (
    id SERIAL NOT NULL,
    idmatiere integer,
    libelle character varying(60)
);
COPY matieres (id, libelle) FROM stdin;
1	Anglais
2	Arts Plastiques
3	Education Musicale
5	Français
6	Histoire-Géo
7	Mathématiques
8	Physique
9	SVT
10	Technologie
4	Espagnol
\.
</pre>

## Build & run
<pre>npm run build
npm start</pre>
