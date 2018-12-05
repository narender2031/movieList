import React, { Component } from 'react';
import Form from "./components/Form";
import MovieList from './components/MovieList.js';
import ReactPaginate from 'react-paginate'


const API_KEY='f03dd81b'
class App extends Component {
  state = {
    movies: [],
    pageCount: 0
  }

  getMovieName = async (e) => {
    e.preventDefault();
    const movie_name = e.target.movie.value
    const next_page = 1
    const api_call = await fetch(`http://www.omdbapi.com/?s=${movie_name}&page=${next_page}&apikey=${API_KEY}`)
    const data =  await api_call.json();
    this.setState({
      movies: data.Search || [],
      pageCount: data.totalResults || 0
    })
    console.log(this.state)
    localStorage.setItem("movie_name", movie_name)
  }

  componentDidMount = () => {
    const json = localStorage.getItem("movies")
    const count = localStorage.getItem("pageCount")
    const movies = JSON.parse(json) || []
    const pageCount = JSON.parse(count)
    this.setState({movies: movies, pageCount: pageCount})
  }

  componentDidUpdate = () => {
    const movies = JSON.stringify(this.state.movies)
    const pageCount = JSON.stringify(this.state.pageCount)
    localStorage.setItem("movies", movies)
    localStorage.setItem("pageCount", pageCount)
  }

  handlePageClick = async (data) => {
    console.log(data.selected)
    const json  = localStorage.getItem("movie_name")
    const movie_name = localStorage.getItem("movie_name")
    const next_page = data.selected
    const api_call = await fetch(`http://www.omdbapi.com/?s=${movie_name}&page=${next_page}&apikey=${API_KEY}`)
    const result =  await api_call.json();
    this.setState({
      movies: result.Search || [],
      pageCount: result.totalResults || 0
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className='container'>
          <div className='search-from'>
            <Form getMovieName = {this.getMovieName}/>
          </div>
          <div className='movie-list'>
            <MovieList movies = {this.state.movies}/>
          </div>
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={parseInt(this.state.pageCount)}
              marginPagesDisplayed={3}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
        </div>
      </div>
    );
  }
}

export default App;
