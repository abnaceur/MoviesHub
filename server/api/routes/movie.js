const express = require('express');
const router = express.Router();
const moviesContraoller = require('../controllers/moviesContraoller');

/*
** [POST] Route:"/movies/save" [USED]
*/
router.post('/save/:userId', moviesContraoller.saveMovieCOntroller)

/*
** [POST] Route:"/movies/stream/:magnet/:file_name" [USED]
*/
router.get('/stream/:torrentId', moviesContraoller.streamMovieCOntroller)

/*
** [POST] Route:"/movies/comment/save" [USED]
*/
router.post('/comment/save/:userId', moviesContraoller.saveCommentCOntroller)

/*
** [GET] Route:"/movies/comments/:movieId" [USED]
*/
router.get('/comments/:movieId', moviesContraoller.getCommentCOntroller)

/*
** [GET] Route:"/movies/views/:userId" [USED]
*/
router.get('/views/:userId', moviesContraoller.getCOntroller)

module.exports = router;