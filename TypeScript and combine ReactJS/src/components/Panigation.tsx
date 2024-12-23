import { useSearchParams } from 'react-router'

const Panigation = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const totalPosts = 100
    const currentPage = Number(searchParams.get('page') || '1')
    const limit = Number(searchParams.get('limit') || '10')
    const totalPages: number[] = []
    for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) totalPages.push(i)

    const onClick = (page: number) => {
        searchParams.set('page', page + '')
        setSearchParams(searchParams)
    }

    return (
        <div className="flex justify-center">
            {totalPages.map((item) => (
                <button
                    onClick={() => onClick(item)}
                    key={item}
                    className={`p-1 mr-2 text-center w-6 border border-black text-[12px] ${currentPage == item && 'text-blue-500 border-2 border-blue-500'}`}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Panigation
