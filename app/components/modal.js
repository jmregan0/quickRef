import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalComponent extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);

    this.types = {
      'book-chapter': 'images/book.png',
      'monograph': 'images/paper.png',
      'journal-article': 'images/report.png',
      'book': 'images/book.png',
      'reference-entry': 'images/woman_reading.png'
    }
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
          <Modal.Header>{this.props.item.type || 'images/airplane.png'}</Modal.Header>
          <Modal.Content image scrolling>
            <Image
             wrapped size='medium'
             src={this.types[this.props.item.type]} />
            <Modal.Description>
              <Header>{this.props.item.title}</Header>
              {
                this.props.item.abstract ?
                <p>{this.props.item.abstract.slice(0, 500) + '...'}</p>
                :
                ''
              }
              <p>Publisher: {this.props.item.publisher}</p>
              <a href={this.props.item.URL}>Link to Resource</a>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close()}>
              Exit
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalComponent
