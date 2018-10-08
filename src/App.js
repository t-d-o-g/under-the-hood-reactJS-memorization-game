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
    mountingScheme,
  };

  render() {
    const shuffledSchemes = shuffleArray(mountingScheme);
    return (
      <div className="App">
        <div className="page-header jumbotron fluid-jumbotron">
          <div className="container">
            <h1>Under-the-hood-ReactJS</h1>
            <h2>Memorization Game</h2>
          </div>
        </div>
        <Wrapper>
          {shuffledSchemes.map(scheme => {
            return <SchemeCard
              key={scheme.name}
              id={scheme.id}
              name={scheme.name}
              image={scheme.image}
            />
          })}
        </Wrapper>
        <footer className="navbar-fixed-bottom">2018</footer>
      </div>
    );
  }
}

export default App;
