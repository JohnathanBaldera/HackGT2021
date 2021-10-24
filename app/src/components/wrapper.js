import React, { useState } from 'react';
import Home from './home'
import SearchResults from "./searchResults"
import Profile from "./profile"
import Logo from "../img/Dog Icon.png"
import ProfileImage from "../img/VectorProfile.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Wrapper = () => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);


    return (
        <div style={styles.pageWrapper}>
            <Router>
                <div className="nav-bar">
                    <img src={Logo} alt="Logo" />
                    <div className="nav-title">
                        <h1><Link to="/">Pet Friendly</Link></h1>
                    </div>

                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/profile"><img src={ProfileImage} alt="link to profile" /></Link>
                        </li>
                    </ul>
                        
                </div>

                <Switch>
                    <Route path="/profile">
                        <Profile user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                    </Route>
                    <Route path="/searchResults">
                        <SearchResults />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};


const styles = {
    pageWrapper: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'auto',

        backgroundColor: 'white',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
    }
}

export default Wrapper;