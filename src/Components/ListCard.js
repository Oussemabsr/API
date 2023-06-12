import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListCard = ({user}) => {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATIgstn7E0Zs2pdPJRbBTUOJZpoGJkeR4Dw&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.username} </Card.Text>
        <Card.Text> {user.email} </Card.Text>
        <Button variant="primary">
            <Link to={`/users/${user.id}`} >Go check profile</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ListCard