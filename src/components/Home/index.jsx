import React, {Component} from 'react';
import './Home.scss';
import BeerBtn from '../BeerBtn';

export default class Home extends Component {
  render() {

    const {onClickBeer, btnBeer, onClickClose, closeModal} = this.props;

    return (
      <div>
        { btnBeer ? <BeerBtn onClickClose={ onClickClose } closeModal={ closeModal }/> : null }
        <div className='beer__btn' onClick={onClickBeer}><span className='beer__btn_text'>¿Cerveza?</span></div>
      </div>
    );
  }
}
