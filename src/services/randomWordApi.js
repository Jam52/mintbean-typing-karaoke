import axios from 'axios';

export const fetchRandomWords = async (maxLengthOfWord) => {
  try {
    const randomWords = await axios.get(
      `https://random-word-api.herokuapp.com/word?number=${5000}`,
    );
    return wordDataSet(await randomWords.data, maxLengthOfWord);
  } catch (e) {
    console.log(e);
  }
};

export const wordDataSet = (wordData, maxLengthOfWord) => {
  return wordData.filter((word) => word.length <= maxLengthOfWord);
};
