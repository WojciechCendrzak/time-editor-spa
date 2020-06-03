import { replaceAt } from './strings';

describe(replaceAt.name, () => {
  describe.each`
    line          | index        | length       | replacement  | expected
    ${undefined}  | ${undefined} | ${undefined} | ${undefined} | ${undefined}
    ${null}       | ${null}      | ${null}      | ${null}      | ${null}
    ${[]}         | ${[]}        | ${[]}        | ${[]}        | ${[]}
    ${{}}         | ${{}}        | ${{}}        | ${{}}        | ${{}}
    ${'abcdefgh'} | ${0}         | ${3}         | ${'123'}     | ${'123defgh'}
    ${'abcdefgh'} | ${0}         | ${3}         | ${'1234'}    | ${'1234defgh'}
    ${'abcdefgh'} | ${0}         | ${3}         | ${'12'}      | ${'12defgh'}
  `('', ({ line, index, length, replacement, expected }) => {
    test(`line: '${line}', index: '${index}', replacement: '${replacement}' should return '${expected}'`, () => {
      expect(JSON.stringify(replaceAt(line, index, length, replacement))).toBe(JSON.stringify(expected));
    });
  });
});
