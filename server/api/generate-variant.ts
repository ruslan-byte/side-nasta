import type { IEgeVariant } from "../../types//ege.type";
import { getEventTaskData } from "../entities/ege";
export default defineEventHandler(async (event): Promise<IEgeVariant> => {
  return {
    taskOne: getEventTaskData(),
  };
});
