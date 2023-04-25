const syllable = require('syllable-es');

function highlightFirstSyllable(text) {
  const words = text.split(' ');
  const processedWords = words.map((word) => {
    const syllables = syllable([word]);
    const firstSyllable = syllables[0];
    const restSyllables = syllables.slice(1).join('');
    return `<strong>${firstSyllable}</strong>${restSyllables}`;
  });
  return processedWords.join(' ');
}


  module.exports = {
    highlightFirstSyllable,
  };
  
