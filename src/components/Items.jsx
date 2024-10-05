import React from 'react'
import Item from './Item'

export default function Items(props) {
  return (
    <div>{props.numbers.map((number,key)=>{ 
        return <Item number={number >10 ? 0 : number} data={key}/>
    })}</div>
  )
}
