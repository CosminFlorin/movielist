import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  
} from '@material-ui/core'
 import Rating from "./Rating"
 import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const MovieCard = (props) => {
  const { movie,changeRating,deleteMovie,favoriteMovie} = props;
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia image="" description="movie poster"></CardMedia>
          <Typography variant="h5">{movie.original_title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {movie.release_date}
          </Typography>
          <div>
            <Rating changeRating={changeRating} movie={movie}/>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>deleteMovie(movie.id)} >
          Delete 
        </Button>
        <Button size="small" color="primary" onClick={()=>favoriteMovie(movie.id)} >
          <FavoriteBorderIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard