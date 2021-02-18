import React from "react";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import { ReactComponent as HeroIcon } from "../../assets/hero.svg";
import * as F from './syles'

function Filter({ handleFilter }) {
  const { character } = useSelector((state) => state);

  return (
    <F.LinkFilter>
      <HeroIcon /> Ordenar por nome - A/Z 
      <F.ToggleClick
        onClick={() =>
          handleFilter(
            character.list.statusFilter === "alphabetic" ? "all" : "alphabetic"
          )
        }
        active={character.list.statusFilter === "alphabetic" ? "all" : "alphabetic"} 
        />
    </F.LinkFilter>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
