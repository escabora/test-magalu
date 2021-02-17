import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";
import { Selectors } from "../../redux/modules/character";
import { Link } from 'react-router-dom';
import { Actions } from '../../redux/modules/character'

import { Like } from '../../containers/Like' 

const CardCharacter = memo(({ id, typeCard }) => {
  const dispatch = useDispatch();
  const character = useSelector(  
    (state) => Selectors.getById(state.character, id),
      shallowEqual
  );

  function handleClick(id) {
    dispatch(Actions.toggleFavorite(false))
    dispatch(Actions.toggleSearch(false))
    dispatch(Actions.searchItemVisit(id))
  }

  return (
    <div key={id}>
      <div style={{width:'190px', position:'relative', }}>
          <Link to={location => ({ ...location, pathname: `/character/${id}` })} onClick={() => handleClick(id)}>
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
