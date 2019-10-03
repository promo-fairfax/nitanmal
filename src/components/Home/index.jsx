import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Home.scss";
import BeerBtn from "../BeerBtn";
import Chatbot from "../Chatbot/index";
import Tea from "../Tea/index";

class Home extends Component {
  ReactTypingEffectDemo = () => {
    return (
      <div className="typing-effect__container">
        <ReactTypingEffect
          className="typing-effect__dynamic-text"
          speed={50}
          eraseDelay={3000}
          staticText="KEEP CALM AND"
          text={[
            "¡venga!",
            "pues ni tan mal",
            "¿qué día es hoy?",
            "¡grupo favorito!",
            "¿quién está descansando?",
            "siempre es todas las anteriores... hasta que no es todas las anteriores",
            "los muertos no maquetan",
            "A CHOLONACO",
            "¡vamos a verlo funcionando!",
            "lo he puesto en andaluz",
            "¡esa NO es la actitud, para nada!",
            "¡a cholón!",
            "¿quién me ha robado el té?",
            "¡alumna favorita!",
            "lo he puesto mal",
            "lo puot peor"
          ]}
        />
      </div>
    );
  };

  render() {
    const {
      chatbotOpen,
      handleChatbot,
      btnBeer,
      onClickClose,
      closeModal,
      onClickBeer,
      handleTea,
      tea
    } = this.props;
    return (
      <div className="home">
        {this.ReactTypingEffectDemo()}
        <div className={`home__chatbot ${chatbotOpen ? 'open' : 'closed-cid'}`}>
          {chatbotOpen ? 
            <Chatbot handleChatbot={handleChatbot} />
           : 
            <div className="home__chatbot--closed" onClick={handleChatbot}>
              <div className="home__chatbot--closed-cid">
                <div className="cid__hood"></div>
                <div className="cid__helmet"></div>
                <div className="cid__nose"></div>
                <div className="cid__left-eye"></div>
                <div className="cid__right-eye"></div>
                <div className="cid__beard"></div>
                <div className="cid__mouth"></div>
              </div>
              <p className="home__chatbot--closed-text">Hola!</p>
            </div>
          )}
        </div>
          {tea ? <Tea handleTea={handleTea} /> : null}
        <div className='home__buttons--container'>
          {btnBeer ? (
            <BeerBtn onClickClose={onClickClose} closeModal={closeModal} />
          ) : null}
          <div className="beer__btn" onClick={onClickBeer}>
            ¿Cerveza?
          </div>
          <div className="home__tea--button" onClick={handleTea}>
            ¿Un té rico?
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
