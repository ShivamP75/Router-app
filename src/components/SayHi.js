import React from 'react'
import { useParams } from 'react-router-dom';

export default function SayHi() {
  const params = useParams();
    
  return (
    <div className='text-center'>
      <h2>Welcome {params.name}</h2>
    </div>
  )
}
