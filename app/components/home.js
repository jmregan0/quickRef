import React from 'react';
import {
  Container, Header, Button, Menu, Segment, Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import { TopNav } from './index'

export default class Home extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      menuFixed: false,
      overlayFixed: false,
    }

  }

  render () {

    return (
      <div>
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <TopNav invert={true} history={this.props.history} />

            <Container text>
              <Header
                as='h1'
                content='QuickSource'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Fast references for your research'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button
                primary
                size='huge'
                onClick = {() => this.props.history.push('search')}
                >
                Get Started
                <Icon name='right arrow' />
              </Button>

            </Container>
          </Segment>
        <div id="home-container">
          {/* <Container text style={{ marginTop: '2em' }}>
            <Header as='h1'>What is QuickSource?</Header>
          </Container> */}

          <Container text>
            <p style={{marginTop: '2em'}}>
              This is a tool to help in research. Googling resources is great. But sometimes that can be many clicks away
              from narrowing into the actual published research you need to add to that bibliography. This tool is designed
              to get right at the data you need.
            </p>
            <p>
              This web application leverages the CrossRef database which was made by some awesome people you should definitely
              check out <a href="https://www.youtube.com/watch?v=L0GOa859dZk">here</a>. In a nutshell they have constructed a
              database that references academic research by Digital Object Identifiers (DOI tags). These tags follow academic
              writing wherever it travels around the web. The internet is awesome, but one thing that is not so awesome is how
              links can expire and instead of getting the web page you expected, you sometimes get that notorious 404 - Not Found.
            </p>
            <p>
              The cool thing is that you can search multiple topics at once and find research that matches one or many of your topics.
            </p>
          </Container>

          {/* <Button id="home-search-btn" primary onClick = {() => this.props.history.push('search')}>Get Started</Button> */}
        </div>
        <Footer history={this.props.history} />
      </div>
    )
  }
}

