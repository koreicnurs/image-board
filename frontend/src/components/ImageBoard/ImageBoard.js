import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {apiUrl} from "../../config";
import './ImageBoard.css';

const ImageBoard = (props) => {
    let boardImage = null;
    if (props.image) {
        boardImage = apiUrl + '/uploads/' + props.image;
    }

    return (
        <Card className='image-board-card'>
            <Typography gutterBottom variant="h5" component="div" className='author'>
                Author: {props.author}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='message'>
                Message: {props.message}
            </Typography>
            {boardImage ? <CardMedia className='img-board'
                component="img"
                height="300"
                image={boardImage}
                alt={props.author}
            /> : <CardMedia className='img-board'

                component="img"
                height="140"
                sx={{display: 'none'}}
            />}
        </Card>
    );
};
export default ImageBoard;