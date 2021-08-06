import axios from "axios";
import { Dispatch } from "react";
import { Action } from "../action";
import { ActionType } from "../actionType";

export const createUser = () => async (dispatch: Dispatch<Action>) => {
  try {
    const data = axios.get(
      "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR2XsL51CfS7QoqE4CF7JFmoYe7maKoXEub_Bst3J2wDo5-jxS5ERBcmcrM"
    );
    console.log(data);
  } catch (err) {
    dispatch({
      type: ActionType.ACTION2,
      payload: "Error",
    });
  }
};
