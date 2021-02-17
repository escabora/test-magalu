import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Selectors, Actions } from "../../redux/modules/character";
import toast from 'react-hot-toast';

function Like({ id, typed }) {

    const likes = useSelector((state) => state.character.list.like);

    const dispatch = useDispatch();
    const handleLike = (id) => {
        
            if(Selectors.validationLike(likes, typed, id).length) {
                dispatch(Actions.removeLike({id, typed}))
                
                if(typed === 'comic') {
                    // dispatch(Actions.addComic({id, typed}))
                }

            } else {
                if(likes[typed].length <= 4) {
                    dispatch(Actions.like({id, typed}))
                    if(typed === 'comic') {
                        // dispatch(Actions.addComic({id, typed}))
                    }
                } else {
                    toast.error(`Máximo de 5 ${(typed === 'characters') ? 'personagens' : 'Quadrinhos'}`)
                } 
            }  
    }
    

    return (
        <button onClick={ () => handleLike(id) }>Adicionar Like</button>
    );
}

export default Like;