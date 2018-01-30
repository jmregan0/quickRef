import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Contact extends Component {
  constructor(props){
    super(props)

    this.state = {
      options: [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
      ]
    }
  }

  handleChange(e, { value }) {
    this.setState({value})
  }

  render (){
    return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
        <Form.Select fluid label='Gender' options={this.state.options} placeholder='Gender' />
      </Form.Group>
      {/* <Form.Group inline>
        <label>Size</label>
        <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
        <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
        <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
      </Form.Group> */}
      <Form.TextArea label='About' placeholder='Tell us more about you...' />
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Form.Button>Submit</Form.Button>
    </Form>
    )
  }

}

export default Contact
