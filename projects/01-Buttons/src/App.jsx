import { useState } from 'react'
import { Button } from './Button'


export function App() {
  return (
    <>
      <Button></Button>
      <Button buttonClassName='my-button-outline' disabelShadow></Button>
      <Button buttonClassName='my-button-text'></Button>
    </>
  )
}


