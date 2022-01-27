import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <nav className="navbar navbar-dark navbar-dark bg-dark py-0" >
        <div className="container">
            <div className="col-8 ">
                <h1>
                    <Link to={'/'} className="navbar-brand mb-0 h1" style={{textDecoration:'none'}}>
                        cryptovision
                    </Link>
                </h1>
            </div>                   
        </div>          
    </nav>
    )
}