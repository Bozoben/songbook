const chords1 = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
const chords2 = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];


function getBaseChord(chord) {
  if (chord.length <= 1)
    return chord;
  if (chord.charAt(1) == 'b' || chord.charAt(1) == '#')
      return chord.substr(0,2);
  else {
    return chord.substr(0,1);
  }
}

function transposeBaseChord(baseChord, value, chordsRef) {
  var idx  = chordsRef.indexOf(baseChord);
  if (idx >= 0) {
    var idxnew = (11 + idx + value) % 11;
    return chordsRef[idxnew];
  } else {
    return null;
  }
}
/* Transpose un accord
chord : accord sous forme de string
value : decalage en nbre de 1/2 tons (C+1=C#, C+2=D, E+1=F...)*/
export function transposeChord(chord,value) {
  // Recherche l'accord de base (C,Bb,C#,....)
  var baseChord = getBaseChord(chord);
  // Tente de transposer en utilisant le 1er tableau (Db,Eb,...)
  var newBaseChord = transposeBaseChord(baseChord, value, chords1);
  // 2eme chance : tente de transposer en utilisant le tableau avec les # (C#,D#, ...)
  if (newBaseChord == null)
    newBaseChord = transposeBaseChord(baseChord, value, chords2);

  if (newBaseChord != null)
    return chord.replace(baseChord, newBaseChord);
  else {
    return chord;
  }
}

/**
Transpose une mesure (un ou plusieurs accords séparés par un espace)
**/
export function transposeMesure(mesure,value) {
  if (mesure.length > 0)
    return mesure.split(' ').map((chord) => {return transposeChord(chord,value)}).join(' ');
    else
    return mesure;
}
