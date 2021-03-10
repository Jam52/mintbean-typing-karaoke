export let currentWordsArray = [];
export let correctWordsArray = [];

// adds randoms word from the wordData for each word needed
export const updateCurrentWords = (wordsData, numWordsNeeded) => {
  let newCurrentWords = [];
  for (let i = 0; i < numWordsNeeded; i++) {
    const randomWord = wordsData[Math.floor(Math.random() * wordsData.length)];
    newCurrentWords.push(randomWord);
  }
  //console.log(newCurrentWords);
  currentWordsArray = [...newCurrentWords];
  correctWordsArray = [...correctWordsArray, ...newCurrentWords];
};

export let userInput = '';
export const setUserInput = (input) => {
  userInput = input;
};

export let score = 0;
export const setScore = (newScore) => {
  score = newScore;
};
