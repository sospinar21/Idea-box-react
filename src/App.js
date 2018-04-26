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
        titleInput : '',
        bodyInput : '',
        quality: 'Swill',
      }

    this.addBodyAndTitle = this.addBodyAndTitle.bind(this)
  }

  addBodyAndTitle (e, title, body) {
    e.preventDefault()
    console.log(title)
    if(title !== '' || body !== ''){ 
      this.idea = {
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
  
    console.log(this.state.ideaList)
    document.getElementById('submitForm').reset()
    this.cleanState()
  }

  cleanState () {
      this.idea = {
        titleInput : '',
        bodyInput : '',
        quality: 'Swill'
      }
  }


  handleError () {

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
