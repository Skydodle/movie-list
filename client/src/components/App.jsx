import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      //storage: [],
      addInput: '',
      searchInput: ''
    };
    this.get = this.get.bind(this);
  }

  get() {
    axios.get('/movieList')
    .then(res => {
      var movieData = res.data;
      //console.log(res);
      console.log('get:', res.data);
      this.setState({
        //storage: movieData,
        movies: movieData
      });
    })
  }

  componentDidMount(){
    // this loads or connect to the server data after all components render
    // we want to send a get request to server to reload page with server data
   this.get();
  }


  handleInput(e) {
    if (e.target.id === 'search') {
      this.setState({
        searchInput: e.target.value
      })
    } else if (e.target.id === 'add') {
      this.setState({
        addInput: e.target.value
      })
    }
  }

  addMovie() {
    if (this.state.addInput === '') {
      return;
    }
    axios.post('/movieList', {title: this.state.addInput, watched: false})
      // what do we want if post is success or failure
      .then(() => {
        this.get();
      })
      //.catch to handle error
      .catch((error) => {
        console.log(error);
      })

    // if (this.state.addInput === '') {
    //   return;
    // }
    // this.setState({
    //   movies: [...this.state.storage, this.state.addInput],
    //   storage: [...this.state.storage, this.state.addInput],
    //   addInput: ''
    // })
  }

  searchMovie() {
    if (this.state.searchInput === '') {
      this.setState({
        movies: this.state.storage
      })
      return;
    }

    var foundMovies = [];
    for (var i = 0; i < this.state.storage.length; i++) {
      var currentMovie = this.state.storage[i];
      if (currentMovie.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
        foundMovies.push(currentMovie);
      }
    }

    if (foundMovies.length > 0) {
      this.setState({
        movies: foundMovies,
        searchInput: ''
      })
    } else {
      this.setState({
        movies: ['no movie by that name found'],
        searchInput: ''
      })
    }
  };

  render() {
    return (
      <main>
        <Add className="add-movie"
          value={this.state.addInput}
          handleInput={this.handleInput.bind(this)}
          addMovie={this.addMovie.bind(this)}
        />
        <Search className="search"
          value={this.state.searchInput}
          handleInput={this.handleInput.bind(this)}
          searchMovie={this.searchMovie.bind(this)}
        />
        <MovieList className="movie-list"
          movieList={this.state.movies}
        />
      </main>
    )
  }

}



export default App;