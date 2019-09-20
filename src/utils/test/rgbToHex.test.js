import rgbToHex from '../rgbToHex';

test('test rgbToHex util', () => {
  expect(rgbToHex(66, 135, 245)).toBe('#4287f5');
  expect(rgbToHex(255, 68, 51)).toBe('#ff4433');
});
