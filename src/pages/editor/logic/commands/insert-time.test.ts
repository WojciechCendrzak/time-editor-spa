import { formatTime } from './insert-time';

describe(formatTime.name, () => {
  describe.each`
    dateTime                           | expected
    ${null}                            | ${undefined}
    ${undefined}                       | ${undefined}
    ${{}}                              | ${undefined}
    ${[]}                              | ${undefined}
    ${''}                              | ${undefined}
    ${'a'}                             | ${undefined}
    ${1}                               | ${undefined}
    ${'1'}                             | ${undefined}
    ${'754'}                           | ${undefined}
    ${'2020-05-29T15:29:28.533+02:00'} | ${'15:29'}
  `('', ({ dateTime, expected }) => {
    test(`should return ${expected}`, () => {
      expect(formatTime(dateTime)).toBe(expected);
    });
  });
});
