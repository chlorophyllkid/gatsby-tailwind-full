import React from 'react'

import '../tailwind.css'

import Headline from '../components/atoms/Headline/Headline'

const Error404 = () => {
  return (
    <Headline tag="h1" className="text-center">
      404
    </Headline>
  )
}

Error404.propTypes = {}

Error404.defaultProps = {}

export default Error404
