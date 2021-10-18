import { useState, useEffect } from "react"
import { Loading } from "../../components"

const CobaPage = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <h1>CobaPage</h1>
        </div>
    )
}

export default CobaPage
