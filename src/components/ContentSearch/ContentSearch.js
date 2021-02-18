import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Selectors } from "../../redux/modules/character";

import { CardCharacter } from "../CardCharacter";
import { PropTypes } from "prop-types";

import Grid from "../../objects/Grid";
import * as S from "./styles";

function ContentSearch({ page }) {
  const characters = useSelector(
    (state) => Selectors.getSearchById(state.character.search),
    shallowEqual
  );

  return (
    <S.ContentSearch page={page}>
      {characters.length === 0 ? (
        <></>
      ) : (
        <Grid>
          {characters.map((id) => (
            <CardCharacter typeCard={"search"} key={id} id={id} />
          ))}
        </Grid>
      )}
    </S.ContentSearch>
  );
}

ContentSearch.propTypes = {
  page: PropTypes.string.isRequired,
};


export default ContentSearch;
