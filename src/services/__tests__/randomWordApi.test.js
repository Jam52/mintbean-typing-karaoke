import { wordDataSet } from '../randomWordApi';
const mockData = ['a', 'word', 'game', 'for', 'the', 'win'];

test('returns an array', () => {
  expect(Array.isArray(wordDataSet(mockData, 1))).toBeTruthy();
});

test('returns an array with words max length of argument', () => {
  expect(wordDataSet(mockData, 1)).toEqual(['a']);
  expect(wordDataSet(mockData, 3)).toEqual(['a', 'for', 'the', 'win']);
  expect(wordDataSet(mockData, 4)).toEqual(mockData);
});
