export interface IEgeVariant {
  taskOne: IEgeEventTask;
}

export interface IEgeEventTask {
  events: IEgeEvent[];
  years: number[];
}
export interface IEgeEvent {
  id: number;
  label: string;
  themeId?: number;
  year: number;
}
