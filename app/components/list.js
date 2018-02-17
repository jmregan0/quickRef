import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Select, Input, Checkbox, Table, Modal, Header, Icon } from 'semantic-ui-react'
import { updateSelected } from '../reducers/sources.jsx'
import { ModalComponent } from './index'
import axios from 'axios'


class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        { key: 'all', text: 'All', value: 'all' },
        { key: 'selected', text: 'Selected', value: 'selected' }
      ],
      userEmail: '',
      dropdown: 'selected',
      showPopup: true
    }
  }

  handleClick(index) {
    this.props.research[index].isSelected === true ?
    this.props.updateSelection(index, false) :
    this.props.updateSelection(index, true)
  }


  sendMeStuff(address) {

    let selections = this.props.research.filter(element => {
      return element.isSelected
    })

    if (selections.length < 1) {
      console.log('make some selections first')
    } else {
      return axios.post('api/email', {
        sendTo: address,
        research: selections
      })
      .then(result => {console.log(result)})
    }
  }

  sendAll(address) {

    let selections = this.props.research;

    return axios.post('api/email', {
      sendTo: address,
      research: selections
    })
    .then(result => {
      console.log(result)
    })
  }

  sendSources(whichOnes) {
    if (whichOnes == 'all'){
      this.sendAll(this.state.userEmail)
    } else {
      this.sendMeStuff(this.state.userEmail)
    }
  }


  render () {

    return (
      <div>
      {
        this.state.showPopup ?

        <Modal open={true} basic size='small'>
          <Header icon='checkmark' content='Success!' />
          <Modal.Content>
            <p>Your research has been retrieved!</p>
            <Icon name='toggle on' />
            <p>Use the sliders on the left to select sources you want to save, and then use the form at the bottom to send them to your email address</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color='green'
              inverted
              onClick={ () => {this.setState({showPopup: false})} }>
              <Icon name='checkmark' /> Ok!
            </Button>
          </Modal.Actions>
        </Modal>
        :
        ''
      }

      <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell>Select</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell>Data Type</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Collection Name</Table.HeaderCell>
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
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{element.type}</Table.Cell>
                <Table.Cell>
                  {
                  <ModalComponent item={element} />
                  }
                </Table.Cell>
                <Table.Cell>{element['container-title']}</Table.Cell>

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

            <Input
             onChange={ (e) => {this.setState({userEmail: e.target.value})} }
             type='text'
             placeholder='your email'
             action>

              <input />

              <Select
               compact options={this.state.options} defaultValue='selected'
               onChange={ (e, data) => { this.setState({dropdown: data.value})} }
               />

              <Button
               primary type='submit'
               onClick={ () => { this.sendSources(this.state.dropdown) }}>Send
              </Button>

            </Input>

          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    </div>
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
