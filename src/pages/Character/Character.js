import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Actions } from "../../redux/modules/character";
import { Selectors } from "../../redux/modules/character";
import { useParams } from 'react-router-dom';
import { Header } from '../../containers/Header'
import { Favorites } from '../../components/Favorites'
import { CardComic } from '../../components/CardComic'


import { formatDate } from '../../utils'

function Character() {
    const { id } = useParams();
    const { toggleFavorite } = useSelector((state) => state.character);

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
    
    const dateLastComic = useSelector(
    (state) => {
        const listComics = state.character.comics.listComicById;
        const last = Object.keys(listComics).slice(-1)[0];

        const date = new Date(listComics[last] && listComics[last].dates[0].date);
        const newDate = formatDate(date);
        return newDate;
    });


    
    return (
        <>
            <Header />
            {(toggleFavorite) ? (
                <Favorites />
            ) : (
            <>
                <p>Nome: {character.name}</p><br/>
                <img style={{width:'100%', }} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                <p>{character.description}</p><br/>
                <p>Quadrinhos: {character.comics.available}</p><br/>
                <p>Series: {character.series.available}</p><br/>
                <p>Rating: </p>
                <p>Último Quadrinho: {dateLastComic}</p>
                <p>Últimos Lançamentos </p>
                {comics.map((id) => (
                    <CardComic key={id} id={id} />
                ))}
            </>
            )}
        </>
    )
};

export default Character;
