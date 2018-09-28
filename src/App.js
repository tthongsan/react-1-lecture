import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      picture: 'https://http.cat/429',
      friends: [{}]
    };
    this.updateName = this.updateName.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updateName(event) {
    //enter input and the 'name' state will be set to event.target.value
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    })
  }

  updatePicture(event) {
    //enter input and the 'picture' state will be set to event.target.value
    console.log(event.target.value)
    this.setState({
      picture: event.target.value
    })
  }

  addFriend() {
    const newFriend = { name: this.state.name, picture: this.state.picture }
    //this.state.friends.push()
    // new to make a copy of friends, cause we cant mutate the state
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({ friends: friendsCopy })
    // after each onclick it will push friendsCopy onto friends array 
    this.setState({name: '', picture: ''})
    // ^^ will erase the previous input
  }

  

  // updateName(event){
  //   () => this.setState({name: event.target.value})
  // }

  render() {
    // must define variable before using it. can also destructure
    // const name = this.state.name;
    // const picture = this.state.picture;
    const { name, picture, friends } = this.state;
    console.log('this.state', this.state)
    return (
      <div>
        <div>
          Name: <input value={name} onChange={e => this.setState({name: e.target.value})} />
          {name}
        </div>
        <div>
          Picture URL: <input value={picture} onChange={this.updatePicture}/>
          {picture}
        </div>
        <button onClick={this.addFriend}>Add friend</button>
        <div>Friends: {friends.map(friend => {
          return (
          <div>
            Name: {friend.name}{' '}
            Picture: <img src={friend.picture} />
          </div>
          )
        })}</div>
      </div>
    );
  }
}

export default App;

