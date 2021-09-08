import axios from "axios";
import { Dispatch } from "react";
import {
  ActionError,
  GetMusicType,
  PlayingSong,
  FIRSTMUSIC,
  NEXTANDPRE_SONG,
} from "../action";
import { ActionType } from "../actionType";
export * from "./typeMusic";

interface Musics {
  name: string;
  songs: string[];
}

export const getMusic =
  (kind: string) =>
  async (dispatch: Dispatch<GetMusicType | ActionError | FIRSTMUSIC>) => {
    try {
      const { data } = await axios.get(
        "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR2XsL51CfS7QoqE4CF7JFmoYe7maKoXEub_Bst3J2wDo5-jxS5ERBcmcrM"
      );
      const { top100_AM, top100_CA, top100_VN } = data.songs;
      const { name, songs }: Musics = top100_VN.find(
        ({ name, songs }: Musics) => name === kind
      );
      dispatch({
        type: ActionType.GETMUSICTYPES,
        payload: songs,
      });
      dispatch({
        type: ActionType.FIRSTMUSIC,
        payload: songs[0],
      });
      console.log(songs);
    } catch (err) {
      dispatch({
        type: ActionType.ACTION2,
        payload: ["Error"],
      });
    }
  };
export const playingSong =
  (song: {}, id?: number) =>
  async (dispatch: Dispatch<PlayingSong | NEXTANDPRE_SONG>) => {
    console.log(song);
    {
      id
        ? dispatch({
            type: ActionType.NEXTANDPRE,
            payload: { ...song, id },
          })
        : dispatch({
            type: ActionType.PLAYING,
            payload: song,
          });
    }
  };
