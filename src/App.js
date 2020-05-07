import React from "react";

import Header from "./shared/header/Header.js";
import { Grid, Container } from "@material-ui/core";
import Search from "./components/search/Search.js";

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