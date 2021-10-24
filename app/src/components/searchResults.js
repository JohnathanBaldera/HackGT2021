import React from 'react'

let hotelName = "Marriot"
let hotelPrice = 99.99
let hotelDescription = "This is a pet friendly hotel"
let hotelLocation = "Georgia Tech Campus"

const SearchResults = () => {
    return (
    <div className="results-container">
        <div className="results-left">
            <h3>{hotelName}</h3>
            <img src="" alt="" />
        </div>
        <div className="results-right">
            <div>
                <p>{hotelDescription}</p>
                <p>{hotelLocation}</p>
                <h4>{hotelPrice}</h4>
            </div>
        </div>
    </div>
    )
}

export default SearchResults