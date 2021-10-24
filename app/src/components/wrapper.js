import React from 'react';
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Wrapper = () => {
    return (
        <div style={styles.pageWrapper}>
            <Router>
                <div className="nav-bar">
                    <div className="nav-title">
                        <h1><Link to="/">Pet Friendly</Link></h1>
                    </div>

                    <ul className="nav-list">
                        <li className="nav-item">
                            Search
                        </li>
                        <li className="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                        
                </div>

                <Switch>
                    <Route path="/profile">
                        <div>Profile</div>
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