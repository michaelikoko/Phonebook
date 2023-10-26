import { useContext, useEffect, useState } from 'react'
import contactServices from './services/contacts'
import ContactsContext from './ContactsContext'

import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [contacts, dispatch] = useContext(ContactsContext)

  const [showContactForm, setShowContactForm] = useState(false)
  const handleCloseContactForm = () => setShowContactForm(false)
  const handleShowContactForm = () => setShowContactForm(true)

  useEffect(() => {
    const getContacts = async () => {
      const response = await contactServices.getAll()
      dispatch({
        type: 'SET_CONTACTS',
        payload: response,
      })
    }
    getContacts()
  }, [dispatch])


  return (
    <>
      <ContactForm
        handleClose={handleCloseContactForm}
        show={showContactForm}
      />

      <nav className="navbar bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            PhoneBook
          </a>
        </div>
      </nav>
      <div className="container py-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleShowContactForm}
        >
          Add New
        </button>
        <Contacts />
      </div>
    </>
  )
}

export default App
