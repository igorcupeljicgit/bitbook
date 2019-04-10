import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className="card text-center">
                <div className="card-body text-white bg-dark">
                    &copy; {new Date().getFullYear()} Copyright PROJECT-X
                </div>
            </div>
        </footer>
    )
}

export default Footer