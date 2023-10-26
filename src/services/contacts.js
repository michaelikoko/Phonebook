import axios from 'axios'
const baseUrl = 'http://localhost:3001/contacts'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addContact = async (contact) => {
  const response = await axios.post(baseUrl, contact)
  return response.data
}

const deleteContact = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, addContact, deleteContact }
