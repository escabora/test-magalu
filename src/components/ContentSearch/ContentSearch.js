import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import { Selectors } from "../../redux/modules/character";

import { CardCharacter } from '../CardCharacter';


function ContentSearch() {
    const characters = useSelector(
        (state) => 
        Selectors.getSearchById(state.character.search),
        shallowEqual
    );

    return (
        <div>
            {(characters.length === 0) ? (
                <></>
            ) : (
                <div style={ {display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
                    {characters.map((id) => (
                        <CardCharacter typeCard={'search'} key={id} id={id}/>
                    ))}
                </div>
            )} 
        </div>
    )
}

export default ContentSearch;
