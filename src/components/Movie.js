import React from 'react'
import {Link} from 'react-router-dom'

const API_KEY='f03dd81b'
class Movie extends React.Component {
  state = {
    movie: {}
  }
  

  componentDidMount = async () => {
    const id = this.props.location.state.id;
    //console.log(id)
    const api_call = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
    const data = await api_call.json();
    
    this.setState({
      movie: data
    })
  }

  render(){
    const movieDetails = this.state.movie
    return(
      <div className='movie-details'>
        <div className="App-header">
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className='col-md-4'>
              <div className='card'>
                {console.log(movieDetails)}
                <img src={movieDetails.Poster}  alt={movieDetails.Title} className='movie-poster'/>      
              </div>
            </div>
            <div className='col-md-8'>
              <h1>Title: {movieDetails.Title}</h1>
              <h6>Cast: {movieDetails.Actors}</h6>
              <div className='row text-justify'>
                <div className='col-md-4'>
                  <p className='mb-0'>Year</p>
                  <p className=''>{movieDetails.Year}</p>
                </div>
                <div className='col-md-4'>
                  <p className='mb-0'>Rating</p>
                  <p className=''>{movieDetails.imdbRating}</p>
                </div>
                <div className='col-md-4'>
                  <p className='mb-0'>Duration</p>
                  <p className=''>{movieDetails.Runtime}</p>
                </div>
              </div>
              <h6 className=''>Awards: <span>{movieDetails.Awards}</span></h6>  
              <h6 className=''>Earning: <span>{movieDetails.BoxOffice}</span></h6>
              <h6 className=''>Language: <span>{movieDetails.Language}</span></h6> 
              <p className=''>{movieDetails.Plot}</p>
              <Link to ='/'>Back</Link>       
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Movie;