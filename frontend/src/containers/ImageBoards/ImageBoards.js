import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Grid} from "@mui/material";
import ImageBoard from "../../components/ImageBoard/ImageBoard";
import {createImageBoard, getImageBoards} from "../../store/actions/imageBoardActions";
import FormImageBoard from "../../components/FormImageBoard/FormImageBoard";

const ImageBoards = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.imageBoard.loading);
    const imageBoards = useSelector(state => state.imageBoard.boards);

    const onImageBoardFormSubmit = boardData => {
        dispatch(createImageBoard(boardData));
    };

    useEffect(() => {
        dispatch(getImageBoards());
    }, [dispatch]);

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item container spacing={3}>
                    {imageBoards.map(i => (
                        <ImageBoard
                            key={i.id}
                            author={i.author}
                            message={i.message}
                            image={i.image}
                        />
                    ))}
                </Grid>
            </Grid>
            <FormImageBoard
                onSubmit={() => onImageBoardFormSubmit()}
            />
        </>
    );
};

export default ImageBoards;