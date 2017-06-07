var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andrew Chalkley",
    score: 33,
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42,
    id: 3,
  },
];

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

// var Counter = React.createClass({
//   propTypes: {
//     initialScore: React.PropTypes.number.isRequired,
//   },
//
//   getInitialState: function() {
//     return {
//       score: this.props.initialScore,
//       // score: 0,
//     };
//   },
//
//   incrementScore: function() {
//   // incrementScore: function(e) {
//   //   this.state.score += 1;
//     this.setState({
//       score: (this.state.score + 1),
//     });
//     // console.log('incrementScore', e);
//   },
//
//   decrementScore: function() {
//     this.setState({
//       score: (this.state.score - 1),
//     });
//   },
//
//   render: function() {
//
//   }
// });

function Counter(props) {
  return (
    <div className="counter">
      {/*<button className="counter-action decrement" onClick={this.decrementScore}>*/}
      <button className="counter-action decrement">
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      {/*<button className="counter-action increment" onClick={this.incrementScore.bind(this)}>*/}
      <button className="counter-action increment">
      {/*<button className="counter-action increment" onClick={this.incrementScore}>*/}
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      {/*<Counter initialScore={props.score}/>*/}
      <Counter score={props.score}/>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    // players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: "Scoreboard",
    };
  },

  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>

        <div className="players">
          {this.props.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.id}/>
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));