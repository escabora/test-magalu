import produce from "immer";

import { Constants } from ".";
import { sortAlphabetic } from "./selectors";

const initialState = {
  list: {
    isRequest: true,
    statusFilter: "all",
    statusById: {},
    statusComicsById: {},
    filter: {
      all: [],
      alphabetic: [],
    },
    offset: 0,
    like: {
      characters: [],
      comics: [],
    },
  },
  toggleFavorite: false,
  search: {
    isRequestSearch: true,
    term: '',
    listSearchById: {},
    filter: {
      all: [],
    },
    toggleSearch: false,
  },
  comics: {
    isRequestComic: true,
    idCharacter: 0,
    listComicById: {},
    filter: {
      all: [],
    },
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
          if (!draft.list.filter.all.includes(character.id)) {
            draft.list.filter.all.push(character.id);
          }
        });

        // draft.list.filter.all.sort((a, b) => a - b);
        draft.list.filter.alphabetic = sortAlphabetic(draft.list.statusById);

        break;

      case Constants.CHARACTER_GET_ALL_FAILURE:
        draft.list.isRequest = false;
        draft.list.error = action.error;

        break;

      case Constants.FILTER_CHARACTERS:
        draft.list.statusFilter = action.statusFilter;

        break;

      case Constants.LIKE_CHARACTERS:
        draft.list.like[action.like.typed].push(action.like.id);

        break;

      case Constants.REMOVELIKE_CHARACTERS:
        draft.list.like[action.removeLike.typed].forEach((item, index) => {
          if (item === action.removeLike.id) {
            draft.list.like[action.removeLike.typed].splice(index, 1);
          }
        });

        break;

      case Constants.ADD_COMIC:
        draft.list.statusComicsById[action.id] =
          draft.comics.listComicById[action.id];
        break;

      case Constants.ADD_REMOVE:
        delete draft.list.statusComicsById[action.id];
        break;

      case Constants.TOGGLE_FAVORITE:
        draft.toggleFavorite = action.toggleFavorite;
        break;

      case Constants.TOGGLE_SEARCH:
        draft.search.toggleSearch = action.toggleSearch;
        break;

      case Constants.CHARACTER_GET_SERACH_TERM:
        draft.search.isRequestSearch = true;
        draft.search.term = action.term;
        break;

      case Constants.CHARACTER_GET_SERACH_TERM_SUCCESS:
        draft.search.filter.all = [];
        action.payload.results.forEach((response) => {
          draft.search.listSearchById[response.id] = response;
          draft.search.filter.all.push(response.id);
        });
        break;

      case Constants.CHARACTER_GET_SERACH_TERM_FAILURE:
        draft.search.isRequestSearch = false;
        draft.search.error = action.error;
        break;

      case Constants.RESET_SEARCH:
        draft.search.isRequestSearch = false;
        draft.search.listSearchById = {};
        draft.search.filter.all = [];
        break;

      case Constants.CHARACTER_GET_COMIC:
        draft.comics.isRequestComic = true;
        draft.comics.idCharacter = action.id;
        break;

      case Constants.CHARACTER_GET_COMIC_SUCCESS:
        draft.comics.filter.all = [];
        action.payload.results.forEach((response) => {
          draft.comics.listComicById[response.id] = response;
          draft.comics.filter.all.push(response.id);
        });
        break;

      case Constants.CHARACTER_GET_COMIC_FAILURE:
        draft.comics.isRequestComic = true;
        draft.comics.error = action.error;
        break;

      default:
        return state;
    }
  });
}
