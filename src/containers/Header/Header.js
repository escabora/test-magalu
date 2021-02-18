import React, { useCallback, useEffect } from "react";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Filter } from "../../containers/Filter";
import { Search } from "../../containers/Search";
import { ContentSearch } from "../../components/ContentSearch";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import LogoPng from "../../assets/logo.png";
import { ReactComponent as HeartIcon } from "../../assets/heart-hover.svg";
import * as H from "./styles";

function Header({ typePage }) {
  const dispatch = useDispatch();
  const { toggleFavorite } = useSelector((state) => state.character);
  const { toggleSearch } = useSelector((state) => state.character.search);


  useEffect(() => {
    checkBody();
  }, []);

  const onFilter = useCallback(
    (value) => {
      dispatch(Actions.filterCharacters(value));
    },
    [dispatch]
  );

  const charactersLength = useSelector(
    (state) => state.character.list.filter.all.length
  );

  function checkBody() {
    window.location.href.includes("/character")
      ? (document.body.style.background = "var(--color-green)")
      : (document.body.style.background = "var(--color-white)");
  }

  function handleClickBody() {
    checkBody();
  }

  function handleFavorite() {
    dispatch(Actions.toggleFavorite(!toggleFavorite));
  }

  return (
    <>
      {typePage === "home" ? (
        <>
          <H.HeaderContent>
            <H.HeaderLogoLink to={"/"} onClick={() => handleClickBody()}>
              <LogoIcon />
            </H.HeaderLogoLink>
            <H.Title>Explore o universo</H.Title>
            <H.Description>
              Mergulhe no domínio deslumbrante de todos os personagens clássicos
              que você ama - e aqueles que você descobrirá em breve!
            </H.Description>
            <Search page={typePage} />
            {toggleSearch ? <ContentSearch page={typePage} /> : <></>}
            <H.GroupActions>
              <H.TextResult>Encontrados {charactersLength} heróis</H.TextResult>
              <div>
                <Filter handleFilter={onFilter} />
                <H.ButtonFavorite onClick={() => handleFavorite()}>
                  <HeartIcon />
                  Somente favoritos
                </H.ButtonFavorite>
              </div>
            </H.GroupActions>
          </H.HeaderContent>
        </>
      ) : (
        <>
          <H.HeaderContentInner>
            <H.HeaderLogoLink to={"/"} onClick={() => handleClickBody()}>
              <img src={LogoPng} alt='Marvel' />
            </H.HeaderLogoLink>
            <Search page={typePage} />
            <H.HeaderSearch>
            {toggleSearch ? <ContentSearch page={typePage} /> : <></>}
            </H.HeaderSearch>
          </H.HeaderContentInner>
        </>
      )}
    </>
  );
}

Header.propTypes = {
  typePage: PropTypes.string.isRequired,
};

export default Header;
