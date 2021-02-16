import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";
import { Selectors } from "../../redux/modules/character";

const ChardCharacter = memo(({ id, typeCard }) => {
  const character = useSelector(  
    (state) =>
      Selectors.getById(state.character, id),
      shallowEqual
  );

  return (
    <div key={id}>
      <div style={{width:'190px', position:'relative', }}>
        <img style={{width:'100%', }} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <p>{character.name}</p>
      </div>
    </div>
  );
});

ChardCharacter.propTypes = {
  id: PropTypes.number.isRequired,
  typeCard: PropTypes.string,
};

export default ChardCharacter;
