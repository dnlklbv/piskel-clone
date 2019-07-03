import shadeHexColor from '../shadeHexColor';

test('test shadeHexColor util', () => {
  expect(shadeHexColor('#4287f5', 10)).toBe('#5ba0ff');
  expect(shadeHexColor('#4287f5', -10)).toBe('#296edc');
  expect(shadeHexColor('#ffffff', 10)).toBe('#ffffff');
});
