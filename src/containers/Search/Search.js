import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";

import { ContentSearch } from '../../components/ContentSearch'

function Search() {

    const { toggleSearch } = useSelector((state) => state.character.search);
    const dispatch = useDispatch();

    function handleChange(ev) {
        const term = ev.target.value;
        if(ev.target.value.length) {
            dispatch(Actions.getSearchTerm(term));
        } else {
            dispatch(Actions.resetSearch());
        }
    }

    function handleFocus(ev) {
        ev.preventDefault();
        dispatch(Actions.toggleSearch(!toggleSearch))
    }

    function handleFousOut(ev) {
        dispatch(Actions.toggleSearch(!toggleSearch))
        dispatch(Actions.resetSearch());
        ev.target.value = '';
    }

    return(
        <div>
            <input type='text' placeholder='busca' 
                onFocus={(ev) => handleFocus(ev)}
                onBlur={(ev) => handleFousOut(ev)} 
                onChange={(ev) => handleChange(ev)} 
            />
            {(toggleSearch) ? (
                <ContentSearch />
            ) 
            : (
                <></>
            )}
            
        </div>

    )
}

export default Search;
