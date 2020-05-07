import React from "react";

import Header from "./shared/header/Header.js";
import { Grid, Container } from "@material-ui/core";
import Search from "./components/search/Search.js";

  
export default class App extends React.Component {

  state={
    Movies: [],
    searchField:""
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/550?api_key=5cb751e64855ab4548a6d298c4270eea")
    .then(response=>{
      return response.json()
    })
    .then( data =>{
      console.log(data)
      this.setState({ Movies: [data] })
    })
  }


  onSearchChange=event =>{
    this.setState({searchField:event.target.value.toLowerCase()});
  }
 
  render() {
    
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

}