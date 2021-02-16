import React from "react";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";

function Filter({ handleFilter }) {
  const { character } = useSelector((state) => state);

  return (
    <button
      onClick={() => handleFilter(character.list.statusFilter === "all" ? "alphabetic" : "all")}
    >
      {character.list.statusFilter === "all" ? "alphabetic" : "all"}
    </button>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
