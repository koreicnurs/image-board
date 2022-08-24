import React from 'react';
import {Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";

const ImageBoard = (props) => {

    // if (props.image) {
    //     boardImage = apiUrl + '/uploads/' + props.image;
    // }

    return (
        <Paper className='box-message' elevation={3} square>
            <Typography variant="body2" className='text'><b>Author</b>: {props.author}</Typography>
            <Typography variant="body2" className='text'><b>Message</b>: {props.message}</Typography>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.author}
            />
        </Paper>
    );
};
export default ImageBoard;