import React, {Component} from 'react';
import './Home.scss';
import BeerBtn from '../BeerBtn';
import Chatbot from '../Chatbot/index';

class Home extends React.Component {
  render () {
    const { chatbotOpen, handleChatbot } = this.props; 
    return(
      <div className="home">
        <h1 className="home__title">Ni Tan Mal</h1>
        <div className={`home__chatbot ${chatbotOpen ? 'open' : 'closed'}`}>
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
          }
        </div>
        { btnBeer ? <BeerBtn onClickClose={ onClickClose } closeModal={ closeModal }/> : null }
        <div className='beer__btn' onClick={onClickBeer}><span className='beer__btn_text'>¿Cerveza?</span></div>
      </div>
    ) 
  }
}

export default Home;