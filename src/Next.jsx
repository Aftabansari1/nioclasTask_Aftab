import React from 'react'

const Next = (nextHandle) => {
    
  return (
    <div>
       <button onClick={nextHandle.nextHandle}>Next</button>
    </div>
  )
}

export default Next
