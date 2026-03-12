import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ashwinmendhe')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>GitHub Follower: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/>
     </div>
    
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const respo = await fetch('https://api.github.com/users/ashwinmendhe')
    return respo.json()
}