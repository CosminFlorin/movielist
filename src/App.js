import React from 'react'
import Header from './shared/header/Header'
import { Grid, Container, TextField, Button } from '@material-ui/core'

import MovieList from './components/movieList/MovieList'
import Search from './components/search/Search'

class App extends React.Component {
  state = {
    
    savedMovies: [],
    user: null,
    userName: ''
  }

  componentDidMount() {
    const savedMovies = localStorage.getItem('userData')
    const userDetails = localStorage.getItem('userDetails')
    if (userDetails) {
      const parsedUser = JSON.parse(userDetails)
      this.setState({
        user: parsedUser,
      })
    } else {
      // handle redirect to login?
    }
    if (savedMovies) {
      try {
        const parsed = JSON.parse(savedMovies)
        this.setState({
          savedMovies: parsed.savedMovies,
        })
      } catch (error) {
        console.log('App crashed check user input...')
      }
    }
  }  


  onMovieAdd = (movie) => {
    const movies = this.state.savedMovies.slice(0)
    movies.push(movie)

    localStorage.setItem(
      'userData',
      JSON.stringify({
        savedMovies: movies,
      }),
    )

    this.setState({
      savedMovies: movies,
    })
  }
 

 

  handleAddUser = (event) => {
    localStorage.setItem('userDetails', JSON.stringify({
      userName: this.state.userName
    }))

    this.setState({
      user: {
        userName: this.state.userName
      },
      userName: null
    })
  }

  onUserChange = (event) => {
    const { value } = event.target
    this.setState({
      userName: value
    })
  }

  changeRating = (rating, id) => {
    var movie = this.state.savedMovies.find((item) => item.id === id);
    var data = Object.assign({}, movie, { userRating: rating });

    this.setState(
      {
        savedMovies: this.state.savedMovies.map((item) => {
          if (item.id === id) return data;
          else return item;
        }),
      },
      () => {
        localStorage.setItem(
          "userData",
          JSON.stringify({ savedMovies: this.state.savedMovies })
        );
      }
    );
  };
  deleteMovie = (id) => {
    this.setState(
      {
        savedMovies: this.state.savedMovies.filter((item) => item.id !== id),
      },
      () => {
        localStorage.setItem(
          "userData",
          JSON.stringify({ savedMovies: this.state.savedMovies })
        );
      }
    );
  };
  favoriteMovie=(id)=>{
    console.log("hello from heart")
    
    }



  logout = () => {
    this.setState({ user: null })
    localStorage.removeItem('userDetails')
  }


  render() {
    const { savedMovies, user } = this.state
    console.log(savedMovies)
    return (
      <div className="App">
        <Header user={user} onLogout={this.logout} />
        {user ? (
          <React.Fragment>
            <Container maxWidth="md">
              <Search onMovieAdd={this.onMovieAdd} />
            </Container>
            <Container maxWidth="md">
              <MovieList savedMovies={savedMovies} changeRating={this.changeRating} deleteMovie={this.deleteMovie}favoriteMovie={this.favoriteMovie} />
            </Container>
          </React.Fragment>
        ) : (
            <Container maxWidth="md">
              <h2>Please Login!</h2>
              <h4>Type your name !</h4>
              <TextField label="Name" onChange={this.onUserChange} />
              <Button variant="contained"  onClick={this.handleAddUser} >Save</Button>
            </Container>
        )}
      </div>
    )
  }
}

export default App