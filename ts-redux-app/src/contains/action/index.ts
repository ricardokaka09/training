import { ActionType } from "../actionType";
interface ActionSuccess {
  type: ActionType.ACTION1;
  payload: string[];
}
interface ActionError {
  type: ActionType.ACTION2;
  payload: string;
}

interface GetMusicType {
  type: ActionType.GETMUSICTYPES;
  payload: string[];
}

export type Action = ActionSuccess | ActionError | GetMusicType;
