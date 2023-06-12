import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

const Profile = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then(res => setUser(res.data[0]))
    .catch(err => console.log(err));
    })
    
  return (
    <div>
        <h2>Profile page</h2>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATIgstn7E0Zs2pdPJRbBTUOJZpoGJkeR4Dw&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.username} </Card.Text>
        <Card.Text> {user.email} </Card.Text>
        <Button variant="primary">
            <Link to={`/users`} >Go back</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile