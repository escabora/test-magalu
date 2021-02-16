import React,  { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Filter } from '../../containers/Filter'
import { ListCardCharacters } from '../../components/ListCardCharacters'


function Home() {

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

  return (
    <>
        <Filter handleFilter={onFilter} />
        <ListCardCharacters handleLoadMore={onLoadMore} />
    </>
    
  );
}

export default Home;
