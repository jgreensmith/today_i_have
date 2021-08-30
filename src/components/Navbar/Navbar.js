import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';



const Navbar = () => {
    const classes = useStyles();
    const user = false;

    const logoutHandler = () => {

    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Today I Have</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={() => logoutHandler()}>Logout</Button> 
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary" >Sign in</Button> 
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
