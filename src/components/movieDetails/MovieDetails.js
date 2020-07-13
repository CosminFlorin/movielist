import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
  Container,
} from "@material-ui/core";
import { getDetails } from "../../api/MovieService";
const getPosterUrl = (imageUri) => {
  if (imageUri) return `https://image.tmdb.org/t/p/w200${imageUri}`;
  else return "https://via.placeholder.com/300x300";
};
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  let history = useHistory();

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data));
  }, [id]);

  return (
    <Container>
      <Card>
        <CardContent>
          <CardMedia image="" description="movie poster">
            {" "}
            <img src></img>
          </CardMedia>
          <img alt="Movie Poster" src={getPosterUrl(movie.poster_path)} />
          <Typography variant="h5">{movie.original_title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {movie.release_date}
          </Typography>

          <Link to="/">
            <Button   variant="outlined"
            color="primary">Home</Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetails;
