import React, { useRef, useState } from 'react'

export default function Form() {
    const titleReF = useRef()
    const yearReF = useRef()
    const [data,setData]=useState(null)
    const handleClick=()=>{
        // e.preventDefault()
        const title=titleReF.current.value
        const year=yearReF.current.value
        setData({title:title,year:year})
        // titleReF.current.value = ''
        // yearReF.current.value = ''
    }
    return (
    <div>
        <form onSubmit={handleClick}> 
            <input placeholder='enter title' ref={titleReF}/>
            <input placeholder='enter year' ref={yearReF}/>

            <button type='submit'>click me</button>
        </form>
        { data
        ? <div>title:{data.title}<br/> year:{data.year}</div>
        : <h1 className='main'>No data found</h1>}
        </div>
  )
}
