import React from 'react'
import {
  TheContent,
  TheHeader
} from './index'

const TheLayout = () => {
  return (
    <div>
        <TheHeader/>
        <div className="container mb-5">
            <TheContent/>
        </div>
    </div>
  )
}

export default TheLayout
