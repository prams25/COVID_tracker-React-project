import React from 'react'

export default function Header() {
    return (
        <header style={hdrStyle}>
            <h1>COVID Tracker</h1>
        </header>
    )
}

const hdrStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    width: '100%'
}