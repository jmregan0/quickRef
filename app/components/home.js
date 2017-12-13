import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import fetchResearch from '../reducers/sources'

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: ''
    }
  }


  render(){
    return (
      <div>
        <h1>MVP! MVP!</h1>
        <p>search stuff here</p>
        <input
          placeholder="type something"
          onChange={(event) => this.setState({userInput: event.target.value}) }
         />
        {/* {
          sources.map((source) => {
            return (
              <div key={'peewee'}>{source}</div>
            )
          })
        } */}
        <button>find me stuff</button>
        {/* <Link to="/about">About</Link> */}
      </div>
      )
  }
}

const mapState = (state) => {
  return {
    resources: state.sources
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     fetchResearch
//   }
// }

export default connect(mapState)(Home)
