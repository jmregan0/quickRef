import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { updateSelected } from '../reducers/sources.jsx'


class List extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.updateSelected = props.updateSelected;
  }

  handleClick(index) {
    this.props.research[index].isSelected === true ?
    this.updateSelected(index, false) :
    this.updateSelected(index, true)
  }

  render () {

    return (

      <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Data Type</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          this.props.research.map((element, index) => {
            return (
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox checked={element.isSelected} slider onClick={ () => { this.handleClick(index) } } />
                </Table.Cell>
                <Table.Cell>{element.type}</Table.Cell>
                <Table.Cell>
                  {
                  element.title[0].length > 80 ?
                  element.title[0].slice(0, 80) + '...'
                  :
                  element.title
                  }
                </Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
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
            <Button size='small' onClick={this.handleClick}>Approve</Button>
            <Button disabled size='small'>Approve All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
  }
}

// const mapState = (state) => {
//   return {}
// }

const mapDispatch = (dispatch) => {
  return {
    updateSelected: (index, bool) => { dispatch(updateSelected(index, bool))}
  }
}

export default connect(null, mapDispatch)(List)
