// eslint-disable-next-line import/prefer-default-export
export function lookForWordsInModal(arrNegWords, arrPosWords) {
  if (arrNegWords.length > 0) {
    arrNegWords.forEach((word) => {
      cy.get('.negative-words')
        .children()
        .contains(word.toLowerCase());
    });
  }
  if (arrPosWords.length > 0) {
    arrPosWords.forEach((word) => {
      cy.get('.positive-words')
        .children()
        .contains(word.toLowerCase());
    });
  }
}
