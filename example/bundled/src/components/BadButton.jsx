import React from 'react';
import bugsnagClient from '../index.js';

class BadButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { doARenderError: false }
  }

  throwError () {
    try {
      // potentially buggy code goes here
      // for this example, we're just throwing an error explicitly, but you do not need this syntax in your try clause.
      throw new Error('Bad Thing!')
    } catch (e) {
      console.log('a handled error was sent to our dashboard.')
      bugsnagClient.notify(e, {
        context: 'Don’t worry - I handled it.'
      })
    }
  }

  triggerRenderError () {
    this.setState({ doARenderError: true })
  }

  render () {
    return (
      <div>
        <p>
          <button onClick={this.throwError}>Handled error</button>
        </p>
        <p>
          <button onClick={() => this.triggerRenderError()}>Trigger a render error</button>
          {this.state.doARenderError
            ? <span>{ this.state.doARenderError.non.existent.property }</span>
            : null
          }
        </p>
      </div>
    )
  }
}

export default BadButton
