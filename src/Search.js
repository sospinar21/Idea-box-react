import React, { Component } from 'react' 

class Search extends Component {
    constructor(props){
        super()
    }

searchInput (event) {
    let searchBox = event.target.value
    let ideasLi = document.querySelectorAll('li')
    
    if(searchBox){
    ideasLi.forEach(ideaBox => {
        let titleContent = ideaBox.querySelector('h2').innerText;
        let bodyContent = ideaBox.querySelector('h3').innerText;
        let qualityContent = ideaBox.querySelector('#qualityh4').innerText;
        if (titleContent.includes(searchBox) || bodyContent.includes(searchBox) || qualityContent.includes(searchBox)) {
            ideaBox.style.visibility = 'visible';
        } else {
            ideaBox.style.display = 'none';
        }
    }) 
}
    else {
        for (var i = 0; i < ideasLi.length; i++) {
            ideasLi[i].style.display = 'block';
        }
    }
}  
   
render () {      
    return (
        <div className = 'searchDiv'>
            <input 
                className='searchBox'
                 placeholder = 'Search'
                 onChange = {(e) => this.searchInput(e)}
            />
        </div>
    )
}
}

export default Search