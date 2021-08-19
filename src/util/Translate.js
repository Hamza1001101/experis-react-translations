export const getTranslation = (keywords) => {
  let signSequencePngs = [];

  keywords.forEach((keyword) => {
    for (let letter of keyword) {
      signSequencePngs.push(letter.toLowerCase() + ".png");
    }
  });
  return signSequencePngs;
};
