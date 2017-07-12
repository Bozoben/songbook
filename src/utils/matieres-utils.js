// Calcule le prochain id pour un ensemble d'elements
export function getNextId(elements) {
  const keys = elements.map((m) => m.id);
  if (elements.length <= 0) return 1;
  const nextId = keys.reduce(function(a,b) {
    if (a > b) return a;
    else return b;
  });
  return nextId + 1;
}

export function getSeanceAVenir(sequence) {
  const seances = Object.values(sequence.seances);
  var seanceNonFaite = seances.find((item) => (!item.done));
  if (!seanceNonFaite)
    return "Terminé";
  return seanceNonFaite.libelle;
}
// Renvoit l'avancement d'une matiere
export function getAvancementMatiere(matiere) {
  var nbSeances = 0;
  var nbSeancesDone = 0;
  var avancementSequence;

  if (matiere.sequences) {
    const sequences = Object.values(matiere.sequences) ;
    sequences.forEach((sequence) => {
      const avancement = getAvancementSequence(sequence);
      if (avancement.done < avancement.total && !avancementSequence)
        avancementSequence = avancement;
      nbSeances += avancement.total;
      nbSeancesDone += avancement.done;
    })

    if (!avancementSequence) avancementSequence = {done: 1, total:1, seanceAVenir:"Tout est terminé :-)"};

    return {avancementGlobal : pcent(nbSeancesDone, nbSeances),
      avancementSequence: pcent(avancementSequence.done,avancementSequence.total),
      seanceAVenir : avancementSequence.seanceAVenir};
  } else {
    return {avancementGlobal : 0, avancementSequence : 0};
  }
}

function pcent(a,b) {
  return Math.round(a / b * 100);
}

function getAvancementSequence(sequence) {
  const seances = Object.values(sequence.seances);
  const total = seances.length;
  const done = seances.filter((seance) => seance.done).length;
  return {done, total, seanceAVenir : sequence.libelle + " " + getSeanceAVenir(sequence)};
}

// Renvoit la seance à venir d'une matière
function computeSeanceCourante(sequence) {
  return null;
}

// Calcule l'avancement global d'une matiere
function computeAvancement(matiere) {

}

// Calcule l'avancement d'une sequence
function computeAvancementSequence(sequence) {

}
