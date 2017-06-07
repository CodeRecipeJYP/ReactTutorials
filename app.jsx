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
var nextId = 4;

var Stopwatch = React.createClass({
  getInitialState: function() {
    return {
      running: false,
    }
  },

  onStart: function() {
    this.setState({ running: true });
  },

  onStop: function() {
    this.setState({ running: false });
  },

  onReset: function() {

  },

  render: function() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">0</div>
        { this.state.running ?
          <button onClick={this.onStop}>Stop</button> :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
});

var AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  onSubmit: function(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name);
  },

  getInitialState: function() {
    return {
      name: "",
    };
  },

  onNameChange: function(e) {
    // console.log('onNameChange', e.target.value);
    this.setState({name: e.target.value});
  },

  render: function() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    )
  }
});

function Stats(props) {
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce(function(total, player){
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
};

function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
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
      <button className="counter-action decrement" onClick={function() {props.onChange(-1);}}>
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      {/*<button className="counter-action increment" onClick={this.incrementScore.bind(this)}>*/}
      <button className="counter-action increment" onClick={function() {props.onChange(1);}}>
      {/*<button className="counter-action increment" onClick={this.incrementScore}>*/}
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>✖</a>
        {props.name}
      </div>
      {/*<Counter initialScore={props.score}/>*/}
      <Counter score={props.score} onChange={props.onScoreChange}/>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    // players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
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

  getInitialState: function() {
    return {
      players: this.props.initialPlayers,
    };
  },

  onPlayerAdd: function(name) {
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  },

  onScoreChange: function(index, delta) {
    // console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
    // console.log('remove', index);
  },

  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
              <Player
                onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
                onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id}/>
            );
          }.bind(this))}

          <AddPlayerForm onAdd={this.onPlayerAdd} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));