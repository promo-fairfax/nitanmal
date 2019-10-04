import React, {useEffect, useState} from 'react';
import './WhatsNext.scss';
import fetchUrl from '../../services/fetchUrl';
import notFound from '../../assets/not-found-face.png'

const seriesUrl = 'http://api.tvmaze.com/search/shows?q=';

const WhatsNext = () => {
    const [ seriesList, setSeriesList ] = useState([]);
    const [ randomSelection, setRandomSelection ] = useState("");
    const [ seriesResult, setSeriesResult ] = useState([]);

    useEffect(() =>{
        const localValue = JSON.parse(localStorage.getItem('favoritesSeries'));
        setSeriesList(localValue);
    }, [])
    
    useEffect(() =>{
        localStorage.setItem('favoritesSeries', JSON.stringify(seriesList));
    }, [seriesList])

    const handleChange = (e) => {
        const inputValue = e.currentTarget.value;
        fetchUrl(seriesUrl + inputValue)
        .then(data => {
            setSeriesResult(data);
        });
    }

    const handleClick = (e) => {
        const newItem = seriesResult.find(result => result.show.id === parseInt(e.currentTarget.dataset.id));

        setSeriesList(prevState => {
            const remove = prevState.some(selected => selected.show.id === newItem.show.id);
            if (remove){
                return [...prevState.filter(selected => selected.show.id !== newItem.show.id)];
            } else {
                return [...prevState, newItem];
            }
        })
    }

    const buildSearchList = () => {
        const seriesListBuild = seriesResult.map((serie, index) => {
            const image = serie.show.image ? serie.show.image.medium : notFound;
            let itemClass = "";
            if (seriesList.length > 0 && seriesList.some(selected => selected.show.id === serie.show.id)) {
                itemClass = "whats-next__search-item--selected";
            }
            return (
                <li className={`whats-next__search-item ${itemClass}`} onClick={handleClick} key={index} data-id={serie.show.id} >
                    <div className="whats-next__search-image" style={{backgroundImage: `url(${image})`}} />
                    <p className="whats-next__search-title">{serie.show.name}</p>
                </li>
        )})

        if (seriesListBuild.length === 0) {
            return (<p>Ups! No matches found.</p>)
        }

        return (
            <ul className="whats-next__search-list">
                {seriesListBuild}
            </ul>
        )
    }

    const handleRandomClick = () => {
        const randomNumber = Math.floor(Math.random() * seriesList.length);
        const suggestion = seriesList[randomNumber];
        setRandomSelection(suggestion);
    }

    const buildSelectSection = () => {
        const emptyMessage = "No suggestions. Give it a try!";
        const suggestionOrEmpty = randomSelection ? randomSelection.show.name : emptyMessage;
        
        return (
            <React.Fragment>
                <h3 className="whats-next__selection__title">{suggestionOrEmpty}</h3>
                <button className="whats-next__selection__button" onClick={handleRandomClick}>Help me decide!</button>
            </React.Fragment>
        )
    }

    const buildFavoriteList = () => {
        if (seriesList.length > 0) {
            return (
                <ul className="whats-next__favorite-list">
                    {seriesList.map(serie => <h3 className="whats-next__favorite-item">{serie.show.name}</h3>)}
                </ul>
        )} else {
            return <p>There's no favorite yet. Start selecting!</p>
        }
    }

    return (
        <section className="whats-next__container">
            <div className="whats-next__section-container">
                <div className="whats-next__title-container">
                    <i class="fas fa-tv whats-next__icon" />
                    <h1 className="whats-next__title">What should I watch next?</h1>
                </div>
                <h2 className="whats-next__subtitle">
                    Fill the list series you want to watch. 
                    If you doesn't know what to watch next, hit the button and let me decide for you.
                </h2>
                <div className="whats-next__form__container">
                    <label className="whats-next__form__label" htmlFor='series'>Series</label>
                    <input
                        className="whats-next__form__input"
                        type="text"
                        name="series"
                        onChange={handleChange}
                        placeholder="Find series..."
                    />
                </div>
                    {buildSearchList()}
                <div className="whats-next__favorite__container">
                    <h2 className="whats-next__favorite-title">Favorites</h2>
                    {buildFavoriteList()}
                </div>
                <div className="whats-next__selection__container">
                    {buildSelectSection()}
                </div>
            </div>
        </section>
    )
} 

export default WhatsNext;