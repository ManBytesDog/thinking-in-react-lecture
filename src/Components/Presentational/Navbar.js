import React from 'react'

export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <img className="w-25"
            src="https://raw.githubusercontent.com/learn-co-curriculum/js-pokemon-search-practice-assignment/master/images/pokemon.png"
            alt=""/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add a pokemon</button>
        </nav>
    )
}
