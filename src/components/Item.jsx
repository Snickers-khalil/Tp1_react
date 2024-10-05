import React from 'react'

export default function Item(props) {
  return (
    <div>
        <ul>
        <li>{props.data} - {props.number}</li>
        </ul>
    </div>
  )
}
