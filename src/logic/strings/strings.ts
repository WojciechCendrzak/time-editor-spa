import { isNumber, isString } from 'lodash';

export const replaceAt = (
  value: string | undefined,
  index: number | undefined,
  length: number | undefined,
  replacement: string | undefined
) => {
  if (!value || !isString(value) || !isNumber(index) || !isNumber(length) || !replacement || !isString(replacement))
    return value;

  return `${value.substr(0, index)}${replacement}${value.substr(index + length)}`;
};
