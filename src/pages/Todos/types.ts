export enum EStatus {
  InProgress = "InProgress",
  Ready = "Ready",
  Archive = "Archive",
  Total = "Total",
}

export interface ITodo {
  id: string;
  text: string;
  status: EStatus;
  isChecked: boolean;
}
