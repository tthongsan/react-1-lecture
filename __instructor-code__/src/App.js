import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'sexyback',
      pictureUrl: 'http://http.cat/506',
      friends: [{ name: 'T$', pictureUrl: 'http://http.cat/404' }]
    };
    this.updateName = this.updateName.bind(this);
    this.updatePictureUrl = this.updatePictureUrl.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updateName(event) {
    // console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
    // this.state.name = event.target.value;
  }

  updatePictureUrl(event) {
    this.setState({
      pictureUrl: event.target.value
    })
  }

  addFriend() {
    const newFriend = { name: this.state.name, pictureUrl: this.state.pictureUrl };
    // DO NOT MUTATE STATE DIRECTLY!!!
    // this.state.friends.push();
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({ friends: friendsCopy });
    this.clearNames();
  }

  clearNames(event) {
    // this.state.name = 'input name';
    this.setState({ name: 'input name' })
  }

  render() {
    // const name = this.state.name;
    // const pictureUrl = this.state.pictureUrl;
    const { name, pictureUrl, friends } = this.state;
    console.log('this.state', this.state);

    return (
      <div>
        <div>
          Name: <input value={name} onChange={e => this.setState({ name: e.target.value })} />
          {name}
        </div>
        <div>
          Picture URL: <input
            value={pictureUrl}
            onChange={e => this.setState({ pictureUrl: e.target.value })}
          />
          {pictureUrl}
        </div>
        <button onClick={this.addFriend}>Add friend</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}{' '}
            Picture: <img src={friend.pictureUrl} />
          </div>
        })}</div>
      </div>
    );
  }
}

export default App;
