import { Constants } from '.';

export const getCharacter = (id) => ({
  type: Constants.CHARACTER_GET,
  id
});

export const getCharacterSuccess = (payload) => ({
  type: Constants.CHARACTER_GET_SUCCESS,
  payload
});

export const getCharacterFailure = (error) => ({
  type: Constants.CHARACTER_GET_FAILURE,
  error
});

export const getAll = (offset) => ({
  type: Constants.CHARACTER_GET_ALL,
  offset
});

export const getAllSuccess = (payload) => ({
  type: Constants.CHARACTER_GET_ALL_SUCCESS,
  payload
});

export const getAllFailure = (error) => ({
  type: Constants.CHARACTER_GET_ALL_FAILURE,
  error
});

export const filterCharacters = (statusFilter) => ({
  type: Constants.FILTER_CHARACTERS,
  statusFilter
});

export const like = (like) => ({
  type: Constants.LIKE_CHARACTERS,
  like
});

export const removeLike = (removeLike) => ({
  type: Constants.REMOVELIKE_CHARACTERS,
  removeLike
});

export const addComic = (id) => ({
  type: Constants.ADD_COMIC,
  id
})

export const removeComic = (id) => ({
  type: Constants.REMOVE_COMIC,
  id
})

export const toggleFavorite = (toggleFavorite) => ({
  type: Constants.TOGGLE_FAVORITE,
  toggleFavorite
});

export const getSearchTerm = (term) => ({
  type: Constants.CHARACTER_GET_SERACH_TERM,
  term
});

export const getSearchSuccess = (payload) => ({
  type: Constants.CHARACTER_GET_SERACH_TERM_SUCCESS,
  payload
});

export const getSearchFailure = (error) => ({
  type: Constants.CHARACTER_GET_SERACH_TERM_FAILURE,
  error
});

export const toggleSearch = (toggleSearch) => ({
  type: Constants.TOGGLE_SEARCH,
  toggleSearch
})

export const resetSearch = (resetSearch) => ({
  type: Constants.RESET_SEARCH,
  resetSearch
})

export const searchItemVisit = (id) => ({
  type: Constants.ITEMVISIT_SEARCH,
  id
})

export const getCharacterComics = (id) => ({
  type: Constants.CHARACTER_GET_COMIC,
  id
})

export const getCharacterComicsSuccess = (payload) => ({
  type: Constants.CHARACTER_GET_COMIC_SUCCESS,
  payload
})

export const getCharacterComicsFailure = (error) => ({
  type: Constants.CHARACTER_GET_COMIC_FAILURE,
  error
})

