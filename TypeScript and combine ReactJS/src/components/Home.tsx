import PostList from './PostList'
import Loading from './Loading'
import Panigation from './Panigation'
import { useEffect, useState } from 'react'
import PerPageSelect from './PerPageSelect'
import { useSearchParams } from 'react-router'
import { Post } from '../types/types'

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const currentPage = Number(searchParams.get('page') || '1')
    const limit = Number(searchParams.get('limit') || '10')

    const fetchData = async (page: number, limit: number) => {
        const base_url = import.meta.env.VITE_BASE_URL
        try {
            setIsLoading(true)
            const response = await fetch(
                `${base_url}/posts?_page=${page}&_limit=${limit}`,
            )
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            alert('Have error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(currentPage, limit)
    }, [currentPage, limit])

    return isLoading ? (
        <Loading />
    ) : (
        <>
            <PerPageSelect />
            <PostList posts={posts} />
            <Panigation />
        </>
    )
}

export default Home
