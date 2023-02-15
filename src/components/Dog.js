import React from 'react'

const Dog = ({id, click}) => {
  return (
    <>
    
    <div id={id} className='container'>
        <p>Random Kutya</p>
    </div>

    <button onClick={click}>Random Kutya Lekérése</button>
    
    </>
  )
}

export default Dog