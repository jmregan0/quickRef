import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Footer, TopNav, EmailConfirm } from './index'
import axios from 'axios'

class Contact extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      displayConfirmation: false
    }
  }

  sendMessage(info) {
    return axios.post('api/email/feedback', {
      info
    })
    .then(res => {
      if (res.status === 200){
        this.setState( {displayConfirmation: true} )
      }
      console.log(res)
    })
    .catch(err => { console.log(err)})
  }

  render (){
    return (
    <div>

      <TopNav invert={false} history={this.props.history} />

      <div id="header-container">
        <h1 id="contact-header">Thanks for leaving feedback!</h1>
      </div>

      <div id="contact-form-container">
      <Form>
        <Form.Group widths='equal'>

          <Form.Input
            fluid label='Name'
            placeholder='Your name here'
            onChange={ (e, data) => { this.setState({name: data.value}) } }
            />

          <Form.Input
            fluid label='Email'
            placeholder='Email we can respond to'
            onChange={ (e, data) => { this.setState({email: data.value}) } }
            />

        </Form.Group>

        <Form.TextArea
          label='Message'
          placeholder='Type your message here...'
          onChange={ (e, data) => { this.setState({message: data.value}) } }
          />

        <Form.Button
          primary
          onClick={ () => { this.sendMessage(this.state) } }
          >
          Submit
        </Form.Button>

      </Form>
      {
        this.state.displayConfirmation ?
        <EmailConfirm />
        :
        ''
      }
      </div>
      <Footer />
    </div>
    )
  }

}

export default Contact
