import React from 'react'
import { Link } from 'react-router-dom';
import "./Breadcrumb.css"

const Breadcrumb = ({ level1 = {}, level2 = {} }) => {

    return (
        <nav className="breadcrumb-container">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-list-home">
                    <Link to="/" className="breadcrumb-link-home">
                        <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Inicio
                    </Link>
                </li>
                <li>
                    <div className="breadcrumb-list-link">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link to={`/category/${level1.id}`} className={level2.name ? "item" : "item-last"}>{level1.name}</Link>
                    </div>
                </li>
                {level2.name  &&
                    <li>
                        <div className="breadcrumb-list-link">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="item-last">{level2.name}</span>
                        </div>
                    </li>
                }
            </ol>
        </nav>
    )
}

export default Breadcrumb