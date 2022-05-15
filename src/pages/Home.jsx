import React from 'react'
import Landing from '../components/Landing'
import PersonalProjects from '../components/PersonalProjects'
import ProgrammingToolbelt from '../components/ProgrammingToolbelt'
import SchoolProjects from '../components/SchoolProjects'

function Home() {
    return (
        <>
            <Landing />
            <ProgrammingToolbelt />
            <PersonalProjects />
            <SchoolProjects />
        </>
    )
}

export default Home
