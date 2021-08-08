import axios from "axios";
import { Dispatch } from "react";
import { Action } from "../action";
import { ActionType } from "../actionType";

interface Musics {
  name: string;
  songs: string[];
}

export const getMusic =
  (kind: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(
        "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR2XsL51CfS7QoqE4CF7JFmoYe7maKoXEub_Bst3J2wDo5-jxS5ERBcmcrM"
      );
      const { top100_AM, top100_CA, top100_VN } = data.songs;
      const { name, songs } = top100_VN.find(
        ({ name, songs }: Musics) => name === kind
      );
      // switch
      console.log(top100_VN);
      console.log(songs);
    } catch (err) {
      dispatch({
        type: ActionType.ACTION2,
        payload: "Error",
      });
    }
  };
