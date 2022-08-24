import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ImageBoard from "../../components/ImageBoard/ImageBoard";
import {createImageBoard, getImageBoards} from "../../store/actions/imageBoardActions";
import FormImageBoard from "../../components/FormImageBoard/FormImageBoard";
import Spinner from "../../components/UI/Spinner/Spinner";
import './ImageBoards.css';

const ImageBoards = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.imageBoard.loading);
    const imageBoards = useSelector(state => state.imageBoard.boards);

    const onImageBoardFormSubmit = async boardData => {
        await dispatch(createImageBoard(boardData));
        await dispatch(getImageBoards());
    };

    useEffect(() => {
        dispatch(getImageBoards());
    }, [dispatch]);

    return loading ? <Spinner/> : (
        <>
            <div className='image-board-container'>
                {imageBoards.map(i => (
                    <ImageBoard
                        key={i.id}
                        author={i.author ? i.author : 'Anonymous'}
                        message={i.message}
                        image={i.image}
                    />
                ))}
            </div>
            <FormImageBoard
                createImageBoard={onImageBoardFormSubmit}
            />
        </>
    );
};

export default ImageBoards;