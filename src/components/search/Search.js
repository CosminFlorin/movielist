import React, { Component,useState } from "react";
// import InputBase from "@material-ui/core/InputBase";
// import {Textfield} from '@material-ui/core '
import axios from "axios"
import { TextField, Button, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.css";
import ResultsList from "./ResultsList";
// import MovieList from "./components/movielist/MovieList.js";
import Settings from "../../config/Settings"
class Search extends Component {


  state={
    searchResults:[],
    searchTerm :""
  }

  handleSearch=()=>{
console.log(this.state.searchTerm)
const {API_URL,API_KEY}=Settings;
const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`
axios.get(url).then((response)=>{
  this.setState({
    searchResults:response.data.results
  })
})
  }

  //https://api.themoviedb.org/3/movie/1997?api_key=Helpme&language=en-US

  handleChange=(event)=>{
this.setState({
  searchTerm:event.target.value
})

  }
  render() {
  
    return (
      <React.Fragment>
        <Container className={styles.container}>
          <TextField
            placeholder="The name of a movie"
            label="Search"
            variant="outlined"
            className={styles.search}
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />

          <Button
            variant="outlined"
            color="normal"
            startIcon={<SearchIcon />}
            onClick={this.handleSearch }
          >
            Search
          </Button>
        </Container>
        {this.state.searchResults.length>0 && (
          <Container className={styles.results}>
            <ResultsList movies={this.state.searchResults} />
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default Search
