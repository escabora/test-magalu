import produce from "immer";

import { Constants } from ".";
import { sortAlphabetic } from "./selectors";

const initialState = {
  list: {
    isRequest: true,
    statusFilter: "all",
    statusById: {},
    filter: {
      all: [],
      alphabetic: [],
    },
    offset: null,
  },
};

export default function reducer(state = initialState, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Constants.CHARACTER_GET_ALL:
        draft.list.isRequest = true;

        break;

      case Constants.CHARACTER_GET_ALL_SUCCESS:
        draft.list.isRequest = false;
        draft.list.count = action.payload.count;
        draft.list.offset = action.payload.offset;
    
        action.payload.results.forEach((character) => {
          draft.list.statusById[character.id] = character;
          draft.list.filter.all.push(character.id);
        });

        draft.list.filter.all.sort((a, b) => a - b);

        draft.list.filter.alphabetic = sortAlphabetic(draft.list.statusById);

        break;

      case Constants.CHARACTER_GET_ALL_FAILURE:
        draft.list.isRequest = false;
        draft.list.error = action.error;

        break;

      case Constants.FILTER_CHARACTERS:
        draft.list.statusFilter = action.statusFilter;

        break;


      default:
        return state;
    }
  });
}
