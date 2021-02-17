import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";

import { Selectors } from "../../redux/modules/character";
import { CardCharacter } from '../../components/CardCharacter';

function ListCardCharacters({ handleLoadMore }) {
    const { isRequest } = useSelector(
      (state) => state.character.list,
      shallowEqual
    );
    const characters = useSelector(
      (state) => 
      Selectors.getByStatus(state.character.list),
      shallowEqual
    );
  
    return (
      <>
        <div style={ {display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
          {characters.map((id) => (
            <CardCharacter key={id} id={id}/>
          ))}
        </div>
        
        {(isRequest) ? (
            <p>loading</p>
        ):(
          <button onClick={handleLoadMore} disabled={isRequest}>
          ver mais
        </button>
        )}
        </>
    );
}

CardCharacter.propTypes = {
    handleLoadMore: PropTypes.func,
};
  
export default ListCardCharacters;