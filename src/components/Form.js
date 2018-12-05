import React from 'react'

const Form = ({getMovieName}) => {
  return(
    <div className='form py-4'>
      <form onSubmit={getMovieName}>
        <input type='text' name='movie' className='m-2'/>
        <button className='m-2'>Search</button>
      </form>
    </div>
  )
}

export default Form;