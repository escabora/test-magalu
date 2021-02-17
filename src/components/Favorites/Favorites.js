import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Selectors } from "../../redux/modules/character";

import { CardCharacter } from '../../components/CardCharacter';


function Favorites() {
    const characters = useSelector(
        (state) => 
        Selectors.getStatusByLike(state.character.list, 'characters'),
        shallowEqual
    );
    

    return (
        <div>
            {(characters.length === 0) ? (
                <p>Você não possui nenhum personagem favoritos</p>
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
        </div>
    )
}

export default Favorites;