import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";
import { Selectors } from "../../redux/modules/character";
import { Link } from "react-router-dom";
import { Actions } from "../../redux/modules/character";
import { Like } from "../../containers/Like";
import * as C from "./styles";

const CardCharacter = memo(({ id, typeCard }) => {
  const dispatch = useDispatch();
  const character = useSelector(
    (state) => Selectors.getById(state.character, id),
    shallowEqual
  );

  function handleClick(id) {
    dispatch(Actions.toggleFavorite(false));
    dispatch(Actions.toggleSearch(false));
    dispatch(Actions.searchItemVisit(id));
  }

  return (
    <C.Article key={id}>
      <Link
        to={(location) => ({ ...location, pathname: `/character/${id}` })}
        onClick={() => handleClick(id)}
      >
        <C.ContentImage>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </C.ContentImage>
      </Link>
      <C.ContentDescription>
        <C.NameCharacter>{character.name}</C.NameCharacter>
        {typeCard !== "search" ? <Like id={id} typed={"characters"} /> : <></>}
      </C.ContentDescription>
    </C.Article>
  );
});

CardCharacter.propTypes = {
  id: PropTypes.number.isRequired,
  typeCard: PropTypes.string,
};

export default CardCharacter;
