import React from 'react'
import Footer from './footer'
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios'
import List from './list'


class Search extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          tags: [],
          research: []
      };
      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleDrag = this.handleDrag.bind(this);
      this.submitQuery = this.submitQuery.bind(this);
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

  submitQuery() {
    axios.post('api/research', {
      tags: this.state.tags
    })
    .then(res => {
      console.log(res)
      this.setState({
        research: res.data
      })
    })
  }

  render() {
      const { tags, suggestions, research } = this.state;
      return (
          <div>
              <br />
              <ReactTags tags={tags}
                  suggestions={suggestions}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                  handleDrag={this.handleDrag} />
             <br />

              <button onClick={this.submitQuery}>Button</button>

              {
                this.state.research.length ?
                <List research={research} />
                :
                <div>
                    <br />
                    <h1>Get Started. Add some tags above!</h1>
                    <br />
                </div>
              }
              <Footer />
          </div>
      )
  }
}

export default Search
