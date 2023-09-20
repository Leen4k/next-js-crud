import React from 'react'

const page = ({params}) => {
  console.log(params)
  return (
    <div>Hello guys{params.category}</div>
  )
}

export default page