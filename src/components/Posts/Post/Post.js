import React, { useContext } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'; 
import moment from 'moment';

import useStyles from './styles';
import { PostContext } from '../../../contexts/PostContext';
import { REMOVE_POST } from '../../../reducers/constants';
import { AuthContext } from '../../../contexts/AuthContext';


const Post = ({ post }) => {
    const classes = useStyles();
    const { dispatch } = useContext(PostContext);
    //dispatch from reducer
    const { user } = useContext(AuthContext);

    return (
        <Card className={classes.card} xs={12}>
            <div className={classes.details}>
                <Typography variant="h6">creator: Shrek</Typography>
                {/* {this would be user?.result.name} */}
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
                <Typography variant="body2" color="textSecondary">tags: {post.tags}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {user &&
                    <Button size="small" color="secondary" onClick={() => dispatch({ type: REMOVE_POST, id: post.id})} >
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                }
            </CardActions>
        </Card>
    )
}

export default Post;
