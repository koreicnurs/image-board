const express = require('express');

const multer = require('multer');
const path = require('path');
const config = require('../config');
const {nanoid} = require('nanoid');

const fileDb = require('../fileDb');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    },
});

const upload = multer({storage});

router.get('/', (req, res) => {
    const messages = fileDb.getMessages();
    res.send(messages);
});

router.post('/', upload.single('image'), (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({error: 'Message missing'});
    }

    const boardMessage = {
        author: req.body.author,
        message: req.body.message,
    };

    if (req.file) {
        boardMessage.image = req.file.filename;
    }

    fileDb.addMessage(boardMessage);

    res.send(boardMessage);
});

module.exports = router;