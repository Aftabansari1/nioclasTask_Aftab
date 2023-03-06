import React from 'react'

const Previous = (previousHandle) => {
  return (
    <div>
      <button onClick={previousHandle.previousHandle}>Previous</button>
    </div>
  )
}

export default Previous
