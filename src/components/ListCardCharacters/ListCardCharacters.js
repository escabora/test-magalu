import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";

import { Selectors } from "../../redux/modules/character";
import { CardCharacter } from "../../components/CardCharacter";
import { Spiner } from "../Spiner";
import * as C from "./styles";
import Grid from "../../objects/Grid";

function ListCardCharacters({ handleLoadMore }) {
  const { isRequest } = useSelector(
    (state) => state.character.list,
    shallowEqual
  );
  const characters = useSelector(
    (state) => Selectors.getByStatus(state.character.list),
    shallowEqual
  );

  return (
    <>
      <Grid>
        {characters.map((id) => (
          <CardCharacter key={id} id={id} />
        ))}
      </Grid>

      {isRequest ? (
        <Spiner />
      ) : (
        <C.ReadMore onClick={handleLoadMore} disabled={isRequest}>
          ver mais
        </C.ReadMore>
      )}
    </>
  );
}

CardCharacter.propTypes = {
  handleLoadMore: PropTypes.func,
};

export default ListCardCharacters;
