import React from 'react';
import card from './deuce_of_clubs.png';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
    <section id='board'>
      <div className='card'>
        <img src={card} alt="card" />
      </div>
      <div className='card'>hello</div>
      <div className='card'>hello</div>
      <div className='card'>hello</div>
      <div className='card'>hello</div>
    </section>
    );
  }
}

export default Board;
