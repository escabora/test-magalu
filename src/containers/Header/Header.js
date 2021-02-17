import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Filter } from "../../containers/Filter";
import { Search } from "../../containers/Search";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import * as H from './styles';

function Header() {
  const dispatch = useDispatch();
  const { toggleFavorite } = useSelector((state) => state.character);

  const onFilter = useCallback(
    (value) => {
      dispatch(Actions.filterCharacters(value));
    },
    [dispatch]
  );

  const charactersLength = useSelector(
    (state) => state.character.list.filter.all.length);

  function handleFavorite() {
    dispatch(Actions.toggleFavorite(!toggleFavorite));
  }

  return (
    <> 
        <H.HeaderContent>
            <H.HeaderLogoLink to={'/'}>
                <LogoIcon />
            </H.HeaderLogoLink>
            <H.Title>Explore o universo</H.Title>
            <H.Description>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</H.Description>
            <Search page={'home'} />
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
  );
}

export default Header;
