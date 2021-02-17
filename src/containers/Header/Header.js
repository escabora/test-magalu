import React, { useCallback }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Filter } from '../../containers/Filter'
import { Search } from '../../containers/Search'

function Header() {
    const dispatch = useDispatch();
    const { toggleFavorite } = useSelector((state) => state.character);

    const onFilter = useCallback(
        (value) => {
          dispatch(Actions.filterCharacters(value));
        },
        [dispatch]
      );
    
    function handleFavorite() {
        dispatch(Actions.toggleFavorite(!toggleFavorite))
    }

    return (
        <>
            <Search />
            <Filter handleFilter={onFilter} />
            <button onClick={() => handleFavorite()}>Abrir Favoritos</button>
        </>

    )
}

export default Header;