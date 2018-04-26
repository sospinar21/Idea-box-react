import React, {Component} from 'react'

class Form extends Component {
    constructor (props) {
        super()
        let userTitleInput = '';
        let userBodyInput = '';  
    }

saveInput (event) {
       this.userTitleInput = event.target.value
}

saveBodyInput (event) {
       this.userBodyInput = event.target.value
}

render () {
    console.log(this.userBodyInput)
    return (
    <div className='submitBox'>
        <h1><b>idea</b>box</h1>
        <form id='submitForm'>
            <input required = 'required' onKeyUp = {(event) => this.saveInput(event)} className='titleInput'
                placeholder='Title'
            ></input>
            <input required = 'required' onKeyUp = {(event) => this.saveBodyInput(event)} className='bodyInput'
                placeholder='Body'           
            ></input>
            <button onClick = { (e) => this.props.addBodyAndTitle(e, this.userTitleInput,this.userBodyInput)}
            className='submitButton' >Save</button>            
        </form>
    </div>
    )
}
}


export default Form 