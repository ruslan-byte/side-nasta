import type { IEgeVariant } from "../../types//ege.type";
import { getEventTaskData } from "../entities/ege";
export default defineEventHandler(async (event): Promise<IEgeVariant> => {
  try {
    const themeIds =
      getQuery(event)
        .ids?.toString()
        .split(",")
        .map((item) => +item) ?? [];
    return {
      taskOne: getEventTaskData(themeIds),
    };
  } catch {
    return {
      taskOne: {
        events: [],
        years: [],
      },
    };
  }
});
