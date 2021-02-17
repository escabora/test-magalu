import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PropTypes } from "prop-types";
import { Selectors } from "../../redux/modules/character";
import { Like } from '../../containers/Like' 

const CardComic = memo(({ id }) => {
  const comic = useSelector(  
    (state) => Selectors.getById(state.character, id),
      shallowEqual
  );

  return (
    <div key={id}>
          <div style={{width:'190px', position:'relative', }}>
          <img style={{width:'100%', }} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name} />
          <p>{comic.name}</p>
          <Like id={id} typed={'comics'} />
      </div>
    </div>
  );
});

CardComic.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CardComic;
