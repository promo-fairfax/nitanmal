import React from 'react';
import './Horoscope.scss';

let accData = [];

class Horoscope extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertMessage: false,
      modalEmoji: false
    }

    this.getResultHoroscope = this.getResultHoroscope.bind(this);
    this.closeEmoji = this.closeEmoji.bind(this);
  }

  getResultHoroscope(event) {
    event.preventDefault();
    if(accData.length === 0){
      this.setState({ alertMessage: true })
    } else {
      const result = accData.reduce((a, b) => a + b);

      if(accData.length >= 4) {
        this.props.getHoroscope(result);
        this.setState({ alertMessage: false, modalEmoji: true })
      } else{
        this.setState({ alertMessage: true })
      }
    }

  }

  sendValueToConstructor(event) {
    const value = event.currentTarget.value;
    const data = parseInt(value);
    accData.push(data);
    console.log(accData)
  }

  showEmoji(emojiAsign) {
    if(emojiAsign === 'unicornio') {
      return 'images/emojis/unicorn.png'
    } else if(emojiAsign === 'pizza') {
      return 'images/emojis/pizza.png'
    } else if (emojiAsign === 'caca') {
      return 'images/emojis/caca.png'
    }
  }

  closeEmoji() {
    this.setState({ modalEmoji: false })
  }

  render() {

    const { horoscope } = this.props;

    let messageEmoji = '';

    if(horoscope === 'unicornio') {
      messageEmoji = <p className='horoscope__modal--text'>Hoy eres el UNICORNIO, ¡estás que lo petas!</p>;
    } else if(horoscope === 'pizza') {
      messageEmoji = <p className='horoscope__modal--text'>Hoy eres la PIZZA, ¡date un homenaje!</p>;
    } else if (horoscope === 'caca') {
      messageEmoji = <p className='horoscope__modal--text'>Hoy eres la CACA... ¡pero el día va a ir a mejor!</p>;
    }

    return(
      <div className="horoscope">

        <form action="" className="horoscope__form">
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend">¿Qué día crees que es hoy?</legend>
              <label htmlFor="1" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="1" id="1" value="2"/> 
                ¿Hoy es viernes? ¡No puede ser!
              </label>
              <label htmlFor="2" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="1" id="2" value="3"/> 
                Hoy es martes, seguro.
              </label>
              <label htmlFor="3" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="1" id="3" value="1"/> 
                Domingo, no puedo desayunar en el bar de abajo.
              </label>
          </fieldset>
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend">¿Qué te gustaría desayunar hoy?</legend>
              <label htmlFor="4" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="2" id="5" value="3"/>
                Un té rico.
              </label>
              <label htmlFor="5" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="2" id="6" value="2"/>
                Una Alhambra fresquita.
              </label>
              <label htmlFor="6" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="2" id="7" value="1"/>
                Un Jack Daniels.
              </label>
          </fieldset>
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend">¿Cuántas horas de siesta te hacen falta hoy?</legend>
              <label htmlFor="7" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="3" id="9" value="1"/>
                Nunca son suficientes.
              </label>
              <label htmlFor="8" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="3" id="10" value="3"/>
                Voy a cerrar los ojos cinco minuticos.
              </label>
              <label htmlFor="9" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="3" id="11" value="2"/>
                Hasta que se mueva Bonaparty.
              </label>
          </fieldset>
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend"><em>Bonus</em> ¿Estás esperando un pedido de Seur?</legend>  
              <label htmlFor="10" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="4" id="13" value="-10"/>
                Sí
              </label>
              <label htmlFor="11" className="horoscope__label">
                <input onChange={this.sendValueToConstructor} type="radio" className="horoscope__input" name="4" id="14" value="0"/>
                No.
              </label>
            </fieldset>
          <button onClick={this.getResultHoroscope} className="form__button" type="submit">click</button>
          {this.state.alertMessage ? <p className='form__alert-message'>Chato, ¡rellena todos los campos!</p> : ''}
        </form>
        { this.state.modalEmoji ?
          <div className='horoscope__modal--container'>
            <div className='horoscope__modal--content'>
            <i className="fas fa-times tea__close" onClick={this.closeEmoji}></i>
              <img className='horoscope__modal--emoji' src={this.showEmoji(horoscope)} alt='your emoji'></img>
              { messageEmoji }
            </div>
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default Horoscope;