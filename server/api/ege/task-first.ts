import type { IEgeEventTask, IEgeVariant } from "../../../types//ege.type";
import { getEventTaskData } from "../../entities/ege";
export default defineEventHandler(async (event): Promise<IEgeEventTask> => {
  try {
    const themeIds =
      getQuery(event)
        .ids?.toString()
        .split(",")
        .map((item) => +item) ?? [];

    return getEventTaskData(themeIds);
  } catch {
    return {
      events: [],
      years: [],
    };
  }
});
