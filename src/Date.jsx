import React, { useState } from 'react'

export default function Date(props) {
  const [date, setdate] = useState('')

  return (
    <div className='block'>
      <div className='rounded-lg border border-yellow-500 p-1 m-2 flex gap-2.5 items-center justify-center'>
        <div>
          <h2>Add a Dew Date</h2>

          <input type="date" value={date} onChange={(e) => setdate(e.target.value)} className='border border-gray-500 rounded-lg'/>
        </div>
        <div>
          <button
            onClick={() => props.updateDate(todo.id)}
            className="p-1 bg-gray-400 text-white border" >
            <ion-icon name="checkmark"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  )
}
