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
    this.deleteIdea = this.deleteIdea.bind(this)
    
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

  upvoteQuality (e) {
    let closestLi = e.target.closest('li')
    let qualityh4 = closestLi.querySelector('#qualityh4')
    console.log('in upvotequality',qualityh4)
      if(qualityh4.innerText === 'Swill'){
        qualityh4.innerText = 'Good'        
      }
      else if(qualityh4.innerText === 'Good'){
        qualityh4.innerText = 'Excelent'              
      }
    }

  downVoteQuality (e) {
    let closestLi = e.target.closest('li')
    let qualityh4 = closestLi.querySelector('#qualityh4')

    if(qualityh4.innerText === 'Excelent'){
      qualityh4.innerText = 'Good'  
    }
    else if(qualityh4.innerText === 'Good'){
      qualityh4.innerText = 'Swill'  
    }
  }


  componentDidMount () {
    let oldIdeas = JSON.parse(localStorage.getItem('ideaList'))
    this.setState ({
      ideaList : oldIdeas || []
    })
  }

  deleteIdea (cardId) {
    let filteredArray = this.state.ideaList.filter(idea => cardId !== idea.key)
    this.setState ({
      ideaList : filteredArray
    })
    this.saveToStorage(filteredArray)
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
        <Search 
           ideaList = {this.state.ideaList}
        />  
        <CardList 
          idea = {this.idea}
          ideaList = {this.state.ideaList}
          upvoteQuality = {this.upvoteQuality}
          downVoteQuality = {this.downVoteQuality}
          deleteIdea = {this.deleteIdea}
        />
      </div>
      )
    }
    return (
      <div className="App">
        <Form 
          addBodyAndTitle = {this.addBodyAndTitle}
        />
        <Search 
           ideaList = {this.state.ideaList}
        />
      </div>
    );
  }
}

export default App;
