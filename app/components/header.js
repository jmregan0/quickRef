import React from 'react'
import { Container, Menu } from 'semantic-ui-react'


const TopNav = (props) => {

  const invert = props.invert;
  const location = props.history.location.pathname;

  return (

    invert === true ?

    <Container>
      <Menu inverted pointing secondary size='large' style={{borderStyle: 'none'}}>
        <Menu.Item as='a'
          active={location === '/'}
          onClick={ () => {props.history.push('/')} }>
          Home
        </Menu.Item>

        <Menu.Item as='a'
          active={location === '/search'}
          onClick={ () => {props.history.push('/search')} }>
          Search
        </Menu.Item>

        <Menu.Item as='a'
          active={location === '/contact'}
          onClick={ () => {props.history.push('/contact')} }>
          Contact
        </Menu.Item>

        {/* <Menu.Item position='right'>
          <Button as='a' inverted>Log in</Button>
          <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item> */}
      </Menu>
    </Container>

    :

    <Container>
      <Menu pointing secondary size='large'>

        <Menu.Item as='a'
        active={location === '/'}
        onClick={ () => {props.history.push('/')} }>
        Home
      </Menu.Item>

      <Menu.Item as='a'
        active={location === '/search'}
        onClick={ () => {props.history.push('/search')} }>
        Search
      </Menu.Item>

      <Menu.Item as='a'
        active={location === '/contact'}
        onClick={ () => {props.history.push('/contact')} }>
        Contact
      </Menu.Item>

        {/* <Menu.Item position='right'>
          <Button as='a' >Log in</Button>
          <Button as='a'  style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item> */}
      </Menu>
    </Container>
  )

}

export default TopNav
