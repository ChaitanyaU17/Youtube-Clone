import React from 'react'
import Button from './Button'
import VideoContainer from './VideoContainer'
import SearchResults from './SearchResults'

const MainContainer = () => {
  return (
    <div className='ml-14'>
      <Button />
      <SearchResults />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
