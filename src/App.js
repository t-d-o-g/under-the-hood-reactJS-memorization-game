import React, { Component } from 'react';
import SchemeCard from './components/SchemeCard';
import ScoreCard from './components/ScoreCard';
import Wrapper from './components/Wrapper';
import mountingScheme from './mounting-scheme.json';


// from http://monkeyraptor.johanpaul.net/2016/09/javascript-check-if-array-elements.html
function checkOrderedArrElm(a, b) {
  // --------------------------------------------
  // a is the array input to be tested.
  // --------------------------------------------
  // b is optional.
  // Undefined b (or other value besides 1) for ascending sequence.
  // b === 1 for descending sequence test.
  // --------------------------------------------
  var m = 0; // counter for loop.
  var current_num;
  var next_num;
  var result = a;
  var test;
  if (a !== undefined) {
      if (a.constructor === Array) { // check if input a is array object.
          result = true;
          while (m < a.length) { // loop through array elements.
              current_num = a[m];
              next_num = a[m + 1];
              if (typeof current_num === "number" &&
                      typeof next_num === "number") {
                  if (b === 1) {
                      test = current_num <= next_num; // descending.
                  } else {
                      test = current_num >= next_num; // ascending.
                  }
                  if (test) { // found unordered/same elements.
                      result = false;
                      break;
                  }
              }
              m += 1;
          }
      }
  }
  return result;
}

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
    cards: shuffleArray(mountingScheme),
    score: 0
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
    let score = this.state.score;
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
        let ids = cards.map(a => a.id);
        console.log('ids', ids);

        let ascending = ids.filter((a, b, c) => {
          return Math.max.apply(Math, c.slice(0, b)) > a;
        })

        if (checkOrderedArrElm(ids)) {
          score++;
          score = `${score}, Scheme Completed!`;
        } else {
          score++;
        }
        this.setState({ cards: cards });
        this.setState({ score: score });
      } else {
        this.setState({ cards: shuffleArray(cards) });
        // this.setState({ score: 0 });
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
        <ScoreCard score={this.state.score}/>
        <Wrapper>
          {this.state.cards.map(card => {
            return <SchemeCard
              key={card.id}
              id={card.id}
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
