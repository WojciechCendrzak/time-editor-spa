import {
  applyFromToInterval,
  applyLineTimeIntervalTo8,
} from "./line-time-rule/line-time-rule";

export const applyLineRules = (text: string) => {
  const lines = text.split("\n");

  const res = lines.map((line) => {
    let lineRes = applyFromToInterval(line);
    lineRes = applyLineTimeIntervalTo8(lineRes);
    return lineRes;
  });

  return res.join("\n");
};
