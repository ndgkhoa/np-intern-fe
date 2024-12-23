import React from 'react'
import { useSearchParams } from 'react-router'

const PerPageSelect = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const limit = searchParams.get('limit') || '10'

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        searchParams.set('limit', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <div className="mb-3">
            <span>Choose: </span>
            <select value={limit} onChange={onChange}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="45">45</option>
            </select>
        </div>
    )
}

export default PerPageSelect
