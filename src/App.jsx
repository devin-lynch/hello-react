import React, { Component } from 'react'
import Hello from './Hello'
import Quote from './Quote'

// define our jsx component
class App extends Component {
  // we need to have a 'render' method that returns jsx
  render() {
    return (
      <div>
        <h1>Hello multiline return</h1>

        <p>hello I am a p</p>

        {/* rendering component as a void element */}
        <Hello 
          // define key/value pairs of props 
          // to drill into the child component
          name={'April'}
          position={'Senior IA'}
          skills={['python', 'react', 'javascript']}
        />
        <Hello
          name={'Gabe'}
          position={'IA'}
          skills={['react', 'javascript', 'django']}
        />

        <Quote />
      </div>
    )
  }
}

// don't forget to export the component!
export default App