import React, {Component} from 'react'
import Card from './Card'

const CardList = ({idea, ideaList,upvoteQuality, downVoteQuality}) => {
    console.log('inCardlist', idea)
    const cardArray = ideaList.map((ideaCard,index) => {
      return (
          <Card 
            cardKey = {ideaCard.key}
            title = {ideaCard.titleInput}
            body = {ideaCard.bodyInput}
            quality = {ideaCard.quality}
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