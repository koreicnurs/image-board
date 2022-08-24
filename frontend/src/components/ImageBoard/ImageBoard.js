import React from 'react';
import {Paper, Typography} from "@mui/material";
import {apiUrl} from "../../config";

const ImageBoard = (props) => {
    let boardImage = null;
    if (props.image) {
        boardImage = apiUrl + '/uploads/' + props.image;
    }

    return (
        <Paper className='box-message' elevation={3} square>
            <Typography variant="body2" className='text'><b>Author</b>: {props.author}</Typography>
            <Typography variant="body2" className='text'><b>Message</b>: {props.message}</Typography>
            {boardImage ? <img src={boardImage} alt=""/> : <img src="" alt="" style={{display: 'none'}}/>}
        </Paper>
    );
};
export default ImageBoard;