// import { produce } from "immer";
import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./counterTypes";

const initialState = {
  count: 0,
  count2: 10,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };

      // ---- using immer library ----
      return produce(state, (draft) => {
        // produce function have 2 argument (state and a call back function (draft))
        // draft is a copy of state. so we can directly change state without copying use ...spread operator
        draft.count = state.count + 1;
      });

    case DECREMENT:
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      return produce(state, (draft) => {
        draft.count = state.count - 1;
      });

    case INCREMENTBY5:
      return produce(state, (draft) => {
        draft.count2 = state.count2 + action.payload;
      });

    default:
      return state;
  }
};

export default counterReducer;
