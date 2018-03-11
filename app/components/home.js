import React from 'react';
import {
  Container, Header, Button, Menu, Segment, Icon
} from 'semantic-ui-react'
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
    console.log('process.env variables ---> ', process.env.userId)

    return (
      <div>
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', backgroundSize: '100vw', backgroundImage: 'url("images/library.jpg")' }}
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

          <Container text>
            <p style={{marginTop: '2em'}}>
              This is a search engine to help you find solid academic sources. It is specially designed to return only published research relevant to your keywords so you don't have to go clicking through pages of bad results to finally get what you need. Googling research is great, but this tool is designed to cut through all the irrelevant data and return only what you need to complete your research.
            </p>
            <p>
              This is a tool that was designed to be minimal and simple. Context switching is something that can kill your productivity while working on a project. This is meant to get you the research you need without any distracting advertisements or irrelevant search results. Get to the research you need in one click.
            </p>
          </Container>
        </div>
        <Footer history={this.props.history} />
      </div>
    )
  }
}

