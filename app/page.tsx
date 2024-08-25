'use client'
import React, { useEffect, useState } from 'react'
import NewsSection from '@/components/layout/NewsSection';
import TeamSection from '@/components/layout/TeamSection';
import GamesSection from '@/components/layout/GamesSection';
import Hero from '@/components/layout/Hero';


export default function Home() {

  const externeURL = 'https://inherited-games-bo.vercel.app'
  const [games, setGames] = useState([])
  const [infos, setInfos] = useState([])
  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `${externeURL}/api/games/get-games`
        console.log('Fetching URL:', url)
        const response = await fetch(url, {
          redirect: 'follow'
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setGames(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }

    }
    fetchPosts()
    const fetchInfos = async () => {
      try {
        const url = `${externeURL}/api/landingPage/get-heroSection-info`
        console.log('Fetching URL:', url)
        const response = await fetch(url, {
          redirect: 'follow'
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setInfos(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }

    }
    fetchInfos()
    const fetchTeam = async () => {
      try {
        const url = `${externeURL}/api/team/get-teams`
        console.log('Fetching URL:', url)
        const response = await fetch(url, {
          redirect: 'follow'
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setTeams(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchTeam()
    const getNews = async () => {
      try {
        const url = `${externeURL}/api/news/get-news`
        console.log('Fetching URL:', url)
        const response = await fetch(url, {
          redirect: 'follow'
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setNews(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getNews()
  }, [externeURL])

  return (
    <div className='flex flex-col h-auto bg-cover bg-center ' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}  >
      <Hero infos={infos} />
      <TeamSection teams={teams} />
      <GamesSection games={games} />
      <NewsSection news={news} />
    </div>
  );
}
