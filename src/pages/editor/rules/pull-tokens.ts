import { isString, range, isArray } from "lodash";

interface ResolvedToken {
  index: number;
  value: string;
}

export const pullTokens = (
  line: string | undefined,
  tokens: string[]
): ResolvedToken[] | undefined => {
  if (!line || !isString(line) || !isArray(tokens)) return undefined;

  let tempLine = line;
  const values = tokens.map((token) => {
    const xArray = new RegExp(token).exec(tempLine);

    if (xArray) {
      const resolvedToken = {
        index: xArray.index,
        value: xArray[0],
      };
      tempLine = tempLine.replace(
        resolvedToken.value,
        range(resolvedToken.value.length)
          .map((_) => " ")
          .join("")
      );

      return resolvedToken;
    }
  });

  const res =
    values.filter((value) => value).length === tokens.length
      ? (values as ResolvedToken[])
      : undefined;

  return res;
};
