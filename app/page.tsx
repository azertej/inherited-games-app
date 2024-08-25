'use client'
import React, { useEffect, useState } from 'react'
import NewsSection from '@/components/layout/NewsSection';
import TeamSection from '@/components/layout/TeamSection';
import GamesSection from '@/components/layout/GamesSection';
import Hero from '@/components/layout/Hero';


export default function Home() {

  const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL || 'https://inherited-games-bo.vercel.app/'
  const [games, setGames] = useState([])
  const [infos, setInfos] = useState([])
  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${externeURL}/api/games/get-games`, {
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
        const response = await fetch(`${externeURL}/api/landingPage/get-heroSection-info`, {
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
        const response = await fetch(`${externeURL}/api/team/get-teams`, {
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
        const response = await fetch(`${externeURL}/api/news/get-news`, {
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
