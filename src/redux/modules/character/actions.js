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