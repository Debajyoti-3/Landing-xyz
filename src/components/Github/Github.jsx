import React from 'react'
import {useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/Debajyoti-3')
        .then(response=> response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl rounded-2xl'>
      GitHub Following : {data.following}
    </div>
  )
}

export default Github

// export const githubInfoLoader = async() =>{
//     const response = await fetch('https://api.github.com/users/Debajyoti-3')
//      return response.json()
    
// }                                                                    // this for optimization
