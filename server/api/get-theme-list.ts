import { ITheme } from "~~/types/ege.type";
import { themeStorage } from "../storage/ege/thems";

export default defineEventHandler(async (event): Promise<ITheme[]> => {
  return themeStorage;
});
