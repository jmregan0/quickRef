import React from 'react';
import {
  Container, Divider, Grid, Header, Image, List, Segment,
} from 'semantic-ui-react'
import Search from './search'


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
        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1'>QuickRef Research Tool</Header>
        </Container>


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

        <Search />

        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container textAlign='center'>
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

