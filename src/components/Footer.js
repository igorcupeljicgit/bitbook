import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <div className="card text-center">
                <div className="card-body text-white bg-dark">
                    {new Date().getFullYear()}  Team name!!!
                </div>
            </div>
        </footer >
    )
}

export default Footer