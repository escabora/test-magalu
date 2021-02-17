import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Selectors } from "../../redux/modules/character";

import { CardCharacter } from '../../components/CardCharacter';
import { CardComic } from '../../components/CardComic';


function Favorites() {
    const characters = useSelector(
        (state) => 
        Selectors.getStatusByLike(state.character, 'characters'),
        shallowEqual
    );
    

    const comics = useSelector(
        (state) => 
        Selectors.getStatusByLike(state.character, 'comics'),
        shallowEqual
    );
    
    return (
        <div>
            {(characters.length === 0) ? (
                <p>Você não possui personagens favoritos</p>
            ) : (
                <>
                    <p>Seus Personagens favoritos são: </p>
                    <div style={ {display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
                        {characters.map((id) => (
                            <CardCharacter key={id} id={id}/>
                        ))}
                    </div>
                </>
            )} 
            {(comics.length === 0) ? (
                <p>Você não possui quadrinhos favoritos</p>
            ) : (
                <>
                    <p>Seus Quadrinhos favoritos são: </p>
                    <div style={ {display:'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
                        {comics.map((id) => (
                            <CardComic key={id} id={id}/>
                        ))}
                    </div>
                </>
            )} 
        </div>
    )
}

export default Favorites;