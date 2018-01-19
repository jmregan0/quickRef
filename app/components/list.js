import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const List = (props) => {
  return (

  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine></Table.HeaderCell>
        <Table.HeaderCell>Resource Type</Table.HeaderCell>
        <Table.HeaderCell>Publisher</Table.HeaderCell>
        <Table.HeaderCell>Link</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        props.research.map((element, index) => {
          return (
          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='center'>{index + 1}</Header>
            </Table.Cell>
            <Table.Cell singleLine>{element.type}</Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3} />
            </Table.Cell>
            <Table.Cell textAlign='right'>
                80% <br />
              <a href='#'>18 studies</a>
            </Table.Cell>
            <Table.Cell>
                {element.title}
            </Table.Cell>
          </Table.Row>
          )
        })
      }

    </Table.Body>
  </Table>
)
}

export default List
