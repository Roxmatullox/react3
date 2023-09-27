import  { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class Form1 extends Component {
  render() {
    const {todo , returnText , submit} = this.props
    return (
      <div className="add-contact">
        <div className="container">
          <Form onSubmit={submit} className='w-50 m-auto my-5'>
            <Form.Group onChange={returnText} className="mb-3" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control value={todo.firstName} type="text"  />
            </Form.Group>
            <Form.Group onChange={returnText} className="mb-3" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control value={todo.lastName} type="text"  />
            </Form.Group>
            <Form.Group onChange={returnText} className="mb-3" controlId="categories">
              <Form.Label>Categories</Form.Label>
              <Form.Select value={todo.categories}>
                <option>Family</option>
                <option>Friends</option>
                <option>Relatives</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group onChange={returnText} className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control value={todo.phoneNumber} type="text"  />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add contact
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form1