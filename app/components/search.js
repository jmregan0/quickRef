import _ from 'lodash'
// import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

export default class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent() {this.setState({ isLoading: false, results: [], value: '' })}

  handleResultSelect(e, { result }) { this.setState({ value: result.title })}

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        // results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchResearch } from '../reducers/sources.jsx'


// class Search extends React.Component {
//     constructor(props){
//       super(props)

//       this.state = {
//         userInput: '',
//         resources: props.resources,
//         counter: 1
//       }

//       this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//       this.setState({
//         userInput: event.target.value
//       })
//     }

//     render(){

//       return (
//         <div>
//           <h1>MVP! MVP!</h1>
//           <p>search stuff here</p>
//           <input
//             placeholder="type something"
//             onChange={ (event) => { event.preventDefault(); this.handleChange(event) }}
//            />
//           <button onClick={ () => this.props.getTheStuff(this.state.userInput)}>find me stuff</button>
//         </div>
//         )
//     }
//   }

//   const mapState = (state) => {
//     return {
//       resources: state.resources
//     }
//   }

//   const mapDispatch = (dispatch) => {
//     return {
//       getTheStuff: (topics) => dispatch(fetchResearch(topics))
//     }
//   }

//   export default connect(mapState, mapDispatch)(Search)
