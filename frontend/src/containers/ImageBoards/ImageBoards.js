import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Grid} from "@mui/material";
import ImageBoard from "../../components/ImageBoard/ImageBoard";
import {createImageBoard, getImageBoards} from "../../store/actions/imageBoardActions";
import FormImageBoard from "../../components/FormImageBoard/FormImageBoard";
import Spinner from "../../components/UI/Spinner/Spinner";

const ImageBoards = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.imageBoard.loading);
    const imageBoards = useSelector(state => state.imageBoard.boards);

    const onImageBoardFormSubmit = async boardData => {
        dispatch(createImageBoard(boardData));
        await dispatch(getImageBoards());
    };

    useEffect(() => {
        dispatch(getImageBoards());
    }, [dispatch]);

    return loading ? <Spinner/> : (
        <>
            <Grid container direction="column" spacing={2} style={{margin: '100px'}}>
                <Grid item container spacing={3}>
                    {imageBoards.map(i => (
                        <ImageBoard
                            key={i.id}
                            author={i.author ? i.author : 'Anonymous'}
                            message={i.message}
                            image={i.image}
                        />
                    ))}
                </Grid>
            </Grid>
            <FormImageBoard
                onSubmit={onImageBoardFormSubmit}
            />
        </>
    );
};

export default ImageBoards;