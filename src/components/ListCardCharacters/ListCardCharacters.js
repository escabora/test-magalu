import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";

import { Selectors } from "../../redux/modules/character";
import { ChardCharacter } from '../../components/CardCharacter';

function ListChardCharacters({ handleLoadMore }) {
    const { isRequest, offset } = useSelector(
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
        <p>Encontrados {characters.length} resultados</p>
        <div style={ {display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
          {characters.map((id) => (
            <ChardCharacter key={id} id={id}/>
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

ChardCharacter.propTypes = {
    handleLoadMore: PropTypes.func,
};
  
export default ListChardCharacters;