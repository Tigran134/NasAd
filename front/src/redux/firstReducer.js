import { TEST } from "./actionTypes";

const initialState = {
  test: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
      };

    default:
      return state;
  }
}
