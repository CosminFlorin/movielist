import React from "react"
import {Grid} from "@material-ui/core"

import styles from "./ResultsList.module.css"
const getPosterUrl =(imageUri) =>`https://image.tmdb.org/t/p/w200${imageUri}`
const  ResultsList = (props)=> (
<React.Fragment>
 {props.movies.map((item)=>(
<Grid container xs={12}>
    <Grid item xs={2}>
        <img alt="" src={getPosterUrl(item.poster_path)} className={styles.poster}/>
    </Grid>
<Grid item xs={3}>{item.original_title}</Grid>
<Grid item xs={2}>{item.reselease_date}</Grid>
</Grid>
 ))}
</React.Fragment>

)

export default ResultsList;