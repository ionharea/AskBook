import React, { Component } from 'react';
import * as firebase from 'firebase';
import Button from 'react-mdl/lib/Button';
import Textfield from 'react-mdl/lib/Textfield';
import { Card, CardText, CardActions, CardTitle } from 'react-mdl/lib/Card';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  componentWillMount() {
    firebase.database().ref('test').on('value', (snapshot) => {
      this.setState({ test: snapshot.val() });
    });
  }

  render() {
    return (
      <Card shadow={0} style={{width: '512px', margin: '100px auto 0'}}>
        <CardTitle style={{height: '176px', background: logo }}>AskBook: Coming Soon</CardTitle>
        <CardText>
          <Textfield ref={this.nameRef} label="Your name" required />
          <Textfield ref={this.emailRef} label="Email" type="email" required />
        </CardText>
        <CardActions border>
          <Button colored onClick={this.handleSubmit}>Submit</Button>
        </CardActions>
      </Card>
    );
  }

  handleSubmit() {
    const ref = firebase.database().ref('contacts');
    const record = ref.push();

    record.set({
      name: this.nameRef.current.inputRef.value,
      email: this.emailRef.current.inputRef.value
    });
  }
}

export default App;
