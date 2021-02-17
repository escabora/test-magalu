import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";
import { Selectors } from "../../redux/modules/character";
import { Link } from 'react-router-dom';


import { Like } from '../../containers/Like' 

const CardCharacter = memo(({ id, typeCard }) => {
  const character = useSelector(  
    (state) => Selectors.getById(state.character, id),
      shallowEqual
  );

  return (
    <div key={id}>
      <div style={{width:'190px', position:'relative', }}>
          <Link to={`character/${id}`} >
            <img style={{width:'100%', }} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.name}</p>
          </Link>
          {(typeCard !== 'search') ? (
          <Like id={id} typed={'characters'}/>
          ) : (<></>)}

      </div>
    </div>
  );
});

CardCharacter.propTypes = {
  id: PropTypes.number.isRequired,
  typeCard: PropTypes.string,
};

export default CardCharacter;
