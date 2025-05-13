import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Live" />
      <Button name="Comedy" />
      <Button name="Gaming" />
      <Button name="Movies" />
      <Button name="Music" />
      <Button name="Trailers" />
    </div>
  )
}

export default ButtonList