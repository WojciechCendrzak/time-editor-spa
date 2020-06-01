import moment, { Moment } from "moment";
import { pullTokens } from "../pull-tokens";
import { TIME_REGEX, INTERVAL_REGEX, TIME_FORMAT } from "../../const";
import { replaceAt } from "../../strings/strings";

const T = TIME_REGEX;
const I = INTERVAL_REGEX;

export const getInterval = (from: Moment, to: Moment) => {
  const diffMs = to.diff(from);
  const sign = diffMs >= 0 ? "+" : "-";
  const res = `${sign}${moment.utc(Math.abs(diffMs)).format("HH:mm")}`;
  return res;
};

export const applyFromToInterval = (line: string | undefined) => {
  const tokens = pullTokens(line, [T, T, I]);

  if (tokens && tokens?.length >= 3) {
    const from = tokens[0];
    const to = tokens[1];
    const intervalPlaceholder = tokens[2];
    const res = getInterval(
      moment(from.value, TIME_FORMAT),
      moment(to.value, TIME_FORMAT)
    );
    return replaceAt(
      line,
      intervalPlaceholder.index,
      intervalPlaceholder.value.length,
      res
    );
  } else {
    return line;
  }
};

export const applyLineTimeIntervalTo8 = (line: string | undefined) => {
  const tokens = pullTokens(line, [T, T, I, I]);
  if (tokens && tokens?.length >= 4) {
    const from = tokens[0];
    const to = tokens[1];
    const diffTo8Placeholder = tokens[3];
    const res = getInterval(
      moment(from.value, TIME_FORMAT).add(8, "hours"),
      moment(to.value, TIME_FORMAT)
    );
    return replaceAt(
      line,
      diffTo8Placeholder.index,
      diffTo8Placeholder.value.length,
      res
    );
  } else {
    return line;
  }
};

/**
 *
 * HOUR => [01][0-9]
 * MINUTE =>: [01][0-9]
 * TIME => HOUR:MINUTE
 * WHEN => TIME(as from)*TIME(as to)*INTERVAL(as interval) => interval = to - from;
 * WHEN => TIME(as from)*TIME(as to)*INTERVAL(as interval)*INTERVAL(as diffTo8) => diffTo8 = 08:00 - interval
 *
 *
 * T(from)*T(to)*I(interval)*I(diffTo8) => diffTo8 = interval - 08:00
 *
 *
 */
