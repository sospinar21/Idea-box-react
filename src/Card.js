import React, {Component} from 'react'
import ContentEditable from 'react-simple-contenteditable';


class Card extends Component {
    constructor (props) {
        super()
        this.state = {

        }
        this.upvoteQuality = this.upvoteQuality.bind(this)
        this.downVoteQuality = this.downVoteQuality.bind(this)
    }

    upvoteQuality (event) {
       let closestLi = event.target.closest('#qualityh4')
       
        console.log(closestLi)
        // if(this.props.quality === 'Swill'){ 
        //     this.props.quality = 'Good'        
        // }
        // if(this.props.quality === 'Good'){
        //    this.props.quality = 'Excelent'      
        // }
      }

    downVoteQuality (e) {
        if(this.props.quality === 'Excelent'){
          this.props.quality = 'Good'  
        }
        if(this.props.quality === 'Good'){
          this.props.quality = 'Swill'  
        }
      }

render () {
    console.log(this.props)
    return (
    <li className='ideaBox'>
        <div className='firstSection'>
            <h2 contentEditable="plaintext-only">{this.props.title}</h2>
            <button/>
        </div>
        <div className='secondSection'>
            <h3 contentEditable="plaintext-only">{this.props.body}</h3>
        </div>
        <div className='qualitySection'>
            <button
                onClick = {(e) => this.upvoteQuality(e)}
            />
            <button
                onClick = {(e) => this.downVoteQuality(e)}
            />
            <span contentEditable="plaintext-only"><b>Quality </b><div id='qualityh4'>{this.props.quality}</div></span>               
        </div>  
    </li>
    )
}
}


export default Card 