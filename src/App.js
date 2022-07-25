import React, {Component} from 'react';
import './App.css';
import MyDiv from './MyDiv';

const names = [
  'Nancy',
  'Linda',
  'Andrew',
  'Helen'
]


class App extends Component {

  handleClick(){
    console.log('I have been clicked')
    // if a component has local state to it, a child must not mutate the state that it doesn't own
    // so you must pass down function from where state is so that child can use function to change the state
    // you don't get to change state in other components if you don't own it

  }

  render(){
    const lis = names.map((name,i) => <MyDiv name={name} key={i} handleOnClick={this.handleClick} />)
    console.log(lis)
    return (
      <div className="App">
        <h2>Vincent's App</h2>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}

  


export default App;
