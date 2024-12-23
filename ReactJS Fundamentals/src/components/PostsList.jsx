import { useState, useEffect } from 'react'
import styles from '../styles/components/PostsList.module.css'

const PostsList = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)
    const indexOfLastPosts = currentPage * postsPerPage
    const indexOfFirstPosts = indexOfLastPosts - postsPerPage
    const newList = posts.slice(indexOfFirstPosts, indexOfLastPosts)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        const fetchData = async () => {
            const url = import.meta.env.VITE_BASE_URL
            try {
                const response = await fetch(url)
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                alert('Have error')
            }
        }
        fetchData()
    }, [])

    const onChange = (e) => {
        setPostsPerPage(e.target.value)
        setCurrentPage(1)
    }

    return (
        <div className={styles.container}>
            <div>
                <span>Posts per page: </span>
                <select onChange={onChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {newList.map((post) => (
                        <tr key={post.id}>
                            <th className={styles.index}>{post.id}</th>
                            <td className={styles.title}>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.container}>
                {pageNumbers.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCurrentPage(item)}
                        className={`${styles.button} ${item == currentPage ? styles.active : ''}`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default PostsList
