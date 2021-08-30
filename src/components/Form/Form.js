import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import useStyles from './styles';


const Form = () => {
    const classes = useStyles();
    const user = true;
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const clear = () => {
        
    }

    return (
        <>
          {user && 
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Create a Post</Typography>
                    <TextField 
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField 
                        name="message"
                        variant="outlined"
                        label="Message"
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <TextField 
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

                </form>
            </Paper>
          }  
        </>
    )
}

export default Form;
