import React from 'react';
import DogInBed from "../img/DogInBed.png"

const Home = () => {
    return (
    <div className="home-div">
        <div className="home-search-box">
            <h2 className="home-search-box-header">Find a place to stay for you <br />and your pet.</h2>
            <p className="home-search-box-subheader">Discover hotels and their accomodations for <br />your pets.</p>
            <input className="home-search-box-location" type="text" placeholder="Location" />

            <div className="home-search-grid">
                <div className="home-search-box-checking-labels">
                    <label>Check In</label>
                </div>
                <div className="home-search-box-checking-labels">
                    <label>Check Out</label>
                </div>
                <div className="home-search-box-checking-dates">
                    <input className="home-search-box-checkin home-inputs" type="date" />
                </div>
                <div className="home-search-box-checking-dates">
                    <input className="home-search-box-checkout home-inputs" type="date" />
                </div>
                <div className="home-search-box-checking-labels">
                    <label>Adults</label>
                </div>
                <div className="home-search-box-checking-labels">
                    <label>Children</label>
                </div>
                <div className="home-search-box-checking-guests">
                    <input className="home-search-box-adults home-inputs" placeholder="1" type="number" />
                </div>
                <div className="home-search-box-checking-guests">
                    <input className="home-search-box-children home-inputs" placeholder="0" type="number" />
                </div>
            </div>

            <div>
                <h2 className="add-a-pet">+ Add a Pet</h2>
            </div>
            <div className="search-btn-div">
                <a href="#" className="search-btn">Search</a>
            </div>
        </div>

        <div className="home-background-image">
            <img src={DogInBed} alt="Dog in Bed" className="home-background-image" />
        </div>

    </div>
    )
}

export default Home