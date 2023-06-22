  import { Component } from 'react';
  import './App.css';
  import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';


class App extends Component {
  render() {
    const { countState, clicksCount, dispatch } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    };

    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatchAll()}>Incrementa 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementa 5</button>
        <h3>Número de clicks: {clicksCount}</h3>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCount: state.clicks,
});

export default connect(mapStateToProps)(App);
