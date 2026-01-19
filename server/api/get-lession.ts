import lession from "../storage/lession.json";

export default defineEventHandler(async (event) => {
  return lession;
});
