import React, { useContext, useState } from 'react';
import { Avatar, Container, Grid, Button, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import { AuthContext } from '../../contexts/AuthContext';


const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const { login } = useContext(AuthContext);
    const history = useHistory();
    
    const switchMode = () => {
        setIsSignup(!isSignup);
        setShowPassword(false);
    };

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'shrek123@swamp.com',
            password: 'getoutmyswamp',
        };
        if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
            const token = '1234thisisatoken';

            sessionStorage.setItem('auth-token', token);
            login();
            history.push('/');
        } else {
            alert('wrong credentials');
        }

    };

    const handleChange = (e) => {
        // setForm({ ...form, [e.target.name]: e.target.value });
    };
    //set specific name to new value


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleEmailChange} value={emailInput} type="email" />
                        <Input name="password" label="Password" handleChange={handlePasswordChange} value={passwordInput} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'} 
                    </Button>
                   
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
};

export default Auth;
