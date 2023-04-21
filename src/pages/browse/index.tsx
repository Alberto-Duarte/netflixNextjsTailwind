import { link } from 'fs'
import Link from 'next/link'
import { BellIcon, MagnifyingGlassIcon, PlayIcon, InformationCircleIcon, ArrowSmallDownIcon} from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import requests from '../../../services/requests'
// import NetflixLogo from '../../../public/images/netflix_logo.svg'
const baseURL ='https://api.themoviedb.org/3/'
const imageURL = 'https://image.tmdb.org/t/p/original'

export default function Home() {
  const [heroMovie, setHeroMovie] = useState()
  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTopRated}`).then(res => res.json()).then((data) => {
      console.log('MOVIES', data.results[0])
      setHeroMovie(data.results[0])
    })
  }, [])
  return (
    <div className="bg-transparent w-screen h-screen flex flex-col text-white">
      <header className='flex justify-between pt-6 px-8'>
        <div className='flex items-center gap-4'>
          <img className='scale-75 mr-4' src="../images/netflix_logo.svg" alt="SVG image"/> 
          <a className='text-white text-sm font-bold'>Home</a>
          <a className='text-white text-sm'>TV Shows</a>
          <a className='text-white text-sm'>Movies</a>
          <a className='text-white text-sm'>News & Popular</a>
          <a className='text-white text-sm'>My List</a>
          <a className='text-white text-sm'>Browse by Language</a>
        </div>
        <div className='flex items-center gap-4'>
          <MagnifyingGlassIcon className='h-6 w-6'/>
          <a className='text-white text-sm'>Kids</a>
          <BellIcon className='h-6 w-6'/>
          <div></div>
          <ArrowSmallDownIcon className='h-6 w-6'/>
        </div>
      </header>
      <main className='w-screen'>
        <section className='w-1/3 ml-10 mt-20'>
          <div className='flex items-center'>
            <img className='scale-75 mr-5' src="../images/N.svg" alt="SVG image"/> 
            <h1 className='font-mono tracking-[.4rem]'>MOVIES</h1>
          </div>
          <div className='h-fit text-[4rem]'>
              {heroMovie?.original_title}
          </div>
          <div className='flex items-center'>
            <img className='scale-50' src="../images/Top10.svg" alt="SVG image"/> 
            <h2 className='text-xl font-bold'>#1 in TV Shows Today</h2>
          </div>
          <div>
            <p className='break-words text-justify'>
              {heroMovie?.overview}
            </p>
          </div>
          <div className='flex gap-4 mt-5'>
            <button className='flex items-center w-28 h-10 bg-white text-black text-2xl justify-center font-semibold ring-black ring-offset-10 hover:ring-4 rounded'><PlayIcon className='h-8 w-8 mr-2'/>Play</button>
            <button className='flex items-center w-36 h-10 bg-gray-700/80 justify-center ring-white hover:ring-4 rounded'><InformationCircleIcon className='h-8 w-8 mr-2'/>More Info</button>
          </div>
        </section>
        <section className=' ml-10 mt-10'>
          <h2>Popular on Netflix</h2>
          <div className='flex gap-6'>
            {
              MOVIES.map((movie, index) => (
                <div key={index}>
                <img src={movie.link} className='h-20 w-20 bg-green'>
                  </img>
                </div>
            ))}
          </div>
        </section>
      </main>
      <div className='absolute h-full w-full bg-cover bg-center -z-10' style={{backgroundImage: `url(${imageURL}${heroMovie?.backdrop_path})`}}></div>
    </div>
  )
}



const MOVIES = [
  {
    link:'../images/Card.png',
  },
  {
    link:'../images/Card.png',
  },
  {
    link:'../images/Card.png',
  },
  {
    link:'../images/Card.png',
  },
  {
    link:'../images/Card.png',
  },
  {
    link:'../images/Card.png',
  }
]