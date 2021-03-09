export let currentWordsArray = [];
export let correctWordsArray = [];

// adds randoms word from the wordData for each word needed
export const updateCurrentWords = (wordsData, numWordsNeeded) => {
  let newCurrentWords = [];
  for (let i = 0; i < numWordsNeeded; i++) {
    const randomWord = wordsData[Math.floor(Math.random() * wordsData.length)];
    newCurrentWords.push(randomWord);
  }
  console.log(newCurrentWords);
  currentWordsArray = [...newCurrentWords];
  correctWordsArray = [...correctWordsArray, ...newCurrentWords];
};
