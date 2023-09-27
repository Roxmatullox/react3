import  { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

class Card1 extends Component {
  render() {
    const {firstName , lastName , categories , phoneNumber , favourite , id , addToFavourite , delete1} = this.props
    return (
      <Card className='mb-3'>
      <Card.Header>{firstName} {lastName} {!favourite?<Button onClick={()=>addToFavourite(id)} className='ms-5'>Add to favourite</Button>:<Button onClick={()=>delete1(id)} className='ms-5'>Delete</Button>}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {phoneNumber}
          </p>
          <footer className="blockquote-footer">
            {categories}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    )
  }
}

export default Card1