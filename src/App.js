import React, { Component } from "react";

import Header from "./shared/header/Header.js";
import { Grid, Container } from "@material-ui/core";
import Search from "./components/search/Search.js";
import MovieList from "./components/MovieList/MovieList.js";
import Movie from './components/movie/Movie.js'
import ResultsList from 'components/search/ResultList.js'
import MovieCard from "./components/MovieList/MovieCard"


//   constructor(){
//     super();
//     this.state={
// Movies: [],
// searchField:""
//     }
    
//   }

// componentDidMount(){
// fetch("https://api.themoviedb.org/3/movie/550?api_key=5cb751e64855ab4548a6d298c4270eea")
// .then(response=>{
//   return response.json()
// })
// .then(Movies=>{
//   this.setState({Movies:[...data.results]})
// })

// }


//   onSearchChange=event =>{
// this.setState({searchField:event.target.value.toLowerCase()});

//   }
 



function App(){

return (
  <div className="App">
  <Header />
  <br />
  <Grid container>
    <Grid item xs={3} />
    <Grid item xs={6}>
      <Search  handleChange={this.onSearchChange}/>
    </Grid>
    <br /> <br /> <br />
  </Grid>
  <Container maxWidth="sm">
 

  </Container>
</div>


)

}

export default App;