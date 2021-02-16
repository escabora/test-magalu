import { stringify } from 'query-string';
import md5 from 'crypto-js/md5';

const ENDPOINT = "https://gateway.marvel.com:443/v1/public/characters?";
const publicKey = "7a61a91abdfca0f8867b988b8f4e306a";
const privateKey = "6a96df46a91c28e0ac728731cbbeafe23e4e1fab";
const ts = 1;

export const getCharacters = async (offset) => {
  const params = stringify({
    apikey: publicKey,
    ts: ts,
    offset: offset,
    hash: md5(ts+privateKey+publicKey)
  });

  const response = await fetch(ENDPOINT + params, {
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8"
      }),
      method: 'GET'
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
    apikey: publicKey,
    ts: ts,
    nameStartsWith: term,
    hash: md5(ts+privateKey+publicKey)
  });

  const response = await fetch(ENDPOINT + params, {
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8"
      }),
      method: 'GET'
    })
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};

export const getCharacter = async (id) => {
  // const response = await axios
  //   .get(`${ENDPOINT}/${id}`)
  //   .then(({ data }) => data)
  //   .catch((err) => {
  //     throw err.response;
  //   });

  // return response;
};
