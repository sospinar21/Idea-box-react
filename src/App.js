import React, { Component } from 'react';
import Form from './Form'
import Search from './Search'
import CardList from './CardList'
import './App.css';
import './reset.css'
import Card from './Card';

class App extends Component {
  constructor () {
    super ()

      this.state = {
        ideaList : [],
      }

      let idea = {
        key : Date.now(),
        titleInput : '',
        bodyInput : '',
        quality: 'Swill',
      }

    this.addBodyAndTitle = this.addBodyAndTitle.bind(this)
    this.upvoteQuality = this.upvoteQuality.bind(this)
    this.downVoteQuality = this.downVoteQuality.bind(this)
  }

  addBodyAndTitle (e, title, body) {
    e.preventDefault()
    console.log(title)
    if(title !== '' || body !== ''){ 
      this.idea = {
        key : Date.now(),
        titleInput : title,
        bodyInput : body,
        quality: 'Swill'
      }
    }
    let listArray = this.state.ideaList
    listArray.push(this.idea);

    this.setState ({
      ideaList : listArray
    })
    this.saveToStorage(listArray)
    document.getElementById('submitForm').reset()
  }

upvoteQuality (cardId) {
  console.log('in upvotequality',cardId.quality)
    if(cardId.quality === 'Swill'){
      cardId.quality = 'Good'        
    }
    if(cardId.quality === 'Good'){
      cardId.quality = 'Excelent'        
    }
  }

downVoteQuality (e) {
    if(this.props.quality === 'Excelent'){
      this.props.quality = 'Good'  
    }
    if(this.props.quality === 'Good'){
      this.props.quality = 'Swill'  
    }
  }


  componentDidMount () {
    let oldIdeas = JSON.parse(localStorage.getItem('ideaList'))
    this.setState ({
      ideaList : oldIdeas || []
    })
  }


  handleError () {

  }

  saveToStorage (idealist) {
    localStorage.setItem('ideaList', JSON.stringify(idealist)); 
  }

  render() {
    if(this.state.ideaList.length){
      return (
        <div className="App">
        <Form 
          addBodyAndTitle = {this.addBodyAndTitle}
        />
        <Search />
        
        <CardList 
          idea = {this.idea}
          ideaList = {this.state.ideaList}
          upvoteQuality = {this.upvoteQuality}
          downVoteQuality = {this.downVoteQuality}
        />
      </div>
      )
    }
    return (
      <div className="App">
        <Form 
          addBodyAndTitle = {this.addBodyAndTitle}
        />
        <Search />
      </div>
    );
  }
}

export default App;
