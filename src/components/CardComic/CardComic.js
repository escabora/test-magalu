import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";
import { Selectors } from "../../redux/modules/character";
import { Like } from "../../containers/Like";
import * as C from "./styles";

const CardComic = memo(({ id }) => {
  const comic = useSelector(
    (state) => Selectors.getById(state.character, id),
    shallowEqual
  );

  return (
    <C.Article key={id}>
      <C.ContentImage>
        <img
          style={{ width: "100%" }}
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
      </C.ContentImage>
      <C.ContentDescription>
        <C.NameCharacter>{comic.title}</C.NameCharacter>
        <Like id={id} typed={"comics"} />
      </C.ContentDescription>
    </C.Article>
  );
});

CardComic.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CardComic;
