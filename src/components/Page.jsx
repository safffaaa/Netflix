import React, { useEffect, useState } from 'react'
import requests from '../request'
import axios from 'axios'


const Page = () => {
  
    const [movies,setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length )]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[])

    // console.log(movie);
    
    const stringlength = (str,num) =>{
      if(str?.length > num){
        return str.slice(0,num) + '...'
      }else {
        return str;
      }
    }

    return (
      <div className='relative w-full h-[550px] text-white'>
        {movie && (
          <>
            <img
              className='absolute w-full h-full object-cover'
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-8'>
              <h1 className='text-3xl  font-bold mb-8'>{movie.title}</h1>
              <div className='flex space-x-4'>
                <button className='bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition duration-300'>
                  Play
                </button>
                <button className='bg-gray-800 text-white font-bold py-2 px-6 rounded hover:bg-gray-900 transition duration-300'>
                  Watch Later
                </button>
              </div>
              <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
              <p className='w-full md:max-w-[70%] lg:max-w-[35%] text-gray-300'>Movie overview: {stringlength(movie?.overview,100)}</p>
            </div>
          </>
        )}
      </div>
    );
  };
export default Page;