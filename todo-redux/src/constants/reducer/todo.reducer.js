const initialState = {
  process: [],
  finished: [],
  notice: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return {
        ...state,
        process: [payload.process, ...state.process],
        notice: payload.mess,
      };
    case "add__again":
      return {
        ...state,
        process: [payload.process, ...state.process],
        finished: state.finished.filter((item) => item !== payload.process),
        notice: payload.mess,
      };
    case "remove":
      return {
        ...state,
        process: state.process.filter((item) => item !== payload.finished),
        finished: [payload.finished, ...state.finished],
        notice: payload.mess,
      };
    case "error":
      return {
        ...state,
        notice: payload.mess,
      };
    default:
      return state;
  }
}
