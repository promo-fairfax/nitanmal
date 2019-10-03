import React from 'react';
import './Tea.scss';

class Tea extends React.Component {
  render() {
    const { handleTea } = this.props;
    return(
      <div className="tea">
        <div className="tea__background">
          <div className="tea__container">
            <i className="fas fa-times tea__close" onClick={handleTea}></i>
            <div className="tea__glass">
              <div className="tea__top"></div>
              <div className="tea__glass--inside">
                <div className="tea__liquid"></div>
                <div className="tea__liquid--top"></div>
              </div>
            </div>
            <div className="tea__pouring"></div>
            <div className="tea__bag--container">
              <div className="tea__bag">
                <div className="tea__bag--top"></div>
              </div>
            </div>
            <div className="tea__milk"></div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Tea;