import React from 'react'
import Footer from './footer'
import { WithContext as ReactTags } from 'react-tag-input';
import List from './list'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { fetchResearch } from '../reducers/sources.jsx'
import { TopNav } from './index'


class Search extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          tags: []
      };

      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleDrag = this.handleDrag.bind(this);
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

  render() {
      const { tags, suggestions } = this.state;
      return (
        <div>
          <TopNav invert={false} history={this.props.history} />
          <div id="search-container">
            {
            this.props.research.sources.length ?
            <List />
            :
            (
            <div id="tag-container">
                <br />
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
                <br />

                <Button
                primary
                id="find-research-btn"
                onClick={ () => {this.props.fetchResearch(this.state.tags)}}
                disabled={!this.state.tags.length}>
                Search
                </Button>
            </div>
            )
            }
          </div>
         <Footer search={!this.props.research.sources.length} history={this.props.history} />
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
