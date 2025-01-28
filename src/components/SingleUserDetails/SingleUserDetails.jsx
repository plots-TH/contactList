import React from 'react'

function SingleUserDetails({setFeaturedUser}) {
  return (
    <div>
        SingleUserDetails
        <button onClick={() => setFeaturedUser(null)}>Return to List</button>
    </div>
  )
}

export default SingleUserDetails