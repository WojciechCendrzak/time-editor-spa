import moment from "moment";

export const getNow = () => {
  return moment().toISOString(true);
};
