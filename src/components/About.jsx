import React from 'react'
import NotFound from './NotFound'

export default function About() {
    const isActiv =false
  return (
    isActiv 
    ? <div>About</div>
    : <NotFound/>
  )
}
