import { stringify } from "query-string";
import md5 from "crypto-js/md5";

const ENDPOINTCHARACTERS = "https://gateway.marvel.com:443/v1/public/characters?";
const ENDPOINTCOMICS = "https://gateway.marvel.com:443/v1/public/characters/";
const publicKey = "7a61a91abdfca0f8867b988b8f4e306a";
const privateKey = "6a96df46a91c28e0ac728731cbbeafe23e4e1fab";
const ts = 1;

const paramsDefault = {
  hash: md5(ts + privateKey + publicKey),
  apikey: publicKey,
  ts: ts,
}

export const getCharacters = async (offset) => {
  const params = stringify({
    ...paramsDefault,
    offset: offset,
    orderBy: "modified",
  });

  const response = await fetch(ENDPOINTCHARACTERS + params, {
    headers: new Headers({
      "Content-Type": "application/json; charset=utf-8",
    }),
    method: "GET",
  })
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};

export const getSearchByTerm = async (term) => {
  const params = stringify({
    ...paramsDefault,
    nameStartsWith: term,
  });

  const response = await fetch(ENDPOINTCHARACTERS + params, {
    headers: new Headers({
      "Content-Type": "application/json; charset=utf-8",
    }),
    method: "GET",
  })
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};

export const getCharacterComic = async (id) => {
  const params = stringify({
    ...paramsDefault,
    orderBy: "-onsaleDate",
    orderBy: "-issueNumber",
    limit: "10",
  });

  const response = await fetch(`${ENDPOINTCOMICS + id}/comics?${params}`, {
    headers: new Headers({
      "Content-Type": "application/json; charset=utf-8",
    }),
    method: "GET",
  })
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};
