import React from 'react'
import { withRouter } from 'react-router'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const EmailConfirm = (props) => {
  return (
  <Modal open={true} basic size='small'>
    <Header icon='checkmark' content='Thank You!' />
    <Modal.Content>
      <p>Thanks for taking the time to give feedback.</p>
      <p>If you left comments about how we can improve, we will try to incorporate your ideas as soon as possible!</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        color='green'
        inverted
        onClick={ () => {
          props.history.push('/')
        }}
        >
        <Icon name='checkmark' /> Ok
      </Button>
    </Modal.Actions>
  </Modal>
  )
}

export default withRouter(EmailConfirm)
