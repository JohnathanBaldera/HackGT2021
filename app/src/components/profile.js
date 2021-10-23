import React from 'react';

const Profile = () => {
    return (
        <div>
            <div style={styles.card}>
                <center>
                    <img style={styles.profilePic} src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0="/>
                    <h1 style={styles.name}>First Name Last Name</h1>
                    <hr />
                    <h2 style={styles.subheading}>Places of Interest</h2>
                    <h2 style={styles.subheading}>Pet Information</h2>
                    <button style={styles.button}>Update</button>
                </center>
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
}

export default Profile;