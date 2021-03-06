import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Header } from "../../containers/Header";
import { Footer } from "../../components/Footer";
import { ListCardCharacters } from "../../components/ListCardCharacters";
import { Favorites } from "../../components/Favorites";
import { Container } from "../../layout";

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

  return (
    <>
      <Header typePage={"home"} />
      {toggleFavorite ? (
        <Container>
          <Favorites />
        </Container>
      ) : (
        <Container>
          <ListCardCharacters handleLoadMore={onLoadMore} />
        </Container>
      )}
      <Footer />
    </>
  );
}

export default Home;
