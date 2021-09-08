import { ActionType } from "../actionType";
export interface ActionSuccess {
  type: ActionType.ACTION1;
  payload: string[];
}
export interface ActionError {
  type: ActionType.ACTION2;
  payload: string[];
}

export interface GetMusicType {
  type: ActionType.GETMUSICTYPES;
  payload: string[];
}
export interface PlayingSong {
  type: ActionType.PLAYING;
  payload: {};
}
export interface FIRSTMUSIC {
  type: ActionType.FIRSTMUSIC;
  payload: {};
}
export interface NEXTANDPRE_SONG {
  type: ActionType.NEXTANDPRE;
  payload: {};
}

export type Action = ActionSuccess | ActionError;
