import React, {Component} from 'react'
import ContentEditable from 'react-simple-contenteditable';


class Card extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }


render () {
    return (
    <li className='ideaBox' key={this.props.cardKey}>
        <div className='firstSection'>
            <h2 contentEditable="plaintext-only">{this.props.title}</h2>
            <button onClick = {() => this.props.deleteIdea(this.props.cardKey)}/>
        </div>
        <div className='secondSection'>
            <h3 contentEditable="plaintext-only">{this.props.body}</h3>
        </div>
        <div className='qualitySection'>
            <button
                onClick = {(e) => this.props.upvoteQuality(e)}
            />
            <button
                onClick = {(e) => this.props.downVoteQuality(e)}
            />
            <span contentEditable="plaintext-only"><b>Quality </b><div id='qualityh4'>Swill</div></span>               
        </div>  
    </li>
    )
}
}


export default Card 