import React from 'react';
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
                <div style={styles.navBar}>
                    <div style={styles.link}>
                        <Link to="/">Home</Link>
                    </div>
                    <div style={styles.link}>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>

                <Switch>
                    <Route path="/profile">
                        <div>Profile</div>
                    </Route>
                    <Route path="/">
                        <div>Home</div>
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

        backgroundColor: 'gray',
        display: 'grid',
        gridTemplateRows: '50px 1fr',
    },

    navBar: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    link: {
        height: '100%',
        width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default Wrapper;