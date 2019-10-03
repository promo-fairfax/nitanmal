import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Landing.scss';

class Landing extends Component {
    render() {
        return(
            <Link to="./home">
                <div className='landing__container'>
                    <h1 className='landing__title'>NI TAN MAL</h1>
                    <div className='landing__smile'>:)</div>
                </div>
            </Link>
        );
    }
}

export default Landing;
