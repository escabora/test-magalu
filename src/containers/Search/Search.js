import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { ContentSearch } from '../../components/ContentSearch'
import * as S from './styles'

function Search({ page }) {

    const { toggleSearch } = useSelector((state) => state.character.search);
    const dispatch = useDispatch();

    function handleChange(ev) {
        const term = ev.target.value;
        if(ev.target.value.length) {
            dispatch(Actions.getSearchTerm(term));
        } else {
            dispatch(Actions.resetSearch());
            dispatch(Actions.toggleSearch(!toggleSearch))
        }
    }

    function handleFocus(ev) {
        ev.preventDefault();
        dispatch(Actions.toggleSearch(!toggleSearch))
    }

    function handleFocusOut(ev) {
        setTimeout(() => {
            ev.target.value = '';
            dispatch(Actions.resetSearch());
            dispatch(Actions.toggleSearch(!toggleSearch))    
        }, 50);
    }

    return(
        <>
            <S.InputSearch 
                page={page}
                type='text' placeholder='Procure por heróis' 
                onFocus={(ev) => handleFocus(ev)}
                onBlur={(ev) => handleFocusOut(ev)}
                onChange={(ev) => handleChange(ev)} 
            />
            {(toggleSearch) ? (
                <ContentSearch />
            ) 
            : (
                <></>
            )}
            
        </>

    )
}

export default Search;
