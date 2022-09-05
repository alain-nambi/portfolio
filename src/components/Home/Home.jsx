import { useEffect } from "react"

import "./Home.css"

function Home () {

    useEffect(() => {
        document.title = "Portfolio | Home"
    }, [])

    return (
        <div className="Home">
            Home
        </div>
    )
}

export default Home;