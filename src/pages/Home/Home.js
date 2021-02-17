import React,  { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Filter } from '../../containers/Filter'
import { ListCardCharacters } from '../../components/ListCardCharacters'
import { Favorites } from '../../components/Favorites'
import { Search } from '../../containers/Search'

function Home() {

  const { toggleFavorite } = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(Actions.getAll(currentPage));
  }, [dispatch, currentPage]);

  const onLoadMore = useCallback(() => {
    setCurrentPage(currentPage + 20);
  }, [currentPage]);

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
        {(toggleFavorite) ? (
          <Favorites />
        ) : (
          <ListCardCharacters handleLoadMore={onLoadMore} />
        )}
    </>
    
  );
}

export default Home;
