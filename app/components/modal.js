import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalComponent extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  show(dimmer) {
    return () => this.setState({ dimmer, open: true })
  }

  close() {
    return () => this.setState({ open: false })
  }

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button
          size='small'
          onClick={this.show('blurring')}>
          {
            this.props.item.title
          }
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close()}>
          <Modal.Header>{this.props.item.type}</Modal.Header>
          <Modal.Content image scrolling>
            <Image
             wrapped size='medium'
             src={'images/book.png'} />
            <Modal.Description>
              <Header>{this.props.item.title}</Header>
              {
                this.props.item.abstract ?
                <p>{this.props.item.abstract}</p>
                :
                'placeholder'
              }
            </Modal.Description>
            <a href={this.props.item.URL}>view resource</a>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close()}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close()} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalComponent
