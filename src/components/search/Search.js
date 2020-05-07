import React,{useState} from "react";
// import InputBase from "@material-ui/core/InputBase";
// import {Textfield} from '@material-ui/core '
import {TextField,Button, Container} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'
import styles from './Search.module.css'
// import ResultList from './ResultList.js'
// import MovieList from "./components/movielist/MovieList.js";






const Search = ()=> {  

  const [showResults,setShowResults] = useState(false)
return(
<React.Fragment>
<Container className={styles.container}>
<TextField placeholder="The name of a movie" label="Search" variant="outlined" className={styles.search} />

<Button
variant="outlined"
color="normal"
className="search-button"
startIcon={<SearchIcon/>}
onClick={()=>setShowResults(!showResults)}>Search</Button>


</Container>
{showResults && (
  
  
  <Container className={styles.results}>
<ResultList/>

</Container>
)}
</React.Fragment>
)}


export default Search;

