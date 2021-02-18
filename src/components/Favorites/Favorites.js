import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Selectors } from "../../redux/modules/character";

import { CardCharacter } from "../../components/CardCharacter";
import { CardComic } from "../../components/CardComic";
import Grid from "../../objects/Grid";
import * as F from "./styles";

function Favorites() {
  const characters = useSelector(
    (state) => Selectors.getStatusByLike(state.character, "characters"),
    shallowEqual
  );

  const comics = useSelector(
    (state) => Selectors.getStatusByLike(state.character, "comics"),
    shallowEqual
  );

  return (
    <F.ContentFavorite>
      {characters.length === 0 ? (
        <F.Title>Você não possui personagens favoritos</F.Title>
      ) : (
        <>
          <F.Title>Seus Personagens favoritos são: </F.Title>
          <Grid>
            {characters.map((id) => (
              <CardCharacter key={id} id={id} />
            ))}
          </Grid>
        </>
      )}
      {comics.length === 0 ? (
        <F.Title>Você não possui quadrinhos favoritos</F.Title>
      ) : (
        <>
          <F.Title>Seus Quadrinhos favoritos são: </F.Title>
          <Grid>
            {comics.map((id) => (
              <CardComic key={id} id={id} />
            ))}
          </Grid>
        </>
      )}
    </F.ContentFavorite>
  );
}

export default Favorites;
