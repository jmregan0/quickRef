import React from 'react'
import {
  Container, Divider, Header, List, Segment
} from 'semantic-ui-react'


const Footer = (props) => {

  const history = props.history
  return (
    <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container textAlign='center'>
            <Header inverted as='h4' content='Contact info below' />
            <Divider inverted section />
            {/* <Image src='/logo.png' centered size='mini' /> */}
            <List horizontal inverted divided link>
              <List.Item as='a' href='https://github.com/jmregan0/quickRef'>Github</List.Item>
              <List.Item as='a'
               onClick={ () => { history.push('/contact') } }
               >
               Contact Us
              </List.Item>
              <List.Item as='a' href='https://www.crossref.org/truths/'>Crossref</List.Item>
            </List>
          </Container>
        </Segment>
    )
}

export default Footer
