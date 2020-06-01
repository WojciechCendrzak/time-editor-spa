import { pullTokens } from "./pull-tokens";
import { TIME_REGEX, INTERVAL_REGEX } from "../const";

describe(pullTokens.name, () => {
  describe.each`
    line         | tokens                      | expected
    ${undefined} | ${[/d/]}                    | ${undefined}
    ${null}      | ${[/d/]}                    | ${undefined}
    ${[]}        | ${[/d/]}                    | ${undefined}
    ${{}}        | ${[/d/]}                    | ${undefined}
    ${" "}       | ${undefined}                | ${undefined}
    ${" "}       | ${null}                     | ${undefined}
    ${" "}       | ${[]}                       | ${[]}
    ${" "}       | ${{}}                       | ${undefined}
    ${"01:59"}   | ${[TIME_REGEX, TIME_REGEX]} | ${undefined}
    ${"01:59"}   | ${[TIME_REGEX]}             | ${[{ index: 0, value: "01:59" }]}
    ${"01:59 02:59"} | ${[TIME_REGEX, TIME_REGEX]} | ${[
  { index: 0, value: "01:59" },
  { index: 6, value: "02:59" },
]}
    ${"+01:59"}  | ${[INTERVAL_REGEX]}         | ${[{ index: 0, value: "+01:59" }]}
    ${"-01:59"}  | ${[INTERVAL_REGEX]}         | ${[{ index: 0, value: "-01:59" }]}
    ${"01:59"}   | ${[INTERVAL_REGEX]}         | ${[{ index: 0, value: "01:59" }]}
  `("", ({ line, tokens, expected }) => {
    test(`${line} should return ${JSON.stringify(expected)}`, () => {
      expect(JSON.stringify(pullTokens(line, tokens), null, 2)).toBe(
        JSON.stringify(expected, null, 2)
      );
    });
  });
});
