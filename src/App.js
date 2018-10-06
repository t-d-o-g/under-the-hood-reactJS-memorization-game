import React, { Component } from 'react';
import SchemeCard from './components/SchemeCard';
import Wrapper from './components/Wrapper';
import schemes from './schemes.json';

class App extends Component {
  state = {
    schemes
  };

  selectedScheme = id => {
    const schemes = this.state.schemes.filter(scheme => scheme.id !== id);
    this.setState({ schemes });
  };

  render() {
    return (
      // <div className="App">
      //   <div className="page-header jumbotron fluid-jumbotron text-center">
      //     <div className="container">
      //       <h1>Under-the-hood-ReactJS</h1>
      //       <h2>Memorization Game</h2>
      //     </div>
      //   </div>
        <Wrapper>
          {this.state.schemes.map(scheme => (
            <SchemeCard
              selectedScheme={this.selectedScheme}
              id={scheme.id}
              image={scheme.image}
            />
          ))}
        </Wrapper>
      // </div>
    );
  }
}

export default App;
