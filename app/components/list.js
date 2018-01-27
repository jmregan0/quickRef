import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { updateSelected } from '../reducers/sources.jsx'
import { Modal } from './index'
import axios from 'axios'


class List extends Component {
  constructor(props) {
    super(props)

    // this.handleClick = this.handleClick.bind(this)
    // this.updateSelection = props.updateSelection;
  }

  handleClick(index) {
    this.props.research[index].isSelected === true ?
    this.props.updateSelection(index, false) :
    this.props.updateSelection(index, true)
  }

  sendMeStuff() {
    let selections = this.props.research.filter(element => {
      return element.isSelected
    })
    if (selections.length < 1) {
      console.log('make some selections first')
    } else {
      console.log(selections);
    }
  }

  sendAll(address) {
    let selections = this.props.research;

    return axios.post('api/email', {
      sendTo: address
    })
    .then(result => {
      console.log(result)
    })
    // console.log(selections)
  }

  render () {

    return (

      <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Data Type</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Collection Name</Table.HeaderCell>
          {/* <Table.HeaderCell>Author</Table.HeaderCell> */}
          <Table.HeaderCell>Publisher</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          this.props.research.map((element, index) => {
            return (
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox
                   defaultChecked={false}
                   slider
                   onChange={ () => {this.handleClick(index)} } />
                </Table.Cell>
                <Table.Cell>{element.type}</Table.Cell>
                <Table.Cell>
                  {
                  // element.title[0].length > 80 ?
                  // element.title[0].slice(0, 80) + '...'
                  // :
                  // element.title
                  <Modal item={element} />
                  }
                </Table.Cell>
                <Table.Cell>{element['container-title']}</Table.Cell>
                {/* <Table.Cell>
                {
                  element.author ?
                  element.author[0].given
                  + ' ' +
                  element.author[0].family
                  :
                  'not listed'
                }
                </Table.Cell> */}
                <Table.Cell>{element.publisher}</Table.Cell>
              </Table.Row>
            )
          })
        }
        </Table.Body>

        <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button floated='right' icon labelPosition='left' primary size='small'>
              <Icon name='user' /> Add User
            </Button>
            <Button
             size='small'
             onClick={ () => { this.sendMeStuff() } }>
             Email Selections
            </Button>
            <Button
             size='small'
             onClick={ () => { this.sendAll() } }>
             Email All
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
  }
}

const mapState = (state) => {
  return {
    research: state.research.sources
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateSelection: (index, bool) => { dispatch(updateSelected(index, bool))}
  }
}

export default connect(mapState, mapDispatch)(List)
