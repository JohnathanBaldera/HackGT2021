import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (
    {user, setUser, loggedIn, setLoggedIn,}
    ) => {
    const [places, setPlaces] = useState([]);
    const [pets, setPets] = useState([]);

    const [usernameForm, setUsernameForm] = useState("");
    const [passwordForm, setPasswordForm] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        setPlaces("GHI");
        setPets("JKL");
    }, [places, pets]);

    const signOut = () => {
        setUser(null);
        setLoggedIn(false);
    }

    const logged = () => {
        return (
            <center>
                <img style={styles.profilePic} src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0="/>
                <h1 style={styles.name}>{user? user.first_name : ""} {user? user.last_name : ""}</h1>
                <hr />
                <h2 style={styles.subheading}>Places of Interest</h2>
                <ul>
                    {places}
                </ul>
                <h2 style={styles.subheading}>Pet Information</h2>
                <ul>
                    {pets}
                </ul>
                <button style={styles.button}>Update</button>
                <button style={styles.button} onClick={signOut}>Sign Out</button>
            </center>
            );
    }

    const onSubmitLogin = async e => {
        e.preventDefault();
        try {
            const body = {usernameForm, passwordForm};
            let response = await fetch('http://localhost:5000/verifyuser', {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            response = await response.json();
            console.log(response);
            if (response.success) {
                setErrorMsg(null);
                setUser(response.user);
                setLoggedIn(true);
            } else {
                setErrorMsg("Login Failed!");
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    const unlogged = () => {
        return (
            <center>
                <h2>Log In or Sign Up!</h2>
                <form onSubmit={onSubmitLogin}>
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" 
                        name="username" 
                        value={usernameForm} 
                        onChange={e => setUsernameForm(e.target.value)}></input><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="text"
                        name="password"
                        value={passwordForm}
                        onChange={e => setPasswordForm(e.target.value)}></input><br />
                    <div style={styles.formDiv}>
                        <Link style={styles.link} to="/signup">Sign up</Link>
                        <input type='submit' value='Log In' />
                    </div>
                    <p>{errorMsg || ""}</p>
                </form>

            </center>
            );
    }

    return (
        <div>
            <div style={styles.card}>
                {loggedIn ? logged() : unlogged()}
            </div>
        </div>
    );
}

const styles = {
    leftDiv: {
        backgroundColor: '#ce0000',
        display: 'inline-grid',
        width: '1%',
        height: '100%',
        gridColumnGap: '0%',
        padding: '0%',
        margins: '0%',
    },

    card: {
        backgroundColor: '#ce0000',
        width: '30%',
        display: 'inline-grid',
        padding: '30px',
        /*borderRadius: '5%',*/
        color: 'white',
        height: '100%',
        gridColumnGap: '0%',
    },

    profilePic: {
        height: '150px',
        width: '150px',
        borderRadius: '50%',
    },

    name: {
        textAlign: 'center',
        fontSize: '20px',
    },

    subheading: {
        textAlign: 'left',
        fontSize: '15px',
        fontFamily: 'Roboto',
    },

    button: {
        backgroundColor: 'white',
        color: 'black',
        width: '20%',
        height: '5%',
        borderRadius: '10%',
        fontFamily: 'Roboto',
    },

    link: {
        backgroundColor: 'rgb(239, 239, 239)',
        color: 'black',
        fontSize: '14px',
        borderRadius: '2px',
        padding: '2px',
    },

    formDiv: {
        width: '50%',
        marginTop: '25px',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
}

export default Profile;