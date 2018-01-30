import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Footer, TopNav } from './index'

class Contact extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  handleChange(e, { value }) {
    this.setState({value})
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
          <Form.Input fluid label='Name' placeholder='Your name here' />
          <Form.Input fluid label='Email' placeholder='Email we can respond to' />
        </Form.Group>
        <Form.TextArea label='Message' placeholder='Type your message here...' />
        <Form.Button primary>Submit</Form.Button>
      </Form>
      </div>
      <Footer />
    </div>
    )
  }

}

export default Contact
