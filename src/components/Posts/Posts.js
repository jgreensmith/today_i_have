import React, { useContext, useState } from 'react';
import { CircularProgress, InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import Post from './Post/Post';
import { PostContext } from '../../contexts/PostContext';


const Posts = () => {
    const classes = useStyles();
    const { posts } = useContext(PostContext);
    const [searchTags, setSearchTags] = useState("");


    return (
        <>
        {!posts.length ? <CircularProgress/> : (
            <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase 
                    placeholder="Search tags"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onChange={(e) => {setSearchTags(e.target.value)}}
                />
            </div>
            <Grid className={classes.mainContainer} alignItems="stretch">
                {posts.filter((post) => {
                    if(searchTags == "") {
                        return post;
                    } else if (post.tags.toLowerCase().includes(searchTags.toLowerCase())) {
                        return post;
                    }
                }).map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid> 
            </>
        )}  
        </>
    )
}

export default Posts;
