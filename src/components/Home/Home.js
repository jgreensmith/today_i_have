import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

const Home = () => {
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <h1>posts</h1>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h1>Form</h1>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
