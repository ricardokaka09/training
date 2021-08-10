import axios from "axios";
import { Dispatch } from "redux";

export const setKindMusic = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR2XsL51CfS7QoqE4CF7JFmoYe7maKoXEub_Bst3J2wDo5-jxS5ERBcmcrM"
    );
    const { top100_AM, top100_CA, top100_VN } = data.songs;

    return top100_VN;
  } catch (err) {
    console.log(err);
  }
};
