import { useContext } from 'react'
import contactServices from '../services/contacts'
import ContactsContext from '../ContactsContext'

const Contacts = () => {
  const [contacts, dispatch] = useContext(ContactsContext)

  const deleteContact = async (id) => {
    const response = await contactServices.deleteContact(id)
    dispatch({
      type: 'REMOVE_CONTACT',
      payload: { id },
    })
  }

  return (
    <div className="my-4">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Contact Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
