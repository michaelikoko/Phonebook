import { createContext, useReducer } from 'react'

const contactsReducer = (state, action) => {
  switch (action.type) {
  case 'SET_CONTACTS':
    return action.payload
  case 'ADD_CONTACT':
    return [...state, action.payload]
  case 'REMOVE_CONTACT':
    return state.filter(contact => contact.id !== action.payload.id)
  default:
    return state
  }
}

const ContactsContext = createContext()

export const ContactsContextProvider = (props) => {
  const [contacts, contactsDispatch] = useReducer(contactsReducer, [])

  return (
    <ContactsContext.Provider value={[contacts, contactsDispatch]}>
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsContext
