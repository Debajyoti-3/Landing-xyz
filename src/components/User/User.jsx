import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function User() {
    
    const {userid} = useParams()
  return (
    <div className='text-2xl text-gray-100 bg-gray-600 rounded-2xl m-2 p-2'  >user: {userid}</div>
  )
}

export default User
