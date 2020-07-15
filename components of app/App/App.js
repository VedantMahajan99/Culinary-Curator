import React from 'react';
import logo from '/Users/vedantmahajan/Desktop/ravenous/src/logo.svg';
import './App.css';
import BusinessList from '/Users/vedantmahajan/Desktop/ravenous/src/components/BusinessList/BusinessList.js';
import SearchBar from '/Users/vedantmahajan/Desktop/ravenous/src/components/SearchBar/SearchBar.js';
import {Yelp} from '/Users/vedantmahajan/Desktop/ravenous/src/util/Yelp.js'


class App extends React.Component {

  constructor(props)
  {

    super(props)
    this.state =
    {
      businesses: []
    }

    this.searchYelp=this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
    Yelp.search(term,location,sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
    return (
      <div className="App">
      <h1>Cuisine Curator </h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }

}

export default App;
