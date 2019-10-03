import React, {useEffect, useState} from 'react';
import './WhatsNext.scss';
import fetchUrl from '../../services/fetchUrl';

const seriesUrl = 'http://api.tvmaze.com/search/shows?q=';

const WhatsNext = () => {
    const [ seriesList, /**setSeriesList**/ ] = useState([]);
    const [ randomSelection, setRandomSelection ] = useState("");
    const [ seriesResult, setSeriesResult ] = useState([])

    
    const handleChange = (e) => {
        const inputValue = e.currentTarget.value;
        fetchUrl(seriesUrl + inputValue)
        .then(data => {
            console.log(data);
            setSeriesResult(data);
        });
    }

    const buildList = () => {
        return seriesList.map((serie, index) => <li className="whats-next__item" key={index}>{serie}</li>)
    }

    const buildSearchList = () => {
        return seriesResult.map((serie, index) => <li className="whats-next__item" onClick={''} key={index}>{serie.show.name}</li>)
    }

    const handleRandomClick = () => {
        const randomNumber = Math.floor(Math.random() * seriesList.length);
        const suggestion = seriesList[randomNumber];
        setRandomSelection(suggestion);
    }

    const buildSelectSection = () => {
        const emptyMessage = "No suggestions. Give it a try!";
        const suggestionOrEmpty = randomSelection ? randomSelection : emptyMessage;
        
        return (
            <React.Fragment>
                <h3 className="whats-next__selection__title">{suggestionOrEmpty}</h3>
                <button className="whats-next__selection__button" onClick={handleRandomClick}>Help me decide!</button>
            </React.Fragment>
        )
    }

    return (
        <section className="whats-next__container">
            <img src="https://media.giphy.com/media/1XgIXQEzBu6ZWappVu/giphy.gif" alt="work in progress"/>
            <p>Chato, aquí no hay ná que ver... ¡de momento!</p>
            <div className="whats-next__content">
                <h2 className="whats-next__form__subtitle">
                    Fill the list with movies or series you want to watch. 
                    If you doesn't know what to watch next, hit the button and let me decide for you
                </h2>
                <div className="whats-next__form__container">
                    <label className="whats-next__form__label" htmlFor='series'>Series</label>
                    <input
                        className="whats-next__form__input"
                        type="text"
                        name="series"
                        onChange={handleChange}
                    />
                </div>
                <ul className="whats-next__search-list">
                    {buildSearchList()}
                </ul>
                <ul className="whats-next__list">
                    {buildList()}
                </ul>
                <div className="whats-next__selection__container">
                    {buildSelectSection()}
                </div>
            </div>
        </section>
    )
} 

export default WhatsNext;