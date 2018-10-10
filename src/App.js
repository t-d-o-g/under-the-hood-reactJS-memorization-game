import React, { Component } from 'react';
import SchemeCard from './components/SchemeCard';
import Wrapper from './components/Wrapper';
import mountingScheme from './mounting-scheme.json';


function shuffleArray(arr) {
  let currentIndex = arr.length, tempVal, randIndex;

  while(0 !== currentIndex) {
    randIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempVal = arr[currentIndex];
    arr[currentIndex] = arr[randIndex];
    arr[randIndex] = tempVal;
  }

  return arr;
};

class App extends Component {
  state = {
    cards: shuffleArray(mountingScheme)
  };

  handleDragStart = data => evt => {
    let fromCard = JSON.stringify({ id: data.id });
    evt.dataTransfer.setData('dragContent', fromCard);
  }

  handleDragOver = data => evt => {
    evt.preventDefault();

    return false;
  }
 
  handleDrop = data => evt => {
    evt.preventDefault();

    let fromCard = JSON.parse(evt.dataTransfer.getData('dragContent'));
    let toCard = { id: data.id };

    this.swapCards(fromCard, toCard);
    return false;
  }

  swapCards = (fromCard, toCard) => {
    let cards = this.state.cards.slice();
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === fromCard.id) {
        fromIndex = i;
      }
      if (cards[i].id === toCard.id) {
        toIndex = i;
      }
    }

    if (fromIndex !== -1 && toIndex !== -1) {
      let { fromId, ...fromRest } = cards[fromIndex];
      let { toId, ...toRest } = cards[toIndex];
      
      cards[fromIndex] = { id: fromCard.id, ...toRest };
      cards[toIndex] = { id: toCard.id, ...fromRest };

      if (fromCard.id === toIndex) {
        this.setState({ cards: cards });
      } else {
        this.setState({ cards: shuffleArray(cards) });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="page-header jumbotron fluid-jumbotron">
          <div className="container">
            <h1>Under-the-hood-ReactJS</h1>
            <h2>Memorization Game</h2>
          </div>
        </div>
        <Wrapper>
          {this.state.cards.map(card => {
            return <SchemeCard
              key={card.id}
              id={card.id}
              index={card.index}
              name={card.name}
              image={card.image}
              draggable={true}
              onDragStart={this.handleDragStart}
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
            />
          })}
        </Wrapper>
        <footer className="navbar-fixed-bottom">2018</footer>
      </div>
    );
  }
}

export default App;
