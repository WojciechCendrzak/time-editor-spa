import { applyFromToInterval } from './line-time-rule';

describe(applyFromToInterval.name, () => {
  describe.each`
    line                       | expected
    ${undefined}               | ${undefined}
    ${null}                    | ${null}
    ${[]}                      | ${[]}
    ${{}}                      | ${{}}
    ${'01:59\t02:59'}          | ${'01:59\t02:59'}
    ${'10:00\t10:01\t10:00'}   | ${'10:00\t10:01\t+00:01'}
    ${'10:00\t10:01\t10:00\t'} | ${'10:00\t10:01\t+00:01\t'}
  `('', ({ line, expected }) => {
    test(`'${line}' should return ${expected}`, () => {
      expect(JSON.stringify(applyFromToInterval(line))).toBe(JSON.stringify(expected));
    });
  });
});
