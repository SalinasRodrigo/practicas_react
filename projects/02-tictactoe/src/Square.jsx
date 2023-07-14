import './App.css'
import { useState } from 'react'

export function Square ({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
        
}