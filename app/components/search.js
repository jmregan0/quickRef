import React from 'react'
import Footer from './footer'
import { WithContext as ReactTags } from 'react-tag-input';
import List from './list'
import { connect } from 'react-redux'
import { fetchResearch } from '../reducers/sources.jsx'


class Search extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          tags: []
      };

      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleDrag = this.handleDrag.bind(this);
    //   this.submitQuery = this.submitQuery.bind(this);
  }


  handleDelete(i) {
      let tags = this.state.tags;
      tags.splice(i, 1);
      this.setState({tags: tags});
  }

  handleAddition(tag) {
      let tags = this.state.tags;
      tags.push({
          id: tags.length + 1,
          text: tag
      });
      this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
      let tags = this.state.tags;

      // mutate array
      tags.splice(currPos, 1);
      tags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: tags });
  }

//   submitQuery() {
//     axios.post('api/research', {
//       tags: this.state.tags
//     })
//     .then(res => {
//       console.log(res)
//       this.setState({
//         research: res.data
//       })
//     })
//   }

  render() {
      const { tags, suggestions } = this.state;
      return (
          <div>
              {
               this.props.research.sources.length ?
               <List />
               :
               <div>
                <br />
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
                <br />

                <button onClick={ () => {this.props.fetchResearch(this.state.tags)}} disabled={!this.state.tags.length}>Button</button>

                    <div>
                        <br />
                        <h1>Get Started. Add some tags above!</h1>
                        <br />
                    </div>
                </div>
              }

              <Footer />
          </div>
      )
  }
}

const mapState = (state) => {
    return {
      research: state.research
    }
  }

const mapDispatch = (dispatch) => {
    return {
      fetchResearch: (tags) => { dispatch(fetchResearch(tags)) }
    }
}


export default connect(mapState, mapDispatch)(Search)
