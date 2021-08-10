import { FIRSTMUSIC, NEXTANDPRE_SONG, PlayingSong } from "../action";
import { ActionType } from "../actionType";

interface Song {
  title: string;
  bgImage: string;
  creator: string;
  music: string;
  avatar: string;
  id: number;
}
const initialState = {
  title: "",
  bgImage: "",
  creator: "",
  music: "",
  avatar: "",
  id: 0,
};
export const playingReducer = (
  state: Song = initialState,
  { type, payload }: PlayingSong | FIRSTMUSIC | NEXTANDPRE_SONG
) => {
  switch (type) {
    case ActionType.PLAYING:
      return {
        song: payload,
      };
    case ActionType.NEXTANDPRE:
      return {
        song: payload,
      };
    case ActionType.FIRSTMUSIC:
      return {
        song: { ...payload, id: 0 },
      };
    default:
      return state;
  }
};
