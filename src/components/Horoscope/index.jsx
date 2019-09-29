import React from 'react';
import './Horoscope.scss';

class Horoscope extends React.Component {
  constructor(props) {
    super(props);
    this.data1 = 0;
    this.data2 = 0;
    this.data3 = 0;
    this.data4 = 0

    this.sendValueToConstructor1 = this.sendValueToConstructor1.bind(this);
    this.sendValueToConstructor2 = this.sendValueToConstructor2.bind(this);
    this.sendValueToConstructor3 = this.sendValueToConstructor3.bind(this);
    this.sendValueToConstructor4 = this.sendValueToConstructor4.bind(this);
    this.getResultHoroscope = this.getResultHoroscope.bind(this);

  }

  getResultHoroscope(event) {
    event.preventDefault();
    if(this.data1 !== 0 || this.data2 !== 0 || this.data3 !== 0 || this.data4 !== 0) {
      const result = this.data1 + this.data2 + this.data3 + this.data4;
      this.props.getHoroscope(result);
    }
  }


  sendValueToConstructor1(event) {
    const radioValue = event.currentTarget.value;
    this.data1 = parseInt(radioValue);
  }
  sendValueToConstructor2(event) {
    const radioValue = event.currentTarget.value;
    this.data2 = parseInt(radioValue);
  }
  sendValueToConstructor3(event) {
    const radioValue = event.currentTarget.value;
    this.data3 = parseInt(radioValue);
  }
  sendValueToConstructor4(event) {
    const radioValue = event.currentTarget.value;
    this.data4 = parseInt(radioValue);
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

  render() {

const { horoscope } = this.props;

    return(
      <div className="horoscope">

        <form action="" className="horoscope__form">
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend">¿Qué día crees que es hoy?</legend>
              <label htmlFor="1" className="horoscope__label">
                <input onChange={this.sendValueToConstructor1} type="radio" className="horoscope__input" name="1" id="1" value="2"/> 
                ¿Hoy es viernes? ¡No puede ser!
              </label>
              <label htmlFor="2" className="horoscope__label">
                <input onChange={this.sendValueToConstructor1} type="radio" className="horoscope__input" name="1" id="2" value="3"/> 
                Hoy es martes, seguro.
              </label>
              <label htmlFor="3" className="horoscope__label">
                <input onChange={this.sendValueToConstructor1} type="radio" className="horoscope__input" name="1" id="3" value="1"/> 
                Domingo, no puedo desayunar en el bar de abajo.
              </label>
          </fieldset>
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend">¿Qué te gustaría desayunar hoy?</legend>
              <label htmlFor="4" className="horoscope__label">
                <input onChange={this.sendValueToConstructor2} type="radio" className="horoscope__input" name="2" id="5" value="3"/>
                Un té rico.
              </label>
              <label htmlFor="5" className="horoscope__label">
                <input onChange={this.sendValueToConstructor2} type="radio" className="horoscope__input" name="2" id="6" value="2"/>
                Una Alhambra fresquita.
              </label>
              <label htmlFor="6" className="horoscope__label">
                <input onChange={this.sendValueToConstructor2} type="radio" className="horoscope__input" name="2" id="7" value="1"/>
                Un Jack Daniels.
              </label>
          </fieldset>
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend">¿Cuántas horas de siesta te hacen falta hoy?</legend>
              <label htmlFor="7" className="horoscope__label">
                <input onChange={this.sendValueToConstructor3} type="radio" className="horoscope__input" name="3" id="9" value="1"/>
                Nunca son suficientes.
              </label>
              <label htmlFor="8" className="horoscope__label">
                <input onChange={this.sendValueToConstructor3} type="radio" className="horoscope__input" name="3" id="10" value="3"/>
                Voy a cerrar los ojos cinco minuticos.
              </label>
              <label htmlFor="9" className="horoscope__label">
                <input onChange={this.sendValueToConstructor3} type="radio" className="horoscope__input" name="3" id="11" value="2"/>
                Hasta que se mueva Bonaparty.
              </label>
          </fieldset>
          <fieldset className="horoscope__form--fieldset">
            <legend className="horoscope__form--legend"><em>Bonus</em> ¿Estás esperando un pedido de Seur?</legend>  
              <label htmlFor="10" className="horoscope__label">
                <input onChange={this.sendValueToConstructor4} type="radio" className="horoscope__input" name="4" id="13" value="-10"/>
                Sí
              </label>
              <label htmlFor="11" className="horoscope__label">
                <input onChange={this.sendValueToConstructor4} type="radio" className="horoscope__input" name="4" id="14" value="0"/>
                No.
              </label>
            </fieldset>
          <button onClick={this.getResultHoroscope} className="form__button" type="submit">click</button>
        </form>
        { horoscope !== '' ?
          <div className='horoscope__modal--container'>
            <div className='horoscope__modal--content'>
              <img className='horoscope__modal--emoji' src={this.showEmoji(horoscope)} alt='your emoji'></img>
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