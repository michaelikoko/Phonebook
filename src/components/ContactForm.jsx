import { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import contactServices from '../services/contacts'
import ContactsContext from '../ContactsContext'

const ContactForm = ({ show, handleClose }) => {
  const [contacts, dispatch] = useContext(ContactsContext)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const addContact = async (event) => {
    event.preventDefault()
    const response = await contactServices.addContact({ name, number })
    dispatch({
      type: 'ADD_CONTACT',
      payload: response,
    })
    setName('')
    setNumber('')
    handleClose()
  }

  const handleNameChange = (event) => setName(event.target.value)
  const handleNumberChange = (event) => setNumber(event.target.value)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addContact}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact Name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact Number"
              value={number}
              onChange={handleNumberChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ContactForm
