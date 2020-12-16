import React from 'react';
import { Grid } from "@material-ui/core";
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((v, id) => <VideoItem key={id} video={v} onVideoSelect={onVideoSelect} />)
    return (

        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;

