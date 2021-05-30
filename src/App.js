import './App.css';
import { Component } from 'react';
import Movie from './movie';



class App extends Component{
  state = {
  }
  
  componentDidMount(){
    this._getMovies();
  }

  _renderMovie = () =>{
    const movies = this.state.movies.map((movie) =>{
      console.log(movie)
      return <Movie 
      title={movie.title_long} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres = {movie.genres}
      synopsis = {movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){

    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovie() : "loading"}
      </div>
    );
  }
}

export default App;
