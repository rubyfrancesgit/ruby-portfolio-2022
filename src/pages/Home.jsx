import React from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'

function Home() {
    return (
        <>
            <Nav />
            <div className="right-page">
                <Landing />
            </div>
        </>
    )
}

export default Home
