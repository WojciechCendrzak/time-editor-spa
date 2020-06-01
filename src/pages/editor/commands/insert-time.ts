import moment from "moment";
import { isString } from "lodash";
import { TIME_FORMAT } from "../const";

export const getCurrentTime = () => {
  return moment()
    .utc()
    .toISOString(true);
};

export const formatTime = (dateTime: string | null | undefined) =>
  !!dateTime &&
  isString(dateTime) &&
  moment(dateTime, moment.ISO_8601).isValid()
    ? moment(dateTime).format(TIME_FORMAT)
    : undefined;

export const insertTime = (cm: any) => {
  const currentTime = `${formatTime(getCurrentTime())}\t`;
  cm.replaceSelection(currentTime);
};
