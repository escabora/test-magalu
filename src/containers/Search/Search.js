import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import { Actions } from "../../redux/modules/character";
import * as S from "./styles";

function Search({ page }) {
  const dispatch = useDispatch();

  function handleChange(ev) {
    const term = ev.target.value;
    if (ev.target.value.length) {
      dispatch(Actions.getSearchTerm(term));
    } else {
      dispatch(Actions.resetSearch());
      dispatch(Actions.toggleSearch(false));
    }
  }

  function handleFocus(ev) {
    ev.preventDefault();
    dispatch(Actions.toggleSearch(true));
  }

  function handleFocusOut(ev) {
    setTimeout(() => {
      ev.target.value = "";
      dispatch(Actions.resetSearch());
      dispatch(Actions.toggleSearch(false));
    }, 50);
  }

  return (
    <>
      <S.InputSearch
        page={page}
        type="text"
        placeholder="Procure por heróis"
        onFocus={(ev) => handleFocus(ev)}
        onBlur={(ev) => handleFocusOut(ev)}
        onChange={(ev) => handleChange(ev)}
      />
    </>
  );
}

Search.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Search;
