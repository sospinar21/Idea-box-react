import React, {Component} from 'react'
import ContentEditable from 'react-simple-contenteditable';


class Card extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    this.upvote = this.upvote.bind(this)
    }

upvote (cardQuality) {
    console.log('in upvote',cardQuality)
    this.props.upvoteQuality(cardQuality)
}

render () {
    return (
    <li className='ideaBox' key={this.props.cardKey}>
        <div className='firstSection'>
            <h2 contentEditable="plaintext-only">{this.props.title}</h2>
            <button/>
        </div>
        <div className='secondSection'>
            <h3 contentEditable="plaintext-only">{this.props.body}</h3>
        </div>
        <div className='qualitySection'>
            <button
                onClick = {() => this.upvote(this.props)}
            />
            <button
                onClick = {() => this.props.downVoteQuality(this.props)}
            />
            <span contentEditable="plaintext-only"><b>Quality </b><div id='qualityh4'>{this.props.quality}</div></span>               
        </div>  
    </li>
    )
}
}


export default Card 