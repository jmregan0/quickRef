import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchResearch } from '../reducers/sources.jsx'

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: '',
      sources: props.resources
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log('event.target.value', event.target.value)
    this.setState({
      userInput: event.target.value
    })
  }

  render(){
    return (
      <div>
        <h1>MVP! MVP!</h1>
        <p>search stuff here</p>
        <input
          placeholder="type something"
          onChange={ (event) => this.handleChange(event) }
         />

        {/* {
          sources.map((source) => {
            return (
              <div key={'peewee'}>{source}</div>
            )
          })
        } */}
        <button onClick={ () => this.props.getTheStuff(this.state.userInput)}>find me stuff</button>

      </div>
      )
  }
}

const mapState = (state) => {
  return {
    resources: state.sources
  }
}

const mapDispatch = (dispatch) => {
  return {
    getTheStuff: (topics) => dispatch(fetchResearch(topics))
  }
}

export default connect(mapState, mapDispatch)(Home)
