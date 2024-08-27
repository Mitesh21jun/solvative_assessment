import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../api/peerfives'

function NewUser() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await createUser(name)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Create New User</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  )
}

export default NewUser
