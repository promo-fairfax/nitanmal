import React, { Component } from 'react';
import './BeerBtn.scss';

class BeerBtn extends Component {
    render() {
        const { onClickClose, closeModal } = this.props;
        const modalClosed = closeModal ? 'closed' : '';
        
        return(
            <div className={`beer__container ${ modalClosed }`}>
                <div className='beer__container_content'>
                    <i className="fas fa-times tea__close" onClick={onClickClose}></i>
                    <img className='beer__gif' src='https://media.giphy.com/media/3o7btZjaYxqkGyOYA8/giphy.gif' alt ='animated gif of a beer on an unicorn'></img> 
                </div>
            </div>
        );
    }
}

export default BeerBtn;