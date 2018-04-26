import React, {Component} from 'react'
import Card from './Card'

const CardList = ({idea, ideaList,upvoteQuality, downVoteQuality}) => {
    console.log('in cardlist', {idea})
    const cardArray = ideaList.map((idea,index) => {
      return (
          <Card 
            title = {idea.titleInput}
            body = {idea.bodyInput}
            quality = {idea.quality}
            key = {index}
            upvoteQuality = {upvoteQuality}
            downVoteQuality = {downVoteQuality}
          />
      )     
  })

return (
    <div className='ideaList'>
        <ul>
            {cardArray}
        </ul>    
    </div>
    )
}




export default CardList 