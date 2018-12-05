import React from 'react'
import {Link} from 'react-router-dom'

const MovieList = ({movies}) => {
  return(
    <div className='row'>
        {movies.map((movie) => {
          if(movie['Poster'] == 'N/A' ){
            movie['Poster'] = 'https://cdn46.picsart.com/181506385000202.png?r1024x1024'
          }
          return(
            <div className='col-md-4'  key={movie.imdbID}>
              <div className='card'>
                <img src={ movie['Poster']}  alt='movie-poster' className='movie-poster'/>
                <div className='movie-details'>
                  <h4 className='movie-title p-8'>
                    <span>Title :</span>  <span>{movie.Title.length < 18 ? `${movie.Title}`: `${movie.Title.substring(0,20)}...`}</span>
                  </h4>
                  <span>year :</span>  <span>{movie.Year}</span>
                    <br />
                  <span>Type :</span>  <span>{movie.Type}</span>
                  <br />
                  <button>
                    <Link to={{
                      pathname: `movie/${movie.imdbID}`,
                      state: {id: movie.imdbID}
                    }}>
                    Show Details
                    </Link>
                  </button>
                </div>
              </div>
          </div>
          )
        })}
    </div>
  )
}

export default MovieList;