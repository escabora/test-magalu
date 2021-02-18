import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Selectors } from "../../redux/modules/character";
import { useParams } from "react-router-dom";
import { Header } from "../../containers/Header";
import { Footer } from "../../components/Footer";
import { CardComic } from "../../components/CardComic";
import { formatDate } from "../../utils";
import { Container } from "../../layout";
import Grid from "../../objects/Grid";
import { ReactComponent as HeartIcon } from "../../assets/heart-hover.svg";
import { ReactComponent as BookIcon } from "../../assets/book.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { ReactComponent as RatingIcon } from "../../assets/review.svg";
import * as C from "./styles";

function Character() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getCharacterComics(id));
  }, [dispatch, id]);

  const character = useSelector(
    (state) => Selectors.getById(state.character, id),
    shallowEqual
  );

  const comics = useSelector(
    (state) => Selectors.getComicsById(state.character.comics, id),
    shallowEqual
  );

  const dateLastComic = useSelector((state) => {
    const listComics = state.character.comics.listComicById;
    const last = Object.keys(listComics).slice(-1)[0];

    const date = new Date(listComics[last] && listComics[last].dates[0].date);
    const newDate = formatDate(date);
    return newDate;
  });

  return (
    <>
      <Header typePage={"pageInner"} />
      <Container>
        <C.ColumnRow>
          <C.Column widthDesk={"30%"}>
            <C.TitleName>
              <h2>{character.name}</h2>
              <HeartIcon />
            </C.TitleName>
            <C.Description>{character.description}</C.Description>
            <C.ContentStatus>
              <div>
                <C.Status>
                  <p>Quadrinhos </p>
                  <div>
                    <BookIcon />
                    <p>{character.comics.available}</p>
                  </div>
                </C.Status>
                <C.Status>
                  <p>Series </p>
                  <div>
                    <PlayIcon />
                    <p>{character.series.available}</p>
                  </div>
                </C.Status>
              </div>
              <C.StatusRating>
                <p>Rating: </p>
                <RatingIcon />
              </C.StatusRating>
              <C.StatusComics>Último Quadrinho: {dateLastComic}</C.StatusComics>
            </C.ContentStatus>
          </C.Column>

          <C.Column widthDesk={"60%"}>
            <C.ImageFeature
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <C.NameSpace>{character.name}</C.NameSpace>
          </C.Column>
        </C.ColumnRow>

        {comics.length ? (
          <C.TitleLaunch>Últimos Lançamentos </C.TitleLaunch>
        ) : (
          <></>
        )}

        <Grid>
          {comics.map((id) => (
            <CardComic key={id} id={id} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Character;
